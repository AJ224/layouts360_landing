"use client"
// Next.js App Router adapter. Render <Engine /> once, as the LAST child of <body> in the root
// layout (React runs child effects first, so page components register before the engine boots).
// Internal links (plain <a> or next/link) get the leave → push → enter continuity automatically.
// Opt a link out with data-no-transition. Back/forward re-inits the page without the veil.
import { useEffect, useRef, useSyncExternalStore } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { boot, cleanup, enter, leave, onPage, type PageFn } from "./index"

/** false during SSR + hydration; true only after the client tree has hydrated. */
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

export function Engine({ setup }: { setup?: () => void }) {
  const router = useRouter()
  const pathname = usePathname()
  const mode = useRef<"idle" | "push" | "pop">("idle")
  const first = useRef(true)
  const hydrated = useHydrated()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // GSAP SplitText / autoAlpha rewrite the DOM. Running that during hydration of the
    // sibling <Suspense> page tree causes "Hydration failed" / Suspense boundary errors.
    // useHydrated is false until this client tree has hydrated; then wait for the page
    // Suspense content to land before touching the DOM.
    if (!hydrated) return
    let cancelled = false
    let timer = 0
    let attempts = 0
    const start = () => {
      if (cancelled) return
      boot(setup).then(() => {
        ScrollTrigger.refresh()
      })
    }
    const waitForPage = () => {
      if (cancelled) return
      const pageReady = !!document.querySelector("main")
      if (!pageReady && attempts++ < 40) {
        timer = window.setTimeout(waitForPage, 50)
        return
      }
      timer = window.setTimeout(start, 150)
    }
    waitForPage()
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [hydrated])

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element).closest("a")
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download") || a.hasAttribute("data-no-transition")) return
      const url = new URL(a.href, location.href)
      if (url.origin !== location.origin || url.pathname === location.pathname) return
      if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/qr")) return
      e.preventDefault()
      if (mode.current !== "idle") return
      mode.current = "push"
      const href = url.pathname + url.search + url.hash
      router.prefetch(href)
      await leave()
      cleanup()
      router.push(href, { scroll: false })
      // Safety: if the route never commits (e.g. a hard redirect), release the veil.
      setTimeout(() => {
        if (mode.current === "push") {
          mode.current = "idle"
          enter({ transition: true, scrollTop: true })
        }
      }, 4000)
    }
    const onPop = () => {
      mode.current = "pop"
      cleanup()
    }
    document.addEventListener("click", onClick, true)
    addEventListener("popstate", onPop)
    return () => {
      document.removeEventListener("click", onClick, true)
      removeEventListener("popstate", onPop)
    }
  }, [router])

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const pop = mode.current === "pop"
    mode.current = "idle"
    enter({ transition: !pop, scrollTop: !pop })
  }, [pathname])

  return null
}

/** Component-level page code: runs when the page is ready, reverted on leave. */
export function usePage(fn: PageFn) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onPage(fn), [])
}

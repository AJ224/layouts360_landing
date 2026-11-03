// Engine core: page lifecycle on one GSAP clock. No DOM access at import time (SSR-safe).
// The Next adapter calls:
//   boot()                 once, on first load: flags → page init → intro
//   leave() → cleanup()    before a route swaps
//   enter()                after the new page is in the DOM: init → short enter fade → intro
// Project code hooks in with onPage(fn): fn runs on every page load inside a gsap.context, so
// the tweens and ScrollTriggers it creates are reverted automatically on navigation.
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { initReveals } from "./reveal"
import { ease, prefersReducedMotion } from "./env"

export { ease, isTouch, isMobile, prefersReducedMotion } from "./env"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  // Expose for debugging / refresh after late layout shifts.
  ;(window as unknown as { ScrollTrigger?: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger
}

export type PageFn = (page: { intro: gsap.core.Timeline; path: string }) => void | (() => void)
const pageFns = new Set<PageFn>()
const cleanups: (() => void)[] = []
let ctx: gsap.Context | null = null
let intro: gsap.core.Timeline | null = null
let ready = false
let booted = false

/** Run fn on every page load (and now, if a page is ready). Returns an unsubscribe. */
export function onPage(fn: PageFn) {
  pageFns.add(fn)
  if (ready) runPageFn(fn)
  return () => {
    pageFns.delete(fn)
  }
}

function runPageFn(fn: PageFn) {
  ctx?.add(() => {
    const c = fn({ intro: intro!, path: location.pathname })
    if (typeof c === "function") cleanups.push(c)
  })
}

export function syncFlags() {
  const h = document.documentElement.classList
  h.add("js")
  h.toggle("motion", !prefersReducedMotion())
}

function initPage() {
  syncFlags()
  ctx = gsap.context(() => {
    intro = initReveals(document)
  })
  // Mark booted only after reveals are bound so CSS hide cannot outrun GSAP.
  document.documentElement.classList.add("is-booted")
  ready = true
  pageFns.forEach(runPageFn)
  requestAnimationFrame(() => ScrollTrigger.refresh())
}

const veil = () => document.getElementById("veil")

export async function boot(setup?: () => void) {
  // Dev Strict Mode remounts the tree after the first effect. Re-init on the new DOM
  // instead of no-oping, otherwise CSS keeps [data-reveal]/[data-split] hidden forever.
  if (booted) {
    cleanup()
    initPage()
    document.documentElement.classList.add("is-loaded")
    intro?.play()
    return
  }
  booted = true
  syncFlags()
  setup?.()
  initPage()
  document.documentElement.classList.add("is-loaded")
  intro?.play()
}

/** Cover the page briefly so the swap reads as continuous. Resolves when covered. */
export async function leave() {
  const v = veil()
  if (!v) return
  await gsap.to(v, { autoAlpha: 1, duration: prefersReducedMotion() ? 0.15 : 0.28, ease: ease.soft })
}

/** Tear down the current page: reverts every tween, ScrollTrigger and split. */
export function cleanup() {
  if (!ready) return
  ready = false
  cleanups.splice(0).forEach((c) => {
    try {
      c()
    } catch {
      // Page hooks may setState after unmount during HMR / Strict Mode.
    }
  })
  try {
    // SplitText rewrites the DOM; React may already have moved/removed those nodes
    // during HMR. Swallow removeChild races so the next initPage can run clean.
    ctx?.revert()
  } catch {
    /* ignore NotFoundError: removeChild */
  }
  ctx = null
  intro = null
}

/** Init the new page. `transition: false` for back/forward, where no leave ran. */
export async function enter({ transition = true, scrollTop = true } = {}) {
  if (!booted) return
  cleanup()
  if (scrollTop) window.scrollTo(0, 0)
  initPage()
  const v = veil()
  if (transition && v) {
    await gsap.to(v, { autoAlpha: 0, duration: prefersReducedMotion() ? 0.15 : 0.45, ease: ease.soft })
  } else if (v) {
    gsap.set(v, { autoAlpha: 0 })
  }
  intro?.play()
}

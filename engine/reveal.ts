// Declarative motion through data attributes, authored in markup:
//   data-split="lines|words"      masked text reveal (SplitText), on scroll or on intro
//   data-reveal="up|fade|clip"    block reveal
//   data-intro                    play with the page intro instead of on scroll
//   data-delay="0.2"              extra delay in seconds
//   data-stagger                  reveal direct children one after another
// Every effect is skipped under reduced motion; CSS keeps content visible without JS.
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { ease, prefersReducedMotion } from "./env"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

const durations = { lines: 1.1, words: 1 } as const
const staggers = { lines: 0.07, words: 0.03 } as const

function mark(el: HTMLElement) {
  el.dataset.motion = "on"
}

function splitTween(el: HTMLElement, isIntro: boolean) {
  const type = (el.dataset.split || "lines") as keyof typeof durations
  const delay = parseFloat(el.dataset.delay || "0")
  const s = {
    tween: undefined as gsap.core.Tween | undefined,
    split: undefined as SplitText | undefined,
    done: false,
    requested: false,
  }
  mark(el)
  gsap.set(el, { visibility: "visible" })
  try {
    s.split = SplitText.create(el, {
      type: type === "lines" ? "lines" : "lines,words",
      mask: "lines",
      autoSplit: true,
      linesClass: "split-line",
      onSplit(self) {
        if (!el.isConnected) return
        mark(el)
        gsap.set(el, { visibility: "visible" })
        if (s.done) return
        const targets = type === "lines" ? self.lines : self.words
        if (!targets?.length) return
        s.tween = gsap.from(targets, {
          yPercent: 110,
          duration: durations[type],
          stagger: staggers[type],
          ease: ease.out,
          delay,
          paused: isIntro && !s.requested,
          onComplete: () => {
            s.done = true
          },
          scrollTrigger: isIntro ? undefined : { trigger: el, start: "top 88%", once: true },
        })
        return s.tween
      },
    })
  } catch {
    // Keep content visible; skip the masked reveal.
  }
  return () => {
    s.requested = true
    try {
      s.tween?.play()
    } catch {
      /* ignore */
    }
  }
}

function blockTween(el: HTMLElement, paused: boolean) {
  const kind = el.dataset.reveal || "up"
  const delay = parseFloat(el.dataset.delay || "0")
  const targets = el.hasAttribute("data-stagger") ? Array.from(el.children) : el
  const from: gsap.TweenVars =
    kind === "fade"
      ? { autoAlpha: 0 }
      : kind === "clip"
        ? { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 1 }
        : { y: 28, autoAlpha: 0 }
  const to: gsap.TweenVars = kind === "clip" ? { clipPath: "inset(0% 0% 0% 0%)" } : {}
  mark(el)
  gsap.set(el, { visibility: "visible" })
  if (targets !== el) {
    Array.from(el.children).forEach((child) => {
      if (child instanceof HTMLElement) mark(child)
    })
    gsap.set(targets, { visibility: "visible" })
  }
  return gsap.fromTo(targets, from, {
    ...to,
    y: 0,
    autoAlpha: 1,
    duration: kind === "fade" ? 0.9 : 1.1,
    ease: ease.out,
    delay,
    stagger: targets !== el ? 0.06 : 0,
    paused,
    scrollTrigger: paused ? undefined : { trigger: el, start: "top 90%", once: true },
  })
}

/** Wire every reveal inside `root`. Returns the paused intro timeline for the page entrance. */
export function initReveals(root: ParentNode = document) {
  const intro = gsap.timeline({ paused: true })
  if (prefersReducedMotion()) return intro

  root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    try {
      const isIntro = el.hasAttribute("data-intro")
      const play = splitTween(el, isIntro)
      if (isIntro) intro.add(play, 0)
    } catch {
      gsap.set(el, { visibility: "visible" })
    }
  })
  root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    try {
      const isIntro = el.hasAttribute("data-intro")
      const t = blockTween(el, isIntro)
      if (isIntro) intro.add(() => t.play(), 0)
    } catch {
      gsap.set(el, { visibility: "visible" })
      if (el.hasAttribute("data-stagger")) gsap.set(Array.from(el.children), { visibility: "visible" })
    }
  })
  return intro
}

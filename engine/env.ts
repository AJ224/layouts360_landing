export const prefersReducedMotion = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches
export const isTouch = () =>
  typeof matchMedia !== "undefined" && matchMedia("(hover: none), (pointer: coarse)").matches
export const isMobile = () => typeof matchMedia !== "undefined" && matchMedia("(max-width: 767px)").matches

/** Shared easing vocabulary. One family for the whole site. */
export const ease = {
  out: "expo.out",
  inOut: "expo.inOut",
  soft: "power3.out",
} as const

import type { CSSProperties } from "react"

const FADE_PATCHES = [
  { id: "p1", x: "18%", y: "32%", size: "42%", duration: 9.5, delay: 0 },
  { id: "p2", x: "78%", y: "28%", size: "38%", duration: 11, delay: 1.8 },
  { id: "p3", x: "52%", y: "72%", size: "48%", duration: 8.2, delay: 0.6 },
  { id: "p4", x: "32%", y: "58%", size: "34%", duration: 12.4, delay: 3.2 },
  { id: "p5", x: "68%", y: "62%", size: "36%", duration: 10.1, delay: 2.4 },
  { id: "p6", x: "12%", y: "70%", size: "30%", duration: 13.5, delay: 4.1 },
  { id: "p7", x: "88%", y: "48%", size: "32%", duration: 9.8, delay: 5.5 },
  { id: "p8", x: "44%", y: "22%", size: "28%", duration: 14.2, delay: 1.1 },
] as const

type HeroAtmosphereProps = {
  /** Unique prefix so SVG ids do not collide when used more than once on a page. */
  idPrefix?: string
}

/** Dark gradient + animated rounded-square field used on hero / CTA stages. */
export function HeroAtmosphere({ idPrefix = "hero" }: HeroAtmosphereProps) {
  const tile = `${idPrefix}-dot-tile`
  const band = `${idPrefix}-band`
  const baseFade = `${idPrefix}-base-fade`
  const blue = `${idPrefix}-dot-blue`
  const mask = `${idPrefix}-dot-mask`

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 85% 55% at 50% 100%, rgb(43 135 255 / 0.07) 0%, transparent 55%)",
            "radial-gradient(ellipse 90% 65% at 50% 108%, #3a3a3a 0%, #1c1c1c 28%, transparent 62%)",
            "radial-gradient(ellipse 70% 45% at 50% 100%, #2a2a2a 0%, transparent 50%)",
            "linear-gradient(180deg, #050505 0%, #0c0c0c 40%, #111111 100%)",
          ].join(", "),
        }}
        aria-hidden
      />

      <div className="hero-dot-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <svg
          className="hero-dot-field__base absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id={tile} width="14" height="14" patternUnits="userSpaceOnUse">
              <rect x="3.5" y="3.5" width="7" height="7" rx="1.75" fill="#8b929a" />
            </pattern>
            <radialGradient id={band} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="42%" stopColor="white" stopOpacity="0.15" />
              <stop offset="58%" stopColor="white" stopOpacity="0.85" />
              <stop offset="72%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={baseFade} cx="50%" cy="100%" r="75%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="45%" stopColor="white" stopOpacity="0.45" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={blue} cx="50%" cy="100%" r="55%">
              <stop offset="0%" stopColor="#2b87ff" stopOpacity="0.16" />
              <stop offset="50%" stopColor="#2b87ff" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#2b87ff" stopOpacity="0" />
            </radialGradient>
            <mask id={mask}>
              <rect width="1440" height="900" fill="black" />
              <ellipse cx="160" cy="380" rx="720" ry="640" fill={`url(#${band})`} />
              <ellipse cx="1280" cy="420" rx="720" ry="680" fill={`url(#${band})`} />
              <ellipse cx="720" cy="980" rx="900" ry="520" fill={`url(#${baseFade})`} />
            </mask>
          </defs>
          <g mask={`url(#${mask})`}>
            <rect width="1440" height="900" fill={`url(#${tile})`} />
            <rect width="1440" height="900" fill={`url(#${blue})`} style={{ mixBlendMode: "screen" }} />
          </g>
        </svg>

        {FADE_PATCHES.map((patch) => (
          <div
            key={patch.id}
            className="hero-dot-veil"
            style={
              {
                "--hx": patch.x,
                "--hy": patch.y,
                "--hs": patch.size,
                "--hd": `${patch.duration}s`,
                "--hdelay": `${patch.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </>
  )
}

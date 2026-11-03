"use client"

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber"
import { Billboard, Center, OrbitControls, Text, useGLTF } from "@react-three/drei"
import {
  Component,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import {
  Box3,
  Color,
  Group,
  Mesh,
  MeshStandardMaterial,
  Sphere,
  Vector3,
  type Object3D,
} from "three"
import { gsap } from "gsap"
import { STATUS_LABEL, type PlotStatus } from "./plan-data"
import { prefersReducedMotion } from "@/engine/env"
import { cn } from "@/lib/utils"

const BASE_URL = "/models/base.glb"
const STREAM_URL = "/models/stream.glb"
const TERRAIN_BG = "/images/marketing/layout-terrain-bg.jpg"

/** Drives a CSS background layer from OrbitControls — parallax while you drag/orbit the map. */
function OrbitParallax({
  onOrbit,
  enabled,
}: {
  onOrbit: (azimuth: number, polar: number) => void
  enabled: boolean
}) {
  const { controls } = useThree()
  const last = useRef({ az: NaN, pol: NaN })

  useFrame(() => {
    if (!enabled || !controls) return
    const c = controls as unknown as { getAzimuthalAngle?: () => number; getPolarAngle?: () => number }
    if (!c.getAzimuthalAngle || !c.getPolarAngle) return
    const az = c.getAzimuthalAngle()
    const pol = c.getPolarAngle()
    if (az === last.current.az && pol === last.current.pol) return
    last.current = { az, pol }
    onOrbit(az, pol)
  })

  return null
}

/** Plot fills: brand status softs + ~30% more opacity toward solid status ink. */
const STATUS_COLOR: Record<PlotStatus, string> = {
  available: "#a3d1bb",
  freezed: "#a6ccff",
  booked: "#f1cd96",
  sold: "#eaadaa",
}

const STATUS_SOFT: Record<PlotStatus, string> = {
  available: "#dcefe4",
  freezed: "#dbe9ff",
  booked: "#fbead0",
  sold: "#f8dcda",
}

const STATUS_DOT: Record<PlotStatus, string> = {
  available: "#1f8a5b",
  freezed: "#2b87ff",
  booked: "#d9890f",
  sold: "#c9403a",
}

const WHITE = "#ffffff"

const STATUS_POOL: PlotStatus[] = [
  "available",
  "available",
  "available",
  "available",
  "freezed",
  "freezed",
  "booked",
  "booked",
  "sold",
]

/** Deterministic “random” status from plot id (stable across reloads). */
function statusForPlot(id: number): PlotStatus {
  let h = Math.imul(id ^ 0x9e3779b9, 0x85ebca6b) >>> 0
  h = (Math.imul(h ^ (h >>> 13), 0xc2b2ae35) >>> 0) ^ (h >>> 16)
  return STATUS_POOL[h % STATUS_POOL.length]
}

type HoverInfo = { id: number; status: PlotStatus } | null

type PlotMarker = {
  id: number
  status: PlotStatus
  position: [number, number, number]
  fontSize: number
}

type PreparedPlots = { markers: PlotMarker[]; meshes: Mesh[] }

function prepareScene(root: Object3D, colorPlots: boolean): PreparedPlots {
  const markers: PlotMarker[] = []
  const meshes: Mesh[] = []
  root.traverse((obj) => {
    const mesh = obj as Mesh
    if (!mesh.isMesh) return
    mesh.castShadow = false
    mesh.receiveShadow = false
    // Avoid coplanar flicker between base / stream layers.
    mesh.renderOrder = colorPlots ? 0 : 2
    try {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      mats.forEach((m, i) => {
        if (!m) return
        const cloned = (m as MeshStandardMaterial).clone() as MeshStandardMaterial
        const isPlot = colorPlots && /^\d+$/.test(mesh.name) && "color" in cloned

        // Depth bias stops Z-fighting when roads/grounds share a plane.
        cloned.polygonOffset = true
        cloned.polygonOffsetFactor = colorPlots ? (isPlot ? -1 : 1) : -2
        cloned.polygonOffsetUnits = colorPlots ? (isPlot ? -1 : 1) : -2
        cloned.depthWrite = true
        cloned.needsUpdate = true

        if (isPlot) {
          const id = Number(mesh.name)
          const st = statusForPlot(id)
          // Start white — status colors only appear when the toggle is on.
          cloned.color = new Color(WHITE)
          if ("emissive" in cloned) {
            cloned.emissive = new Color("#000000")
            cloned.emissiveIntensity = 0
          }
          if ("roughness" in cloned) cloned.roughness = 0.72
          if ("metalness" in cloned) cloned.metalness = 0.04
          mesh.userData.plotId = id
          mesh.userData.status = st
          mesh.userData.statusColor = STATUS_COLOR[st]
          meshes.push(mesh)

          const box = new Box3().setFromObject(mesh)
          if (!box.isEmpty()) {
            const center = box.getCenter(new Vector3())
            const size = box.getSize(new Vector3())
            const span = Math.min(size.x || size.z, size.z || size.x) || 0.4
            markers.push({
              id,
              status: st,
              position: [center.x, center.y + Math.max(size.y, 0.02) * 0.55 + 0.08, center.z],
              fontSize: Math.max(0.1, Math.min(span * 0.42, 0.55)),
            })
          }
        }
        if (Array.isArray(mesh.material)) mesh.material[i] = cloned
        else mesh.material = cloned
      })
    } catch {
      /* keep original */
    }
  })
  return { markers, meshes }
}

/** Random staggered fade: white ↔ status color (green / blue / orange / red only). */
function fadePlotColors(meshes: Mesh[], showStatus: boolean, instant: boolean) {
  const order = [...meshes].sort(() => Math.random() - 0.5)
  order.forEach((mesh, i) => {
    const mat = mesh.material as MeshStandardMaterial
    if (!mat?.color) return
    gsap.killTweensOf(mat.color)
    const target = new Color(showStatus ? (mesh.userData.statusColor as string) : WHITE)
    const delay = instant ? 0 : Math.random() * 0.85 + i * 0.0015
    const duration = instant ? 0.12 : 0.45 + Math.random() * 0.35
    gsap.to(mat.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        if (!mat.emissive) return
        if (showStatus) {
          mat.emissive.copy(mat.color)
          mat.emissiveIntensity = 0.1
        } else {
          mat.emissive.setRGB(0, 0, 0)
          mat.emissiveIntensity = 0
        }
      },
    })
  })
}

/** Hover/select: brightness only — never paint a different hue (fixes multi-plot blue). */
function setPlotHighlight(mesh: Mesh | null, on: boolean, statusOn: boolean) {
  if (!mesh) return
  const mat = mesh.material as MeshStandardMaterial
  if (!mat) return
  if (on) {
    mat.emissiveIntensity = statusOn ? 0.32 : 0.14
    if (!statusOn && mat.emissive) mat.emissive.setRGB(0.15, 0.15, 0.15)
  } else if (mat.emissive) {
    if (statusOn) {
      mat.emissive.copy(mat.color)
      mat.emissiveIntensity = 0.1
    } else {
      mat.emissive.setRGB(0, 0, 0)
      mat.emissiveIntensity = 0
    }
  }
}

function PlotNumbers({ markers }: { markers: PlotMarker[] }) {
  return (
    <group>
      {markers.map((m) => (
        <Billboard key={m.id} position={m.position} follow>
          <Text
            fontSize={m.fontSize}
            color="#0f172a"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.018}
            outlineColor="#ffffff"
            characters="0123456789"
            renderOrder={2}
          >
            {String(m.id)}
          </Text>
        </Billboard>
      ))}
    </group>
  )
}

function plotFromEvent(e: ThreeEvent<PointerEvent>): Mesh | null {
  let obj: Object3D | null = e.object
  while (obj) {
    if (obj.userData?.plotId != null) return obj as Mesh
    obj = obj.parent
  }
  return null
}

function useFrameToModel(groupRef: React.RefObject<Group | null>, readyToken: unknown) {
  const { camera, controls } = useThree()

  useLayoutEffect(() => {
    // Center has applied its transform by layout time; measure world bounds.
    const run = () => {
      const group = groupRef.current
      if (!group) return false
      group.updateWorldMatrix(true, true)
      const box = new Box3().setFromObject(group)
      if (box.isEmpty()) return false

      const center = box.getCenter(new Vector3())
      const sphere = box.getBoundingSphere(new Sphere())
      const radius = Math.max(sphere.radius, 0.5)
      const dist = radius * 2.4
      const dir = new Vector3(0.7, 0.9, 1.05).normalize()

      camera.position.copy(center).addScaledVector(dir, dist)
      // Wider near plane = better depth precision (cuts Z-fighting when zooming).
      camera.near = Math.max(dist / 80, 0.35)
      camera.far = dist * 40
      camera.lookAt(center)
      camera.updateProjectionMatrix()

      const orbit = controls as unknown as { target?: Vector3; update?: () => void } | undefined
      if (orbit?.target) {
        orbit.target.copy(center)
        orbit.update?.()
      }
      return true
    }

    // Retry a few frames — Center / matrix updates can lag one tick.
    let frames = 0
    let raf = 0
    const loop = () => {
      if (run() || frames++ > 40) return
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [camera, controls, groupRef, readyToken])
}

function LayoutModels({
  onHover,
  selectedId,
  onSelect,
  onReady,
  statusOn,
  reducedMotion,
}: {
  onHover: (info: HoverInfo) => void
  selectedId: number | null
  onSelect: (info: HoverInfo) => void
  onReady?: () => void
  statusOn: boolean
  reducedMotion: boolean
}) {
  const base = useGLTF(BASE_URL)
  const stream = useGLTF(STREAM_URL)
  const groupRef = useRef<Group>(null)
  const hoverRef = useRef<Mesh | null>(null)
  const selectedRef = useRef<number | null>(null)
  const statusOnRef = useRef(statusOn)
  selectedRef.current = selectedId
  statusOnRef.current = statusOn

  const { baseScene, streamScene, markers, plotMeshes } = useMemo(() => {
    const b = base.scene.clone(true)
    const s = stream.scene.clone(true)
    const prepared = prepareScene(b, true)
    prepareScene(s, false)
    // Lift site stream slightly so roads/trees don't fight the plot ground plane.
    s.position.y += 0.025
    return {
      baseScene: b,
      streamScene: s,
      markers: prepared.markers,
      plotMeshes: prepared.meshes,
    }
  }, [base.scene, stream.scene])

  useFrameToModel(groupRef, baseScene)

  useEffect(() => {
    onReady?.()
  }, [onReady, baseScene])

  // Status toggle: random staggered fade to status colors / back to white.
  useEffect(() => {
    fadePlotColors(plotMeshes, statusOn, reducedMotion)
    // Clear hover highlight so it doesn't stick across the fade.
    setPlotHighlight(hoverRef.current, false, statusOn)
  }, [statusOn, plotMeshes, reducedMotion])

  useEffect(() => {
    // Restore previous selection highlight without recoloring other plots.
    plotMeshes.forEach((mesh) => {
      const active = mesh.userData.plotId === selectedId
      setPlotHighlight(mesh, active, statusOnRef.current)
    })
  }, [selectedId, plotMeshes])

  return (
    <Center top>
      <group ref={groupRef}>
        <primitive
          object={baseScene}
          onPointerMove={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation()
            const plot = plotFromEvent(e)
            if (!plot) return
            if (hoverRef.current === plot) return
            if (hoverRef.current && hoverRef.current.userData.plotId !== selectedRef.current) {
              setPlotHighlight(hoverRef.current, false, statusOnRef.current)
            }
            hoverRef.current = plot
            if (plot.userData.plotId !== selectedRef.current) {
              setPlotHighlight(plot, true, statusOnRef.current)
            }
            onHover({ id: plot.userData.plotId, status: plot.userData.status })
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={() => {
            if (hoverRef.current && hoverRef.current.userData.plotId !== selectedRef.current) {
              setPlotHighlight(hoverRef.current, false, statusOnRef.current)
            }
            hoverRef.current = null
            onHover(null)
            document.body.style.cursor = "auto"
          }}
          onClick={(e: ThreeEvent<PointerEvent>) => {
            e.stopPropagation()
            const plot = plotFromEvent(e)
            if (!plot) return
            // Clear old selection highlight
            plotMeshes.forEach((mesh) => {
              if (mesh.userData.plotId === selectedRef.current) {
                setPlotHighlight(mesh, false, statusOnRef.current)
              }
            })
            onSelect({ id: plot.userData.plotId, status: plot.userData.status })
            setPlotHighlight(plot, true, statusOnRef.current)
          }}
        />
        <primitive object={streamScene} />
        <PlotNumbers markers={markers} />
      </group>
    </Center>
  )
}

class SceneErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {
    this.props.onError()
  }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

/** Soft probe only — never loseContext() (poisons later canvases). */
function canUseWebGL(): boolean {
  try {
    const el = document.createElement("canvas")
    return !!(
      el.getContext("webgl2", { failIfMajorPerformanceCaveat: false }) ||
      el.getContext("webgl", { failIfMajorPerformanceCaveat: false })
    )
  } catch {
    return false
  }
}

export function TownshipScene({ className }: { className?: string }) {
  const [hover, setHover] = useState<HoverInfo>(null)
  const [selected, setSelected] = useState<HoverInfo>(null)
  const [reduced, setReduced] = useState(false)
  const [failed, setFailed] = useState(false)
  const [booted, setBooted] = useState(false)
  const [modelsReady, setModelsReady] = useState(false)
  const [statusOn, setStatusOn] = useState(false)
  /** null while probing — never mount <Canvas> until true (avoids Next.js Unhandled Runtime Error). */
  const [webglOk, setWebglOk] = useState<boolean | null>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setReduced(prefersReducedMotion())
    setWebglOk(canUseWebGL())
  }, [])

  // Force a canvas resize when the shell gets a real size (fixes blank WebGL after layout).
  useEffect(() => {
    const el = shellRef.current
    if (!el || typeof ResizeObserver === "undefined") return
    const ro = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const onOrbit = useCallback(
    (azimuth: number, polar: number) => {
      const el = bgRef.current
      if (!el || reduced) return
      // Parallax: terrain drifts opposite to orbit so the scene feels grounded in the landscape.
      const x = Math.sin(azimuth) * 28
      const y = (polar - 0.85) * 36
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(1.22)`
    },
    [reduced],
  )

  const active = hover ?? selected
  const showCanvas = webglOk === true && !failed
  const staticOnly = webglOk === false || failed
  const showLoader = !staticOnly && (webglOk === null || !booted || !modelsReady)

  return (
    <div
      ref={shellRef}
      className={cn(
        "relative isolate h-full min-h-[20rem] w-full overflow-hidden rounded-xl border border-white/10 bg-[#141414] sm:rounded-2xl",
        className,
      )}
    >
      {/* Terrain photo — 40% opacity (−60% fade) over Chinese Black; moves with orbit */}
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-[-12%] z-0 will-change-transform"
        style={{
          backgroundImage: `url(${TERRAIN_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: staticOnly ? 0.75 : 0.4,
          transform: "translate3d(0, 0, 0) scale(1.22)",
        }}
      />

      {showLoader ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <p className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white/70 shadow-sm">
            Loading 3D layout…
          </p>
        </div>
      ) : null}

      {showCanvas ? (
        <div className="absolute inset-0 z-[1]">
          {/* Boundary must wrap <Canvas> — context errors throw in Canvas itself, not children */}
          <SceneErrorBoundary onError={() => setFailed(true)}>
            <Canvas
              dpr={[1, 1.5]}
              camera={{ position: [8, 10, 12], fov: 42, near: 0.5, far: 2000 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "default",
                failIfMajorPerformanceCaveat: false,
              }}
              style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
              onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0)
                setBooted(true)
              }}
              onPointerMissed={() => setSelected(null)}
            >
              <ambientLight intensity={0.95} />
              <directionalLight position={[6, 10, 4]} intensity={1.4} />
              <directionalLight position={[-4, 3, -2]} intensity={0.45} color="#b9d6c3" />
              <hemisphereLight args={["#f7f9fb", "#b7c4bc", 0.55]} />

              <Suspense fallback={null}>
                <LayoutModels
                  selectedId={selected?.id ?? null}
                  onHover={setHover}
                  onSelect={setSelected}
                  onReady={() => setModelsReady(true)}
                  statusOn={statusOn}
                  reducedMotion={reduced}
                />
                <OrbitControls
                  makeDefault
                  enablePan={false}
                  minPolarAngle={0.25}
                  maxPolarAngle={1.35}
                  minDistance={4}
                  maxDistance={120}
                  autoRotate={!reduced && !hover && !selected}
                  autoRotateSpeed={0.45}
                  enableDamping
                  dampingFactor={0.08}
                />
                <OrbitParallax onOrbit={onOrbit} enabled={!reduced} />
              </Suspense>
            </Canvas>
          </SceneErrorBoundary>
        </div>
      ) : null}

      {showCanvas ? (
        <div className="pointer-events-none absolute left-4 top-4 z-20 flex max-w-[min(100%-8rem,18rem)] flex-col gap-2">
          <div className="rounded-lg border border-white/70 bg-white/92 px-3 py-2 text-xs shadow-md backdrop-blur-sm">
            {active ? (
              <p className="font-semibold text-slate-900">
                Plot {active.id}
                <span
                  className="ml-2 inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                  style={{
                    background: STATUS_SOFT[active.status],
                    color: STATUS_DOT[active.status],
                  }}
                >
                  {STATUS_LABEL[active.status]}
                </span>
              </p>
            ) : (
              <p className="font-medium text-slate-500">Hover a plot · drag to orbit</p>
            )}
          </div>
        </div>
      ) : null}

      {showCanvas ? (
        <button
          type="button"
          onClick={() => setStatusOn((v) => !v)}
          className={cn(
            "absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur-sm transition-colors",
            statusOn
              ? "border-available/40 bg-available text-white"
              : "border-white/70 bg-white/92 text-ink hover:bg-white",
          )}
          aria-pressed={statusOn}
        >
          <span
            className={cn("h-2 w-2 rounded-full", statusOn ? "bg-white" : "bg-subtle")}
            aria-hidden
          />
          Status {statusOn ? "on" : "off"}
        </button>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-4 pt-14">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-white/85">
          {(Object.keys(STATUS_COLOR) as PlotStatus[]).map((s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: STATUS_DOT[s] }} aria-hidden />
              {STATUS_LABEL[s]}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

useGLTF.preload(BASE_URL)
useGLTF.preload(STREAM_URL)

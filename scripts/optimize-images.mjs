/**
 * Compress PNG/JPEG assets to WebP for production.
 * Requires: cwebp (brew install webp)
 * Run: node scripts/optimize-images.mjs
 */
import { execSync } from "child_process"
import fs from "fs"
import path from "path"

const ROOT = path.join(process.cwd(), "public")
const TARGETS = [
  "herosection.png",
  "assets/images/DashboardPreview.png",
  "assets/images/availabilitystatus.png",
  "assets/images/gallery.png",
  "assets/images/allscreensupport.png",
  "assets/images/plotdetailsontap.jpeg",
]

function run(cmd) {
  execSync(cmd, { stdio: "inherit" })
}

let converted = 0
for (const rel of TARGETS) {
  const src = path.join(ROOT, rel)
  if (!fs.existsSync(src)) {
    console.warn(`skip (missing): ${rel}`)
    continue
  }
  const out = src.replace(/\.(png|jpe?g)$/i, ".webp")
  run(`cwebp -q 82 "${src}" -o "${out}"`)
  converted++
}

console.log(`Converted ${converted} image(s) to WebP.`)

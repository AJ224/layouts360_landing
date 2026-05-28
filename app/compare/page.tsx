import { redirect } from "next/navigation"

/** Compare listings live on /blog; articles stay at /compare/[slug] */
export default function CompareIndexPage() {
  redirect("/blog#comparisons")
}

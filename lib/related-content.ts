import {
  getAllFeedItemsSorted,
  type ContentKind,
  type FeedItem,
} from "@/lib/content-feed"

function tagOverlapScore(a: string[] | undefined, b: string[] | undefined): number {
  if (!a?.length || !b?.length) return 0
  const setB = new Set(b.map((t) => t.toLowerCase()))
  return a.filter((t) => setB.has(t.toLowerCase())).length
}

export function getRelatedFeedItems(
  currentSlug: string,
  currentKind: ContentKind,
  currentTags: string[] | undefined,
  limit = 4,
): FeedItem[] {
  const candidates = getAllFeedItemsSorted().filter(
    (item) => !(item.slug === currentSlug && item.kind === currentKind),
  )

  return [...candidates]
    .sort((a, b) => {
      const kindBoostA = a.kind === currentKind ? 1 : 0
      const kindBoostB = b.kind === currentKind ? 1 : 0
      if (kindBoostB !== kindBoostA) return kindBoostB - kindBoostA

      const tagA = tagOverlapScore(currentTags, a.tags)
      const tagB = tagOverlapScore(currentTags, b.tags)
      if (tagB !== tagA) return tagB - tagA

      return a.date < b.date ? 1 : -1
    })
    .slice(0, limit)
}

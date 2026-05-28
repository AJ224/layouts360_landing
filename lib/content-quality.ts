/** Minimum body words for indexable articles (excludes frontmatter). */
export const MIN_INDEXABLE_WORD_COUNT = 400

export function countWords(markdownBody: string): number {
  const plain = markdownBody
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`~\[\]()>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  if (!plain) return 0
  return plain.split(" ").length
}

export function isSubstantiveArticle(markdownBody: string): boolean {
  return countWords(markdownBody) >= MIN_INDEXABLE_WORD_COUNT
}

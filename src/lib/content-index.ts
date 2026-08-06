// ============================================================================
// SKM Laws & Associates
// Enterprise Content Index
// Build 023.7
// ============================================================================

import fg from "fast-glob";

const ARTICLE_PATTERN = "**/*.md";

export async function getArticleFiles(): Promise<string[]> {
  return fg(ARTICLE_PATTERN, {
    cwd: "src/content/articles",
    onlyFiles: true,
  });
}
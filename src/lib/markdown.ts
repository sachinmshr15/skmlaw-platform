// ============================================================================
// SKM Laws And Associates
// Enterprise Markdown Engine
// Build 023.5
// ============================================================================

import { remark } from "remark";

import remarkGfm from "remark-gfm";

import remarkRehype from "remark-rehype";

import rehypeSlug from "rehype-slug";

import rehypeAutolinkHeadings from "rehype-autolink-headings";

import rehypeStringify from "rehype-stringify";

export async function renderMarkdown(
  markdown: string,
): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
// ============================================================================
// SKM Laws & Associates
// Knowledge Centre Types
// Build 023
// ============================================================================

export type ArticleCategory =
  | "Income Tax"
  | "GST"
  | "Appeals"
  | "Business Advisory"
  | "Tax Planning"
  | "Compliance"
  | "Startup"
  | "General";

export interface ArticleAuthor {
  name: string;

  designation: string;

  image: string;
}

export interface ArticleSEO {
  title: string;

  description: string;

  keywords: string[];
}

export interface Article {
  // -------------------------------------------------------------------------
  // Identity
  // -------------------------------------------------------------------------

  slug: string;

  title: string;

  excerpt: string;

  /**
   * Relative markdown file path.
   * Example:
   * gst/gst-registration-guide.md
   */
  contentFile: string;

  /**
   * Raw markdown content.
   */
  content: string;

  // -------------------------------------------------------------------------
  // Classification
  // -------------------------------------------------------------------------

  category: ArticleCategory;

  tags: string[];

  featured: boolean;

  published: boolean;

  // -------------------------------------------------------------------------
  // Publishing
  // -------------------------------------------------------------------------

  publishedAt: string;

  updatedAt?: string;

  readingTime: number;

  // -------------------------------------------------------------------------
  // Media
  // -------------------------------------------------------------------------

  coverImage: string;

  coverImageAlt: string;

  // -------------------------------------------------------------------------
  // Author
  // -------------------------------------------------------------------------

  author: ArticleAuthor;

  // -------------------------------------------------------------------------
  // SEO
  // -------------------------------------------------------------------------

  seo: ArticleSEO;
}
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const CATEGORIES = [
  "Corporate Law",
  "Securities Regulation",
  "Financial Regulation",
  "Research Methods"
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ReferenceItem = {
  id: string;
  text: string;
  authors?: string;
  title?: string;
  container?: string;
  year?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  doi?: string;
  url?: string;
  type?: "article" | "book" | "report" | "chapter" | "case" | "other";
};

export type HeadingItem = {
  level: 2 | 3;
  text: string;
  id: string;
};

export type ArticleMeta = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  tags: string[];
  keywords: string[];
  summary: string;
  category: Category;
  references: ReferenceItem[];
  related: string[];
  readMinutes: string;
};

export type Article = ArticleMeta & {
  content: string;
  toc: HeadingItem[];
};

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

function slugify(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000]+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "")
    .replace(/-+/g, "-");
}

function extractToc(source: string): HeadingItem[] {
  const lines = source.split("\n");
  const toc: HeadingItem[] = [];

  for (const line of lines) {
    const matched = line.match(/^(##|###)\s+(.+)$/);
    if (!matched) continue;
    const level = matched[1] === "##" ? 2 : 3;
    const text = matched[2].replace(/[#*`]/g, "").trim();
    toc.push({
      level,
      text,
      id: slugify(text)
    });
  }

  return toc;
}

function parseFrontmatter(raw: string, slug: string): Article {
  const { data, content } = matter(raw);

  const title = String(data.title ?? "Untitled Article");
  const subtitle = String(data.subtitle ?? "");
  const author = String(data.author ?? "Editorial Team");
  const date = String(data.date ?? "1970-01-01");
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const keywords = Array.isArray(data.keywords) ? data.keywords.map(String) : tags;
  const summary = String(data.summary ?? data.abstract ?? "");
  const category = (CATEGORIES.includes(data.category) ? data.category : "Research Methods") as Category;
  const related = Array.isArray(data.related) ? data.related.map(String) : [];
  const references = Array.isArray(data.references)
    ? data.references.map((item, idx) => {
        if (typeof item === "string") {
          return { id: `[${idx + 1}]`, text: item };
        }
        return {
          id: String(item.id ?? `[${idx + 1}]`),
          text: String(item.text ?? ""),
          authors: item.authors ? String(item.authors) : undefined,
          title: item.title ? String(item.title) : undefined,
          container: item.container ? String(item.container) : undefined,
          year: item.year ? String(item.year) : undefined,
          volume: item.volume ? String(item.volume) : undefined,
          issue: item.issue ? String(item.issue) : undefined,
          pages: item.pages ? String(item.pages) : undefined,
          publisher: item.publisher ? String(item.publisher) : undefined,
          doi: item.doi ? String(item.doi) : undefined,
          url: item.url ? String(item.url) : undefined,
          type: item.type ? String(item.type) as ReferenceItem["type"] : undefined
        };
      })
    : [];

  return {
    slug,
    title,
    subtitle,
    author,
    date,
    tags,
    keywords,
    summary,
    category,
    references,
    related,
    readMinutes: readingTime(content).text,
    content,
    toc: extractToc(content)
  };
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(POSTS_DIRECTORY).filter((name) => name.endsWith(".mdx") || name.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/i, "");
      const fullPath = path.join(POSTS_DIRECTORY, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const article = parseFrontmatter(raw, slug);
      return {
        slug: article.slug,
        title: article.title,
        subtitle: article.subtitle,
        author: article.author,
        date: article.date,
        tags: article.tags,
        keywords: article.keywords,
        summary: article.summary,
        category: article.category,
        references: article.references,
        related: article.related,
        readMinutes: article.readMinutes
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const extCandidates = [".mdx", ".md"];

  for (const ext of extCandidates) {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}${ext}`);
    if (fs.existsSync(fullPath)) {
      const raw = fs.readFileSync(fullPath, "utf8");
      return parseFrontmatter(raw, slug);
    }
  }

  return null;
}

export function getArticlesByCategory(category: Category): ArticleMeta[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): ArticleMeta[] {
  const all = getAllArticles().filter((item) => item.slug !== article.slug);

  const explicit = article.related
    .map((slug) => all.find((item) => item.slug === slug))
    .filter((item): item is ArticleMeta => Boolean(item));

  if (explicit.length >= limit) {
    return explicit.slice(0, limit);
  }

  const keywordSet = new Set(article.keywords);
  const fallback = all
    .filter((item) => !explicit.some((picked) => picked.slug === item.slug))
    .filter((item) => item.category === article.category || item.keywords.some((k) => keywordSet.has(k)))
    .slice(0, limit - explicit.length);

  return [...explicit, ...fallback];
}

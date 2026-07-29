import Link from "next/link";
import type { ArticleMeta } from "@/lib/content";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="border-t border-border/70 py-5">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="rounded bg-slate-100 px-2 py-1">{article.category}</span>
        <span>{article.date}</span>
        <span>·</span>
        <span>{article.readMinutes}</span>
      </div>
      <h3 className="mb-2 font-serifCn text-xl text-accent">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mb-3 text-sm text-ink">{article.summary}</p>
      <div className="flex flex-wrap gap-2 text-xs text-muted">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded bg-slate-50 px-2 py-1">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

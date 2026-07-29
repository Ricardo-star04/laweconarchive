import Link from "next/link";
import type { ArticleMeta } from "@/lib/content";

export function RelatedArticles({ items }: { items: ArticleMeta[] }) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="mt-14 pt-8">
      <p className="text-xs uppercase text-signal">Continue reading</p>
      <h2 className="mb-4 mt-1 font-serifCn text-2xl text-accent">Selected Further Reading</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.slug} className="border-t border-border/70 py-4">
            <p className="text-xs text-muted">{item.category}</p>
            <h3 className="mt-2 font-serifCn text-lg text-accent">
              <Link href={`/articles/${item.slug}`} className="underline underline-offset-2">
                {item.title}
              </Link>
            </h3>
            {item.subtitle ? <p className="mt-2 text-sm text-muted">{item.subtitle}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { ArticleToc } from "@/components/article-toc";
import { MdxRenderer } from "@/components/mdx-renderer";
import { RelatedArticles } from "@/components/related-articles";
import { ReferenceList } from "@/components/reference-list";
import { formatZhDate } from "@/lib/date";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.summary,
    keywords: [...article.keywords, ...article.tags, article.category, "law and economics"]
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 2);

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,760px)_260px] lg:justify-between">
      <article className="prose-academic max-w-none">
        <header className="mb-10 border-b border-border pb-8">
          <p className="mb-4 text-xs uppercase text-signal">{article.category}</p>
          <AcademicTitle title={article.title} />
          {article.subtitle ? <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{article.subtitle}</p> : null}

          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 py-4 text-sm text-muted sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase">Author</dt>
              <dd className="mt-1 text-ink">{article.author}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase">Date</dt>
              <dd className="mt-1 text-ink">{formatZhDate(article.date)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase">Reading</dt>
              <dd className="mt-1 text-ink">{article.readMinutes}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase">Format</dt>
              <dd className="mt-1 text-ink">Study note</dd>
            </div>
          </dl>

          <section className="mt-6 border-y border-border/70 py-4">
            <h2 className="font-serifCn text-xl text-accent">Abstract</h2>
            <p className="mt-2 text-base leading-relaxed text-ink">{article.summary}</p>
          </section>

          {article.keywords.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span key={keyword} className="border border-border px-2.5 py-1 text-xs text-muted">
                  {keyword}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <MdxRenderer source={article.content} />
        <ReferenceList references={article.references} />
        <RelatedArticles items={relatedArticles} />
      </article>

      <div className="lg:sticky lg:top-28 lg:h-fit">
        <ArticleToc items={article.toc} />
      </div>
    </div>
  );
}

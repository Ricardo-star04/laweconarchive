import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContents } from "@/components/page-contents";
import { SectionTitle } from "@/components/section-title";
import { getFieldEssay } from "@/lib/field-essays";
import { getAllTopics, getReadingCitationData, getReadingLevel, getTopicBySlug, getTopicReadingsByYear } from "@/lib/topics";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTopics().map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return { title: "Topic Not Found" };
  }

  return {
    title: topic.title,
    description: topic.description,
    keywords: [topic.title, "law and economics", "field guide"]
  };
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const readingsByYear = getTopicReadingsByYear(topic);
  const essentialReadings = readingsByYear.slice(0, 3);
  const fullBibliography = readingsByYear;
  const fieldEssay = getFieldEssay(topic.slug);
  const pageContents = [
    { id: "research-questions", label: "Research Questions" },
    ...(fieldEssay ? [{ id: "research-orientation", label: "Research Orientation" }] : []),
    { id: "essential-readings", label: "Essential Readings" },
    { id: "full-bibliography", label: "Full Bibliography" }
  ];

  return (
    <div className="space-y-10">
      <SectionTitle title={topic.title} subtitle={topic.description} />

      <PageContents items={pageContents} />

      <section id="research-questions" className="grid scroll-mt-36 gap-8 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Field focus</p>
          <h2 className="mt-2 font-serifCn text-2xl text-accent">Questions Before Sources</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
            <p>Each field page begins with the institutional problem, then moves to selected readings.</p>
            <p>The full bibliography is kept separate so the opening section remains readable.</p>
          </div>
        </div>
        <ol className="space-y-4">
          {topic.researchQuestions.map((question, index) => (
            <li key={question} className="grid gap-3 border-b border-border pb-4 last:border-b-0 md:grid-cols-[48px_minmax(0,1fr)]">
              <span className="font-serifCn text-2xl text-signal">0{index + 1}</span>
              <p className="text-base leading-relaxed text-ink">{question}</p>
            </li>
          ))}
        </ol>
      </section>

      {fieldEssay ? (
        <section id="research-orientation" className="grid scroll-mt-36 gap-8 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Field essay</p>
            <h2 className="mt-2 font-serifCn text-2xl text-accent">Research Orientation</h2>
          </div>
          <div className="max-w-4xl">
            <p className="font-serifCn text-2xl leading-snug text-accent">{fieldEssay.thesis}</p>
            <div className="mt-6 space-y-5 text-sm leading-8 text-ink">
              {fieldEssay.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-serifCn text-xl text-accent">Reading Path</h3>
                <ol className="mt-4 space-y-3">
                  {fieldEssay.readingPath.map((item, index) => (
                    <li key={item} className="grid gap-3 md:grid-cols-[40px_minmax(0,1fr)]">
                      <span className="font-serifCn text-xl text-signal">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm leading-7 text-muted">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-serifCn text-xl text-accent">Tensions to Keep Visible</h3>
                <ul className="mt-4 space-y-3">
                  {fieldEssay.tensions.map((item) => (
                    <li key={item} className="border-l-2 border-border py-2 pl-4 text-sm leading-7 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="essential-readings" className="scroll-mt-36">
        <div className="mb-5 border-b border-border pb-3">
          <p className="text-xs uppercase text-signal">Reading order</p>
          <h2 className="font-serifCn text-2xl text-accent">Essential Readings</h2>
        </div>

        <div className="divide-y divide-border">
          {essentialReadings.map((reading, index) => {
            const citationData = getReadingCitationData(reading);

            return (
              <article key={reading.title} className="grid gap-4 py-5 md:grid-cols-[130px_minmax(0,1fr)]">
                <div>
                  <p className="font-serifCn text-2xl text-signal">{reading.year}</p>
                  <p className="mt-1 text-xs uppercase text-muted">{getReadingLevel(index)}</p>
                </div>
                <div>
                  <h3 className="font-serifCn text-xl text-accent">{reading.title}</h3>
                  <p className="mt-2 text-sm text-ink">{reading.authors}</p>
                  <p className="mt-1 text-xs text-muted">{reading.venue}</p>
                  {citationData.doi ? <p className="mt-2 text-xs text-muted">DOI: {citationData.doi}</p> : null}
                  <details className="mt-3 group">
                    <summary className="cursor-pointer text-sm text-institute underline underline-offset-2">
                      Reading note
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{reading.summary}</p>
                  </details>
                  <details className="mt-3 bg-paper px-4 py-3">
                    <summary className="cursor-pointer text-sm text-accent">Citation / BibTeX</summary>
                    <p className="mt-3 text-sm leading-7 text-ink">{citationData.citation}</p>
                    <pre className="mt-3 overflow-x-auto whitespace-pre bg-white p-3 text-xs leading-6 text-muted">
                      {citationData.bibtex}
                    </pre>
                  </details>
                  <a
                    href={reading.sourceHref}
                    className="mt-4 inline-block text-sm text-institute underline underline-offset-2"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source: {reading.sourceLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <details id="full-bibliography" className="scroll-mt-36 py-5">
        <summary className="cursor-pointer font-serifCn text-2xl text-accent">
          Full Bibliography ({fullBibliography.length} readings)
        </summary>
        <div className="mt-5 divide-y divide-border">
          {fullBibliography.map((reading, index) => {
            const citationData = getReadingCitationData(reading);

            return (
              <article key={`full-${reading.title}`} className="grid gap-4 py-5 md:grid-cols-[130px_minmax(0,1fr)]">
                <div>
                  <p className="font-serifCn text-2xl text-signal">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-xs uppercase text-muted">{getReadingLevel(index)}</p>
                </div>
                <div>
                  <h3 className="font-serifCn text-xl text-accent">{reading.title}</h3>
                  <p className="mt-2 text-sm text-ink">{reading.authors}</p>
                  <p className="mt-1 text-xs text-muted">{reading.year} · {reading.venue}</p>
                  {citationData.doi ? <p className="mt-2 text-xs text-muted">DOI: {citationData.doi}</p> : null}
                  <details className="mt-3">
                    <summary className="cursor-pointer text-sm text-institute underline underline-offset-2">
                      Summary and citation
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{reading.summary}</p>
                    <p className="mt-3 text-sm leading-7 text-ink">{citationData.citation}</p>
                    <pre className="mt-3 overflow-x-auto whitespace-pre bg-white p-3 text-xs leading-6 text-muted">
                      {citationData.bibtex}
                    </pre>
                  </details>
                  <a
                    href={reading.sourceHref}
                    className="mt-4 inline-block text-sm text-institute underline underline-offset-2"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source: {reading.sourceLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </details>

    </div>
  );
}

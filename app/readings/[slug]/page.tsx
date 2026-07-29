import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { CopyButton } from "@/components/copy-button";
import { DetailSection } from "@/components/detail-section";
import { PublicationCover } from "@/components/venue-cover";
import { getConceptSlug, getConceptsForText } from "@/lib/concepts";
import { getAllReadings, getReadingBySlug, getReadingCitationData } from "@/lib/topics";
import { getPublicationCover } from "@/lib/venue-covers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllReadings().map((reading) => ({ slug: reading.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const reading = getReadingBySlug(slug);

  if (!reading) {
    return { title: "Reading Not Found" };
  }

  return {
    title: reading.title,
    description: reading.summary,
    keywords: [reading.title, reading.authors, reading.topicTitle, reading.level]
  };
}

export default async function ReadingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const reading = getReadingBySlug(slug);

  if (!reading) {
    notFound();
  }

  const citationData = getReadingCitationData(reading);
  const publicationCover = getPublicationCover(reading);
  const connectionText = [reading.title, reading.authors, reading.venue, reading.summary, reading.topicTitle].join(" ");
  const relatedConcepts = getConceptsForText(connectionText, 3);

  return (
    <article className="space-y-12">
      <header className="grid gap-10 pb-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">{reading.topicTitle}</p>
          <AcademicTitle title={reading.title} className="mt-4" />
          <p className="mt-5 text-base leading-8 text-ink">{reading.authors}</p>
          <dl className="mt-8 grid gap-x-6 gap-y-4 bg-paper/70 px-4 py-4 text-sm md:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">Year</dt>
              <dd className="mt-1 text-ink">{reading.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">Venue</dt>
              <dd className="mt-1 text-ink">{reading.venue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">Level</dt>
              <dd className="mt-1 text-ink">{reading.level}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">Field</dt>
              <dd className="mt-1">
                <Link href={reading.topicHref} className="text-institute underline underline-offset-2">
                  {reading.topicTitle}
                </Link>
              </dd>
            </div>
          </dl>
        </div>
        <PublicationCover cover={publicationCover} reading={reading} />
      </header>

      <DetailSection title="Summary">
        <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{reading.summary}</p>
      </DetailSection>

      <DetailSection title="Citation" className="py-4">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <p className="text-sm leading-8 text-ink">{citationData.citation}</p>
              <CopyButton value={citationData.citation} label="Copy citation" />
            </div>
          </div>
          {citationData.doi ? <p className="text-sm text-muted">DOI: {citationData.doi}</p> : null}
          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">BibTeX</p>
              <CopyButton value={citationData.bibtex} label="Copy BibTeX" />
            </div>
            <pre className="overflow-x-auto whitespace-pre bg-paper p-4 text-xs leading-6 text-muted">
              {citationData.bibtex}
            </pre>
          </div>
          <a
            href={reading.sourceHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-institute px-4 py-2 text-sm text-institute hover:bg-institute hover:text-white"
          >
            Original source: {reading.sourceLabel}
          </a>
        </div>
      </DetailSection>

      {relatedConcepts.length ? (
        <DetailSection title="Related Concepts">
          <div className="flex flex-wrap gap-2">
            {relatedConcepts.map((concept) => (
              <Link
                key={concept.term}
                href={`/concepts/${getConceptSlug(concept.term)}`}
                className="bg-paper px-3 py-2 text-sm text-muted hover:text-accent"
              >
                {concept.term}
              </Link>
            ))}
          </div>
        </DetailSection>
      ) : null}

    </article>
  );
}

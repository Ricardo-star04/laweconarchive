import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { DetailSection } from "@/components/detail-section";
import { getCuratedReadingsForConcept } from "@/lib/concept-readings";
import { getCasesForConcept } from "@/lib/case-connections";
import { getAllCases } from "@/lib/cases";
import { getAllConcepts, getConceptBySlug, getConceptSlug } from "@/lib/concepts";
import { getAllReadings } from "@/lib/topics";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllConcepts().map((concept) => ({ slug: getConceptSlug(concept.term) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    return { title: "Concept Not Found" };
  }

  return {
    title: concept.term,
    description: concept.definition,
    keywords: [concept.term, concept.field, concept.level, ...concept.related]
  };
}

export default async function ConceptDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  const relatedReadings = getCuratedReadingsForConcept(concept, getAllReadings());
  const relatedCases = getCasesForConcept(concept, getAllCases(), 4);

  return (
    <article className="space-y-12">
      <header className="grid gap-8 pb-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">{concept.field}</p>
          <p className="mt-3 inline-block bg-paper px-2 py-1 text-xs uppercase tracking-[0.12em] text-muted">
            {concept.level}
          </p>
        </div>
        <div>
          <AcademicTitle title={concept.term} />
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink">{concept.definition}</p>
        </div>
      </header>

      <DetailSection title="Why It Matters" className="py-4">
        <p className="max-w-3xl text-sm leading-8 text-ink">{concept.whyItMatters}</p>
      </DetailSection>

      {concept.formula || concept.caution || concept.referenceHref ? (
        <DetailSection
          title="Reading the Measure"
          description="A working relation and an interpretive limit for corporate-finance use."
        >
          <div className="grid gap-8 md:grid-cols-2">
            {concept.formula ? (
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">Working relation</p>
                <p className="mt-3 border-l-2 border-signal pl-4 font-mono text-sm leading-7 text-ink">
                  {concept.formula}
                </p>
              </div>
            ) : null}
            {concept.caution ? (
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">Interpretive caution</p>
                <p className="mt-3 text-sm leading-7 text-ink">{concept.caution}</p>
              </div>
            ) : null}
          </div>
          {concept.referenceHref && concept.referenceLabel ? (
            <p className="mt-7 text-sm text-muted">
              Accounting reference:{" "}
              <a
                href={concept.referenceHref}
                target="_blank"
                rel="noreferrer"
                className="text-institute underline underline-offset-2"
              >
                {concept.referenceLabel}
              </a>
            </p>
          ) : null}
        </DetailSection>
      ) : null}

      {relatedReadings.length ? (
        <DetailSection title="Selected Literature" description="A short list of directly relevant archive entries.">
          <div className="divide-y divide-border/70">
            {relatedReadings.map((reading) => (
              <article key={reading.slug} className="grid gap-4 py-5 lg:grid-cols-[120px_minmax(0,1fr)_150px]">
                <div className="flex items-center gap-3 lg:block">
                  <p className="font-serifCn text-2xl leading-none text-signal lg:text-[1.7rem]">{reading.year}</p>
                  <p className="bg-paper px-2 py-1 text-[0.68rem] uppercase tracking-[0.08em] text-muted lg:mt-3 lg:inline-block">
                    {reading.level}
                  </p>
                </div>
                <div>
                  <h3 className="font-serifCn text-xl leading-snug text-accent">
                    <Link href={`/readings/${reading.slug}`} className="hover:underline">
                      {reading.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink">{reading.authors}</p>
                  <p className="mt-1 text-xs text-muted">{reading.venue}</p>
                </div>
                <Link href={reading.topicHref} className="text-sm text-institute underline underline-offset-2 md:text-right">
                  {reading.topicTitle}
                </Link>
              </article>
            ))}
          </div>
        </DetailSection>
      ) : null}

      {relatedCases.length ? (
        <DetailSection title="Related Cases">
          <div className="divide-y divide-border/70">
            {relatedCases.map((caseRecord) => (
              <article key={caseRecord.slug} className="grid gap-4 py-5 md:grid-cols-[100px_minmax(0,1fr)]">
                <div>
                  <p className="font-serifCn text-2xl text-signal">{caseRecord.year}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{caseRecord.field}</p>
                </div>
                <div>
                  <h3 className="font-serifCn text-xl leading-snug text-accent">
                    <Link href={`/cases/${caseRecord.slug}`} className="hover:underline">
                      {caseRecord.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink">{caseRecord.citation}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{caseRecord.issue}</p>
                </div>
              </article>
            ))}
          </div>
        </DetailSection>
      ) : null}

    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { DetailSection } from "@/components/detail-section";
import { PageContents } from "@/components/page-contents";
import { getConceptsForCase, getReadingsForCase } from "@/lib/case-connections";
import { getCaseAnalysis, getCaseResearchQuestions } from "@/lib/case-analysis";
import { getAllCases, getCaseBySlug } from "@/lib/cases";
import { getConceptSlug } from "@/lib/concepts";
import { getAllReadings } from "@/lib/topics";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCases().map((caseRecord) => ({ slug: caseRecord.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseRecord = getCaseBySlug(slug);

  if (!caseRecord) {
    return { title: "Case Not Found" };
  }

  return {
    title: caseRecord.title,
    description: caseRecord.significance,
    keywords: [caseRecord.title, caseRecord.citation, caseRecord.field, ...caseRecord.concepts]
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseRecord = getCaseBySlug(slug);

  if (!caseRecord) {
    notFound();
  }

  const relatedConcepts = getConceptsForCase(caseRecord, 5);
  const relatedReadings = getReadingsForCase(caseRecord, getAllReadings(), 4);
  const caseAnalysis = getCaseAnalysis(caseRecord);
  const researchQuestions = getCaseResearchQuestions(caseRecord);
  const pageContents = [
    { id: "issue", label: "Case Overview" },
    { id: "significance", label: "Why It Matters" },
    { id: "research-questions", label: "Research Questions" },
    ...(relatedReadings.length ? [{ id: "related-literature", label: "Literature" }] : []),
    { id: "case-text", label: "Case Text" }
  ];

  return (
    <article className="space-y-12">
      <header className="grid gap-8 pb-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">{caseRecord.field}</p>
          <p className="mt-3 inline-block bg-paper px-2 py-1 text-xs uppercase tracking-[0.12em] text-muted">
            {caseRecord.year}
          </p>
        </div>
        <div>
          <AcademicTitle title={caseRecord.title} />
          <p className="mt-5 text-base leading-8 text-ink">{caseRecord.citation}</p>
          <p className="mt-2 text-sm text-muted">{caseRecord.court}</p>
        </div>
      </header>

      <PageContents items={pageContents} />

      <DetailSection title="Issue" className="scroll-mt-36" id="issue">
        <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{caseRecord.issue}</p>
      </DetailSection>

      <DetailSection title="Facts" className="scroll-mt-36" id="facts">
        <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{caseRecord.facts}</p>
      </DetailSection>

      <DetailSection title="Holding" className="scroll-mt-36" id="holding">
        <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{caseRecord.holding}</p>
      </DetailSection>

      <DetailSection title="Reasoning" className="scroll-mt-36" id="reasoning">
        <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{caseRecord.reasoning}</p>
      </DetailSection>

      <DetailSection title="Why It Matters" className="scroll-mt-36" id="significance">
        <div>
          <p className="max-w-3xl text-[0.95rem] leading-8 text-ink">{caseRecord.significance}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {relatedConcepts.length ? relatedConcepts.map((concept) => (
              <Link
                key={concept.term}
                href={`/concepts/${getConceptSlug(concept.term)}`}
                className="bg-paper px-3 py-2 text-sm text-muted hover:text-accent"
              >
                {concept.term}
              </Link>
            )) : caseRecord.concepts.map((concept) => (
              <span key={concept} className="bg-paper px-3 py-2 text-sm text-muted">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </DetailSection>

      {caseAnalysis ? (
        <DetailSection title="Institutional Analysis" className="scroll-mt-36" id="institutional-analysis">
          <div className="max-w-4xl space-y-6">
            <div>
              <h3 className="font-serifCn text-xl text-accent">Institutional problem</h3>
              <p className="mt-2 text-[0.95rem] leading-8 text-ink">{caseAnalysis.institutionalProblem}</p>
            </div>
            <div>
              <h3 className="font-serifCn text-xl text-accent">Economic analysis</h3>
              <p className="mt-2 text-[0.95rem] leading-8 text-ink">{caseAnalysis.economicAnalysis}</p>
            </div>
            <div>
              <h3 className="font-serifCn text-xl text-accent">Alternatives and limits</h3>
              <p className="mt-2 text-[0.95rem] leading-8 text-ink">{caseAnalysis.alternativesAndLimits}</p>
            </div>
            <p className="border-l-4 border-border pl-4 text-xs leading-6 text-muted">
              This analytical supplement distinguishes institutional interpretation from the court’s holding and reasoning.
            </p>
          </div>
        </DetailSection>
      ) : null}

      <DetailSection title="Research Questions" className="scroll-mt-36" id="research-questions">
        <ol className="max-w-3xl list-decimal space-y-3 pl-5 text-[0.95rem] leading-8 text-ink">
          {researchQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </DetailSection>

      {relatedReadings.length ? (
        <DetailSection title="Related Literature" className="scroll-mt-36" id="related-literature">
          <div className="divide-y divide-border/70">
            {relatedReadings.map((reading) => (
              <Link key={reading.slug} href={`/readings/${reading.slug}`} className="block py-3 hover:bg-paper/70">
                <p className="text-xs text-signal">{reading.year}</p>
                <p className="font-serifCn text-lg leading-snug text-accent">{reading.title}</p>
                <p className="mt-1 text-xs text-muted">{reading.authors}</p>
              </Link>
            ))}
          </div>
        </DetailSection>
      ) : null}

      <DetailSection title="Case Text and Citation" className="scroll-mt-36" id="case-text">
        <div className="max-w-3xl">
          <p className="text-sm leading-7 text-ink">
            Cite the reported decision as <span className="font-medium">{caseRecord.citation}</span>. The linked copy is
            provided for reading access and may be hosted by a court, institutional repository, or secondary case archive.
          </p>
          <a
            href={caseRecord.sourceHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block w-fit border border-institute px-4 py-2 text-sm text-institute hover:bg-institute hover:text-white"
          >
            Open case text: {caseRecord.sourceLabel}
          </a>
        </div>
      </DetailSection>

    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { ArchiveImage } from "@/components/archive-image";
import { PageContents } from "@/components/page-contents";
import { COMPARATIVE_DIMENSIONS, getComparativeDimensionBySlug } from "@/lib/research-guides";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COMPARATIVE_DIMENSIONS.map((dimension) => ({ slug: dimension.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dimension = getComparativeDimensionBySlug(slug);

  if (!dimension) {
    return { title: "Comparative Field Not Found" };
  }

  return {
    title: dimension.title,
    description: dimension.comparison,
    keywords: [
      dimension.title,
      "comparative law",
      "law and economics",
      ...dimension.jurisdictions,
      ...dimension.analyticFocus
    ]
  };
}

export default async function ComparativeDimensionPage({ params }: PageProps) {
  const { slug } = await params;
  const dimension = getComparativeDimensionBySlug(slug);

  if (!dimension) {
    notFound();
  }

  const dimensionIndex = COMPARATIVE_DIMENSIONS.findIndex((item) => item.slug === dimension.slug);
  const previousDimension = dimensionIndex > 0 ? COMPARATIVE_DIMENSIONS[dimensionIndex - 1] : null;
  const nextDimension =
    dimensionIndex < COMPARATIVE_DIMENSIONS.length - 1 ? COMPARATIVE_DIMENSIONS[dimensionIndex + 1] : null;

  const pageContents = [
    { id: "systems", label: "Systems" },
    { id: "axes", label: "Comparison Matrix" },
    { id: "analytical-focus", label: "Analytical Focus" },
    { id: "research-use", label: "Research Use" },
    { id: "portability", label: "Portability" },
    { id: "related-materials", label: "Related Materials" }
  ];

  return (
    <article className="space-y-10 sm:space-y-12">
      <header className="grid gap-7 border-b border-border/70 pb-8 sm:gap-10 sm:pb-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/comparative-law" className="text-sm text-institute underline underline-offset-4">
              Comparative Law
            </Link>
            <span className="text-xs uppercase tracking-[0.16em] text-signal">
              Field note {String(dimensionIndex + 1).padStart(2, "0")} /{" "}
              {String(COMPARATIVE_DIMENSIONS.length).padStart(2, "0")}
            </span>
          </div>
          <AcademicTitle title={dimension.title} className="mt-5 sm:mt-6" />
          <p className="mt-4 max-w-3xl font-serifCn text-xl leading-snug text-accent sm:mt-5 sm:text-2xl">
            {dimension.thesis}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink sm:mt-5 sm:text-base sm:leading-8">
            {dimension.comparison}
          </p>
          <div className="mt-5 max-w-3xl border-l-2 border-institute bg-paper/50 px-4 py-4 sm:mt-6 sm:px-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Institutional problem</p>
            <p className="mt-2 text-sm leading-7 text-ink">{dimension.institutionalProblem}</p>
          </div>
        </div>
        <div>
          <ArchiveImage
            src={dimension.image.src}
            alt={dimension.image.alt}
            caption={dimension.image.caption}
            sourceHref={dimension.image.sourceHref}
            sourceLabel={dimension.image.sourceLabel}
            variant="decorative"
          />
          <div className="mt-3 grid grid-cols-2 gap-px border border-border/70 bg-border/70 sm:mt-4">
            <div className="bg-white px-3 py-3 sm:px-4">
              <p className="font-serifCn text-2xl text-signal">{String(dimension.jurisdictions.length).padStart(2, "0")}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">systems</p>
            </div>
            <div className="bg-white px-3 py-3 sm:px-4">
              <p className="font-serifCn text-2xl text-signal">{String(dimension.axes.length).padStart(2, "0")}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">comparison axes</p>
            </div>
          </div>
        </div>
      </header>

      <PageContents items={pageContents} />

      <section id="systems" className="grid scroll-mt-36 gap-5 py-1 sm:gap-8 sm:py-2 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Comparative scope</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Systems in View</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {dimension.jurisdictions.map((jurisdiction, index) => (
            <article key={jurisdiction} className="border-t-2 border-institute bg-paper/45 px-4 py-4 sm:py-5">
              <p className="text-xs tracking-[0.14em] text-signal">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-sm leading-7 text-ink">{jurisdiction}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="axes" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Comparison matrix</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Axes of Comparison</h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4">
            Keep the comparison at the same institutional level across systems.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {dimension.axes.map((axis, index) => (
            <article key={axis.label} className="border border-border/70 p-4 sm:p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serifCn text-xl text-accent">{axis.label}</h3>
                <span className="text-xs tracking-[0.14em] text-signal">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink sm:mt-4">{axis.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="analytical-focus" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Analytical frame</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">What to Compare</h2>
        </div>
        <div className="grid gap-px border border-border/70 bg-border/70">
          {dimension.analyticFocus.map((focus, index) => (
            <article key={focus} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 bg-white px-4 py-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-4 sm:px-5 sm:py-5 md:grid-cols-[64px_minmax(0,1fr)]">
              <p className="font-serifCn text-xl text-signal sm:text-2xl">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-sm leading-7 text-ink sm:leading-8">{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="research-use" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Research use</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">When It Helps</h2>
        </div>
        <div className="max-w-4xl bg-institute px-4 py-5 text-white sm:px-6 sm:py-6">
          <p className="text-xs uppercase tracking-[0.14em] text-white/70">Project application</p>
          <p className="mt-3 font-serifCn text-xl leading-8">{dimension.researchUse}</p>
        </div>
      </section>

      <section id="portability" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Transfer caution</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Portability Questions</h2>
          <p className="mt-3 border-l-2 border-signal pl-4 text-sm leading-7 text-muted sm:mt-4">{dimension.caution}</p>
        </div>
        <div className="space-y-3">
          {dimension.portabilityQuestions.map((question, index) => (
            <article key={question} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border border-border/70 px-4 py-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-4 sm:px-5">
              <p className="font-serifCn text-xl text-signal">Q{index + 1}</p>
              <p className="text-sm leading-7 text-ink">{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="related-materials" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">Related</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Related Materials</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {dimension.anchors.map((anchor, anchorIndex) => (
            <Link
              key={`${anchor.href}-${anchor.label}-${anchorIndex}`}
              href={anchor.href}
              className="flex min-h-16 items-center justify-between gap-4 border border-border/70 px-4 py-3 text-sm text-ink transition-colors hover:border-institute hover:bg-paper/50 hover:text-accent"
            >
              <span>{anchor.label}</span>
              <span aria-hidden="true" className="text-institute">→</span>
            </Link>
          ))}
        </div>
      </section>

      <nav aria-label="Comparative field notes" className="grid gap-px border border-border/70 bg-border/70 sm:grid-cols-2">
        <div className="bg-white p-4 sm:p-5">
          {previousDimension ? (
            <Link href={`/comparative-law/${previousDimension.slug}`} className="group block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Previous field note</span>
              <span className="mt-2 block font-serifCn text-xl leading-snug text-accent group-hover:underline">
                ← {previousDimension.title}
              </span>
            </Link>
          ) : (
            <Link href="/comparative-law" className="group block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Back to index</span>
              <span className="mt-2 block font-serifCn text-xl text-accent group-hover:underline">
                ← Comparative Law
              </span>
            </Link>
          )}
        </div>
        <div className="bg-white p-4 sm:p-5 sm:text-right">
          {nextDimension ? (
            <Link href={`/comparative-law/${nextDimension.slug}`} className="group block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Next field note</span>
              <span className="mt-2 block font-serifCn text-xl leading-snug text-accent group-hover:underline">
                {nextDimension.title} →
              </span>
            </Link>
          ) : (
            <Link href="/comparative-law" className="group block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Back to index</span>
              <span className="mt-2 block font-serifCn text-xl text-accent group-hover:underline">
                Comparative Law →
              </span>
            </Link>
          )}
        </div>
      </nav>

    </article>
  );
}

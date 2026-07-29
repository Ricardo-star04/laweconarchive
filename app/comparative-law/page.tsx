import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveImage } from "@/components/archive-image";
import { PageContents } from "@/components/page-contents";
import { SectionTitle } from "@/components/section-title";
import { COMPARATIVE_DIMENSIONS } from "@/lib/research-guides";

export const metadata: Metadata = {
  title: "Comparative Law",
  description:
    "Comparative law-and-economics themes for corporate law, securities regulation, and financial law."
};

export default function ComparativeLawPage() {
  const systemCount = COMPARATIVE_DIMENSIONS.reduce(
    (total, dimension) => total + dimension.jurisdictions.length,
    0
  );
  const axisCount = COMPARATIVE_DIMENSIONS.reduce(
    (total, dimension) => total + dimension.axes.length,
    0
  );

  return (
    <div className="space-y-10 sm:space-y-12">
      <SectionTitle
        title="Comparative Law"
        subtitle="Institutional comparisons across corporate law, securities regulation, financial law, and multi-level governance."
      />

      <PageContents
        items={[
          { id: "method", label: "Comparison Method" },
          { id: "field-notes", label: "Comparative Field Notes" }
        ]}
      />

      <section id="method" className="grid scroll-mt-36 gap-5 py-1 sm:gap-8 sm:py-2 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Comparison protocol</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Institutions Before Labels</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted sm:mt-4 sm:max-w-xs">
            Begin with the problem a legal system must solve, then compare the institutions that carry the work.
          </p>
        </div>
        <div className="min-w-0">
          <p className="max-w-4xl text-sm leading-7 text-ink sm:text-base sm:leading-8">
            Comparative law-and-economics work should compare institutional functions rather than simply translate legal
            categories. Each field note identifies the problem, the systems in view, the comparison axes, and the
            conditions that make legal transplantation risky.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-px border border-border/70 bg-border/70 sm:mt-7">
            {[
              { value: COMPARATIVE_DIMENSIONS.length, label: "field notes" },
              { value: systemCount, label: "system perspectives" },
              { value: axisCount, label: "comparison axes" }
            ].map((item) => (
              <div key={item.label} className="min-w-0 bg-white px-3 py-3 sm:px-5 sm:py-5">
                <p className="font-serifCn text-2xl text-signal sm:text-3xl">{String(item.value).padStart(2, "0")}</p>
                <p className="mt-1 text-[0.62rem] uppercase leading-4 tracking-[0.1em] text-muted sm:text-xs sm:tracking-[0.14em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                label: "Function",
                text: "What economic or governance problem is the rule trying to solve?"
              },
              {
                number: "02",
                label: "Institution",
                text: "Which court, regulator, market actor, or intermediary carries the legal burden?"
              },
              {
                number: "03",
                label: "Portability",
                text: "What changes when the rule moves across ownership structures, markets, or enforcement systems?"
              }
            ].map((item) => (
              <article key={item.label} className="border-t-2 border-institute bg-paper/50 px-4 py-4 sm:py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serifCn text-xl text-accent">{item.label}</h3>
                  <span className="text-xs tracking-[0.14em] text-signal">{item.number}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink sm:mt-3 sm:leading-7">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="field-notes" className="grid scroll-mt-36 gap-5 border-t border-border/70 pt-7 sm:gap-8 sm:pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Research map</p>
          <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent sm:text-3xl">Comparative Field Notes</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted sm:mt-4 sm:max-w-xs">
            Five recurring problems, organized for quick orientation and deeper project design.
          </p>
        </div>
        <div className="grid min-w-0 gap-4 sm:gap-5">
          {COMPARATIVE_DIMENSIONS.map((dimension, index) => (
            <article
              key={dimension.slug}
              className="group overflow-hidden border border-border/70 bg-white transition-colors hover:border-institute/60 md:grid md:grid-cols-[minmax(240px,0.82fr)_minmax(0,1.18fr)]"
            >
              <ArchiveImage
                src={dimension.image.src}
                alt={dimension.image.alt}
                caption={dimension.image.caption}
                sourceHref={dimension.image.sourceHref}
                sourceLabel={dimension.image.sourceLabel}
                variant="decorative"
                className="hidden h-full border-r border-border/70 bg-paper/30 md:block"
                imageClassName="block transition duration-300 group-hover:scale-[1.015]"
                captionClassName="hidden !mt-0 px-4 pb-3 text-[0.72rem] leading-5 md:flex"
                framed={false}
                loadMedia="(min-width: 768px)"
              />
              <div className="flex min-w-0 flex-col px-4 py-4 md:px-5 md:py-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-signal sm:text-[0.68rem] sm:tracking-[0.14em] md:text-xs md:tracking-[0.16em]">
                    Field note {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="shrink-0 text-[0.6rem] text-muted sm:text-[0.68rem] md:text-xs">
                    {dimension.jurisdictions.length} systems
                  </p>
                </div>
                <h3 className="mt-2 font-serifCn text-xl leading-tight text-accent md:mt-3 md:text-2xl">
                  <Link
                    href={`/comparative-law/${dimension.slug}`}
                    className="underline-offset-4 hover:underline focus-visible:underline"
                  >
                    {dimension.title}
                  </Link>
                </h3>
                <div className="mt-3 border-l-2 border-institute/70 pl-2.5 md:mt-4 md:pl-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.12em] text-muted md:text-[0.66rem]">
                    Why it matters
                  </p>
                  <p className="mt-1 line-clamp-4 text-sm leading-6 text-ink md:line-clamp-none md:leading-7">
                    {dimension.thesis}
                  </p>
                </div>
                <div className="mt-4 hidden flex-wrap gap-2 md:flex">
                  {dimension.axes.slice(0, 2).map((axis) => (
                    <span
                      key={axis.label}
                      className="border border-border/80 bg-paper/40 px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.11em] text-muted"
                    >
                      {axis.label}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 md:mt-5 md:border-t md:border-border/70 md:pt-4">
                  <Link
                    href={`/comparative-law/${dimension.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-institute underline-offset-4 hover:underline md:gap-2 md:text-sm"
                  >
                    Open field note <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

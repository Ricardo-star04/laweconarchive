import type { Metadata } from "next";
import Link from "next/link";
import { PageContents } from "@/components/page-contents";
import { SectionTitle } from "@/components/section-title";
import { HISTORY_MILESTONES } from "@/lib/field-history";
import { THEORY_LINEAGES } from "@/lib/research-guides";

export const metadata: Metadata = {
  title: "History and Theory Lineages",
  description:
    "A chronological and conceptual map of law and economics across institutional theory, corporate governance, securities regulation, financial law, behavioral analysis, and empirical legal studies."
};

export default function HistoryPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="History and Theory Lineages"
        subtitle="A combined chronological and conceptual map of legal concepts, institutional economics, corporate governance, securities regulation, behavioral analysis, financial law, and empirical legal studies."
      />

      <PageContents
        items={[
          { id: "trajectory", label: "Core Trajectory" },
          { id: "analytical-frames", label: "Analytical Frames" },
          { id: "timeline", label: "Historical Timeline" },
          { id: "theory-lineages", label: "Theory Lineages" }
        ]}
      />

      <section id="trajectory" className="grid scroll-mt-36 gap-6 py-4 md:grid-cols-3">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Concepts to Institutions</h2>
        </div>
        <p className="text-sm text-ink md:col-span-2">
          Law and economics did not develop as a single doctrine. It emerged from several linked research programs:
          analytical jurisprudence, transaction-cost economics, welfare analysis, public enforcement theory, corporate
          finance, securities-market theory, behavioral decision research, comparative law and finance, financial
          regulation, and empirical legal studies. In corporate, securities, and financial law, its central question is
          how legal institutions shape information, incentives, control, risk, market discipline, and administrative
          capacity. The timeline below locates those programs historically; the theory lineages then reorganize them as
          problem-centered reading paths.
        </p>
      </section>

      <section id="analytical-frames" className="grid scroll-mt-36 gap-4 border-y border-border/70 py-6 md:grid-cols-3">
        {[
          {
            title: "Legal form",
            text: "The first task is conceptual: identify the legal relation, entitlement, control right, duty, liability, or institutional power being analyzed."
          },
          {
            title: "Economic mechanism",
            text: "The second task is explanatory: ask how rules affect transaction costs, agency costs, information production, bargaining, deterrence, and risk allocation."
          },
          {
            title: "Institutional setting",
            text: "The third task is comparative: evaluate whether courts, firms, regulators, markets, intermediaries, or supervisory networks can perform the relevant function."
          }
        ].map((item) => (
          <article key={item.title}>
            <h2 className="font-serifCn text-2xl text-accent">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section id="timeline" className="scroll-mt-36 space-y-5">
        {HISTORY_MILESTONES.map((item) => (
          <article key={`${item.period}-${item.title}`} className="grid gap-5 border-b border-border pb-6 md:grid-cols-[150px_minmax(0,1fr)]">
            <div>
              <p className="font-serifCn text-xl text-signal">{item.period}</p>
            </div>
            <div>
              <h2 className="font-serifCn text-2xl text-accent">{item.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.themes.map((theme) => (
                  <span key={theme} className="bg-paper px-2 py-1 text-xs text-muted">
                    {theme}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-ink">{item.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.works.map((work) => (
                  <li key={work}>{work}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section id="theory-lineages" className="scroll-mt-36 space-y-10 border-t border-border/70 pt-10">
        <div className="grid gap-5 py-4 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-signal">Conceptual Map</p>
            <h2 className="mt-2 font-serifCn text-3xl text-accent">Theory Lineages</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            <p className="text-base leading-8 text-ink">
              These lineages are not intellectual genealogies in a biographical sense. They are reading paths that
              identify a recurring problem structure and connect it to scholars, canonical readings, concepts, and
              cases represented in the archive.
            </p>
            <p className="text-sm leading-7 text-muted">
              Read the timeline for sequence and institutional context; use the lineages below to reconstruct how a
              particular law-and-economics argument develops across authors and materials.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {THEORY_LINEAGES.map((lineage, index) => (
            <section
              key={lineage.title}
              className="grid gap-6 border-b border-border/70 pb-10 lg:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-signal">
                  Lineage {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent">{lineage.title}</h2>
              </div>
              <div>
                <p className="max-w-3xl text-base leading-8 text-ink">{lineage.question}</p>
                <div className="mt-6 divide-y divide-border/70">
                  {lineage.sequence.map((node) => (
                    <article key={node.label} className="grid gap-4 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
                      <h3 className="font-serifCn text-xl leading-snug text-accent">
                        <Link href={node.href} className="hover:underline">
                          {node.label}
                        </Link>
                      </h3>
                      <p className="text-sm leading-7 text-muted">{node.note}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-ink">{lineage.archiveUse}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {lineage.anchors.map((anchor, anchorIndex) => (
                    <Link
                      key={`${anchor.href}-${anchor.label}-${anchorIndex}`}
                      href={anchor.href}
                      className="bg-paper px-3 py-2 text-sm text-muted hover:text-accent"
                    >
                      {anchor.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

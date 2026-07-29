import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { WEEKLY_REPORT, WEEKLY_REPORT_SCHEDULE } from "@/lib/weekly-report";

export const metadata: Metadata = {
  title: "Law and Economics Research Weekly",
  description:
    "New law-and-economics articles and working papers, with source dates, methods, findings, and direct links, updated every Monday at 08:00 China Standard Time."
};

export default function WeeklyReportPage() {
  const report = WEEKLY_REPORT;

  return (
    <div className="space-y-12">
      <SectionTitle
        title="Law & Economics Research Weekly"
        subtitle="A weekly feed of newly published, posted, or revised scholarship—not a general news digest."
      />

      <section className="grid border-y border-border/70 bg-white lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="px-5 py-7 sm:px-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.15em] text-signal">
            <span>{report.issue}</span>
            <span>{report.publishedAt}</span>
          </div>
          <h2 className="mt-4 max-w-3xl font-serifCn text-3xl leading-tight text-accent sm:text-4xl">
            {report.headline}
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">{report.editorialNote}</p>
        </div>
        <aside className="border-t border-border/70 bg-paper/70 px-5 py-6 lg:border-l lg:border-t-0">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Publication cadence</p>
          <p className="mt-3 font-serifCn text-2xl text-accent">{WEEKLY_REPORT_SCHEDULE.label}</p>
          <p className="mt-1 text-sm text-muted">{WEEKLY_REPORT_SCHEDULE.timezone}</p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-signal">Coverage</dt>
              <dd className="mt-1 leading-6 text-ink">{report.period}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-signal">Next issue</dt>
              <dd className="mt-1 leading-6 text-ink">{WEEKLY_REPORT_SCHEDULE.nextUpdate}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section aria-labelledby="latest-research">
        <div className="border-b border-border/70 pb-3">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">01 · Latest academic releases</p>
          <h2 id="latest-research" className="mt-2 font-serifCn text-3xl text-accent">
            New and recently surfaced research
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{report.coverageNote}</p>
        </div>

        <div className="divide-y divide-border/70">
          {report.latestResearch.map((item, index) => (
            <article key={item.sourceHref} className="grid gap-5 py-7 lg:grid-cols-[76px_minmax(0,1fr)]">
              <div>
                <span className="font-serifCn text-3xl text-signal">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.12em] text-signal">
                  <span>{item.field}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.releaseDate}</span>
                </div>
                <h3 className="mt-3 max-w-4xl font-serifCn text-2xl leading-tight text-accent sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink">{item.authors}</p>
                <p className="mt-1 text-xs leading-6 text-muted">{item.publicationStatus}</p>

                <dl className="mt-6 grid gap-px bg-border/70 md:grid-cols-3">
                  <div className="bg-white p-4">
                    <dt className="text-xs uppercase tracking-[0.13em] text-signal">Research question</dt>
                    <dd className="mt-2 text-sm leading-7 text-ink">{item.researchQuestion}</dd>
                  </div>
                  <div className="bg-paper/60 p-4">
                    <dt className="text-xs uppercase tracking-[0.13em] text-signal">Method / data</dt>
                    <dd className="mt-2 text-sm leading-7 text-ink">{item.method}</dd>
                  </div>
                  <div className="bg-white p-4">
                    <dt className="text-xs uppercase tracking-[0.13em] text-signal">Principal contribution</dt>
                    <dd className="mt-2 text-sm leading-7 text-ink">{item.contribution}</dd>
                  </div>
                </dl>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="border border-border/70 px-2.5 py-1 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 border-l-2 border-stanford-light pl-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <p className="text-xs leading-6 text-muted">
                    <span className="uppercase tracking-[0.12em] text-signal">Reading caution</span>
                    <br />
                    {item.caveat}
                  </p>
                  <a
                    href={item.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-institute hover:text-accent"
                  >
                    Primary record · {item.sourceLabel} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-px bg-border/70 lg:grid-cols-2">
        <article className="bg-paper p-5 sm:p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">02 · Methods across the issue</p>
          <h2 className="mt-3 font-serifCn text-3xl leading-tight text-accent">How the claims were produced</h2>
          <div className="mt-5 divide-y divide-border/70">
            {report.methodsInIssue.map((method) => (
              <div key={method.label} className="py-4 first:pt-0">
                <h3 className="font-serifCn text-xl text-accent">{method.label}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{method.description}</p>
              </div>
            ))}
          </div>
          <Link href="/methods" className="mt-5 inline-block text-sm text-institute hover:text-accent">
            Open Methods Toolkit →
          </Link>
        </article>

        <article className="bg-white p-5 sm:p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">03 · Research watchlist</p>
          <h2 className="mt-3 font-serifCn text-3xl leading-tight text-accent">Questions to track</h2>
          <ol className="mt-5 space-y-5">
            {report.watchlist.map((question, index) => (
              <li key={question} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3">
                <span className="font-serifCn text-xl text-signal">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-ink">{question}</p>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <p className="border-t border-border/70 pt-5 text-xs leading-6 text-muted">
        Editorial rule: Research Weekly prioritizes peer-reviewed articles, accepted manuscripts, working papers, and
        discussion papers. General news, routine regulatory announcements, and cases appear only when a new academic
        study centrally analyzes them. Missing dates, versions, or evidence are disclosed rather than inferred.
      </p>
    </div>
  );
}

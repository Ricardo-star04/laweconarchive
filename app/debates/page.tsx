import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { DEBATES_AND_CRITIQUES } from "@/lib/research-guides";

export const metadata: Metadata = {
  title: "Debates and Critiques",
  description:
    "Recurring criticisms, limitations, and interpretive cautions in law and economics."
};

export default function DebatesPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Debates and Critiques"
        subtitle="A guide to recurring limits of law-and-economics arguments. The purpose is not to reject economic analysis, but to make its assumptions, institutional boundaries, and normative choices visible."
      />

      <section className="grid gap-5 py-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Use with Care</h2>
        </div>
        <p className="max-w-3xl text-sm leading-8 text-muted">
          These entries pair a familiar law-and-economics claim with a common critique. Each entry is framed as a
          reading caution so that readers can use economic analysis without turning it into a mechanical conclusion.
        </p>
      </section>

      <div className="space-y-10">
        {DEBATES_AND_CRITIQUES.map((debate, index) => (
          <section key={debate.title} className="grid gap-6 border-b border-border/70 pb-9 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-signal">Debate {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-serifCn text-2xl leading-tight text-accent">{debate.title}</h2>
            </div>
            <div className="max-w-4xl">
              <dl className="grid gap-5 md:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">Core claim</dt>
                  <dd className="mt-2 text-sm leading-7 text-ink">{debate.coreClaim}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">Critique</dt>
                  <dd className="mt-2 text-sm leading-7 text-ink">{debate.critique}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted">Reading note</dt>
                  <dd className="mt-2 text-sm leading-7 text-ink">{debate.readingNote}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {debate.anchors.map((anchor, anchorIndex) => (
                  <Link key={`${anchor.href}-${anchor.label}-${anchorIndex}`} href={anchor.href} className="bg-paper px-3 py-2 text-sm text-muted hover:text-accent">
                    {anchor.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

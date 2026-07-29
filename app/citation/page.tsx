import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Citation and Versioning",
  description: "Suggested citation practice, versioning, and correction standards for the Law and Economics Archive."
};

const citationRules = [
  {
    title: "Citing original scholarship",
    body:
      "When relying on an article, book, chapter, case, regulation, or institutional report, cite the original source rather than this archive's summary. Archive entries are orientation aids, not substitutes for primary or published materials."
  },
  {
    title: "Citing an archive page",
    body:
      "When citing this site as an index, teaching aid, or research guide, include the page title, site title, URL, and access date. If the page summarizes a specific reading, cite the original work as the main authority."
  },
  {
    title: "Versioning",
    body:
      "Major structural changes are recorded internally for maintenance review. Minor copy edits, formatting changes, and link maintenance may not receive separate public notes unless they affect source reliability or navigation."
  },
  {
    title: "Corrections",
    body:
      "Corrections should identify the affected page, the verified source used for the correction, and the nature of the change. Unverified information should remain omitted or marked for later review rather than filled by inference."
  }
];

export default function CitationPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Citation and Versioning"
        subtitle="Guidance for citing archive pages, verifying original sources, and understanding version-sensitive use."
      />

      <section className="grid gap-6 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Archive page citation</h2>
        </div>
        <div className="space-y-4 text-sm leading-8 text-ink">
          <p>
            Law and Economics Archive, &quot;Page Title,&quot; Law and Economics Archive, URL, accessed Month Day, Year.
          </p>
          <p className="text-muted">
            Replace &quot;Page Title&quot; and URL with the specific reading, concept, scholar, topic, or policy page being cited.
          </p>
        </div>
      </section>

      <section className="divide-y divide-border">
        {citationRules.map((rule) => (
          <article key={rule.title} className="grid gap-4 py-6 md:grid-cols-[220px_minmax(0,1fr)]">
            <h2 className="font-serifCn text-2xl text-accent">{rule.title}</h2>
            <p className="max-w-3xl text-sm leading-8 text-ink">{rule.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Source Policy",
  description:
    "Editorial and source standards for the Law and Economics Archive, including literature, summaries, scholar profiles, and images."
};

const policies = [
  {
    title: "Literature records",
    body:
      "Readings should point to publisher pages, DOI records, university repositories, institutional reports, official working-paper pages, or other stable source records. When a source cannot be verified, it should not be presented as an archive record."
  },
  {
    title: "Summaries",
    body:
      "Archive summaries are study aids. They should describe the research question, method or analytical frame, central argument, and institutional relevance without replacing the original text or overstating the authors' claims."
  },
  {
    title: "Scholar profiles",
    body:
      "Scholar pages should rely on official university, institutional, publisher, or professional-profile sources where possible. Roles, affiliations, and fields should be stated cautiously and updated when official pages change."
  },
  {
    title: "Images",
    body:
      "Images should come from official institutional pages, Wikimedia Commons, public-domain sources, publisher asset services, or clearly licensed materials. Captions should retain a source link when an external image is used. The archive mark is an editor-supplied identity asset, is stored locally, and is documented on the About page."
  },
  {
    title: "Publication covers",
    body:
      "Reading pages display archive-designed covers generated locally from archive metadata. These covers are not publisher-provided cover art and should not be described as journal, book, report, or institutional source images."
  },
  {
    title: "Citations and exports",
    body:
      "Citation and BibTeX data are generated from the archive's stored metadata. Users should verify final citations against the original publication before formal academic use."
  },
  {
    title: "Unverified or incomplete information",
    body:
      "Missing or uncertain information should be marked as TODO rather than filled by inference. The archive should not invent sources, dates, legal rules, cases, data, author roles, or publication details."
  }
];

export default function SourcePolicyPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Source Policy"
        subtitle="Editorial standards for source selection, summaries, images, scholar profiles, and verification."
      />

      <section className="grid gap-6 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Verifiability before completeness</h2>
        </div>
        <div className="space-y-4 text-sm leading-8 text-ink">
          <p>
            Law and Economics Archive is a curated research archive rather than a substitute for journals, books,
            official reports, or primary legal materials. Its entries are intended to orient readers toward verifiable
            sources.
          </p>
          <p>
            The archive may remain incomplete in order to remain reliable. A missing entry is preferable to a fabricated
            citation, unsupported profile, unverifiable image, or unsourced institutional claim.
          </p>
        </div>
      </section>

      <section className="divide-y divide-border">
        {policies.map((policy) => (
          <article key={policy.title} className="grid gap-4 py-6 md:grid-cols-[220px_minmax(0,1fr)]">
            <h2 className="font-serifCn text-2xl text-accent">{policy.title}</h2>
            <p className="max-w-3xl text-sm leading-8 text-ink">{policy.body}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border/70 py-6">
        <h2 className="font-serifCn text-2xl text-accent">Correction Standard</h2>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-ink">
          Corrections should identify the affected entry, the source used to verify the change, and the nature of the
          revision. Link rot, changed institutional pages, and updated publication records should be handled by replacing
          the source link with a more stable record where available.
        </p>
      </section>
    </div>
  );
}

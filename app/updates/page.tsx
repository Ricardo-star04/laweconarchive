import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { getAllUpdates } from "@/lib/updates";

export const metadata: Metadata = {
  title: "Internal Update Log",
  description: "An internal maintenance record for the Law and Economics Archive.",
  robots: {
    index: false,
    follow: false
  }
};

export default function UpdatesPage() {
  const updates = getAllUpdates();

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Internal Update Log"
        subtitle="A maintenance record for major additions, structural changes, and editorial updates."
      />

      <section className="grid gap-6 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Change Record</h2>
        </div>
        <p className="max-w-3xl text-sm leading-8 text-ink">
          The log records substantial content and structure changes. Minor copy edits, formatting adjustments, and
          routine dependency checks may not appear unless they affect source reliability or archive navigation.
        </p>
      </section>

      <section className="divide-y divide-border">
        {updates.map((entry) => (
          <article key={`${entry.date}-${entry.title}`} className="grid gap-5 py-6 md:grid-cols-[160px_minmax(0,1fr)]">
            <div>
              <p className="font-serifCn text-2xl text-signal">{entry.date}</p>
            </div>
            <div>
              <h2 className="font-serifCn text-2xl text-accent">{entry.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-8 text-ink">{entry.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

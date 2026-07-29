import { Suspense } from "react";
import { LiteratureIndex } from "@/components/literature-index";
import { SectionTitle } from "@/components/section-title";
import { getAllReadings, getAllTopics } from "@/lib/topics";

export default function LiteraturePage() {
  const topics = getAllTopics();
  const readings = getAllReadings();
  const fields = topics.map((topic) => topic.title);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Readings"
        subtitle="A source-linked bibliography of foundational books, articles, reports, and institutional materials across the archive's research fields."
      />

      <Suspense fallback={<p className="py-8 text-sm text-muted">Loading reading filters...</p>}>
        <LiteratureIndex readings={readings} fields={fields} />
      </Suspense>
    </div>
  );
}

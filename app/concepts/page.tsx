import type { Metadata } from "next";
import { Suspense } from "react";
import { ConceptsIndex } from "@/components/concepts-index";
import { SectionTitle } from "@/components/section-title";
import { getAllConcepts } from "@/lib/concepts";

export const metadata: Metadata = {
  title: "Core Concepts",
  description:
    "A filterable glossary of law and economics concepts for corporate law, securities regulation, financial law, and empirical legal studies."
};

export default function ConceptsPage() {
  const concepts = getAllConcepts();
  const fields = Array.from(new Set(concepts.map((concept) => concept.field)));
  const letters = Array.from(new Set(concepts.map((concept) => concept.term[0].toUpperCase()))).sort();

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Core Concepts"
        subtitle="A filterable glossary of recurring terms in law, economics, accounting, and corporate finance, designed for orientation and cross-reference."
      />

      <Suspense fallback={<p className="py-8 text-sm text-muted">Loading concept filters...</p>}>
        <ConceptsIndex concepts={concepts} fields={fields} letters={letters} />
      </Suspense>
    </div>
  );
}

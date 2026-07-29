import type { Metadata } from "next";
import { Suspense } from "react";
import { CasesIndex } from "@/components/cases-index";
import { SectionTitle } from "@/components/section-title";
import { getAllCases, getCaseFields } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Classic cases for foundational law-and-economics theory, corporate law, securities regulation, and financial law."
};

export default function CasesPage() {
  const cases = getAllCases();
  const fields = getCaseFields();

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Cases"
        subtitle="A concise case index for foundational theory, corporate law, securities regulation, and financial law. Entries emphasize institutional problem, holding, and research significance rather than case-brief completeness."
      />

      <Suspense fallback={<p className="py-8 text-sm text-muted">Loading case filters...</p>}>
        <CasesIndex cases={cases} fields={fields} />
      </Suspense>
    </div>
  );
}

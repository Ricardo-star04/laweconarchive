import type { Metadata } from "next";
import { ScholarMatchQuiz } from "@/components/scholar-match-quiz";
import { SectionTitle } from "@/components/section-title";
import { getAllScholars } from "@/lib/field-history";

export const metadata: Metadata = {
  title: "Scholar Match",
  description:
    "A 30-question orientation exercise that suggests which archive scholar profiles are closest to a reader's research interests."
};

export default function ScholarMatchPage() {
  const candidates = getAllScholars().map((scholar) => ({
      slug: scholar.slug,
      name: scholar.name,
      role: scholar.role,
      fields: scholar.fields,
      summary: scholar.summary
    }));

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Scholar Match"
        subtitle="Compare your research interests with scholar profiles in the archive."
      />

      <ScholarMatchQuiz candidates={candidates} />
    </div>
  );
}

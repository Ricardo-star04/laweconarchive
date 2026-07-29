import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ScholarIndex } from "@/components/scholar-index";
import { SectionTitle } from "@/components/section-title";
import { getAllScholars, getScholarLetters } from "@/lib/field-history";

export const metadata: Metadata = {
  title: "Scholars",
  description:
    "A surname-sorted scholar index for law and economics, corporate governance, securities regulation, and financial law."
};

export default function ScholarsPage() {
  const scholars = getAllScholars();
  const letters = getScholarLetters();

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Scholars"
        subtitle="A navigational index of scholars whose work shaped law and economics, corporate governance, securities regulation, and financial law."
      />

      <section className="grid gap-5 border-y border-border/70 py-5 lg:grid-cols-[190px_minmax(0,1fr)_150px] lg:items-center">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Scholar Match</h2>
        </div>
        <p className="text-sm leading-7 text-muted">
          Answer 30 research-preference questions to find the archive scholar profiles closest to your current interests.
        </p>
        <Link href="/scholar-match" className="text-sm text-institute underline underline-offset-2 lg:text-right">
          Take the quiz
        </Link>
      </section>

      <Suspense fallback={<p className="py-8 text-sm text-muted">Loading scholar filters...</p>}>
        <ScholarIndex scholars={scholars} letters={letters} />
      </Suspense>
    </div>
  );
}

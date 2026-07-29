import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { getAllTopics } from "@/lib/topics";

export default function TopicsIndexPage() {
  const topics = getAllTopics();

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Research Fields"
        subtitle="A curated map of the archive's main fields, each organized around guiding questions, core readings, and verifiable sources."
      />

      <div className="grid gap-px border border-border/70 bg-border/70 lg:grid-cols-6">
        {topics.map((topic, index) => (
          <article
            key={topic.slug}
            className={[
              "group flex min-h-56 flex-col bg-white p-6 transition-colors hover:bg-paper/45",
              index < 3 ? "lg:col-span-2" : "lg:col-span-3"
            ].join(" ")}
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.16em] text-signal">
                Field {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-xs text-muted">{topic.readings.length} readings</p>
            </div>
            <h2 className="mt-5 font-serifCn text-2xl leading-tight text-accent">
              <Link
                href={`/topics/${topic.slug}`}
                className="underline-offset-4 hover:underline focus-visible:underline"
              >
                {topic.title}
              </Link>
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink">{topic.description}</p>
            <div className="mt-auto pt-6">
              <Link
                href={`/topics/${topic.slug}`}
                className="inline-flex items-center gap-2 text-sm text-institute underline-offset-4 hover:underline"
              >
                Explore field <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

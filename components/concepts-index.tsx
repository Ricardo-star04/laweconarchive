"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FilterPanel } from "@/components/filter-panel";
import { getConceptSlug } from "@/lib/concepts";
import type { ConceptEntry } from "@/lib/concepts";

const LEVELS: Array<"All" | ConceptEntry["level"]> = ["All", "Introductory", "Intermediate", "Advanced"];

type ConceptFilters = {
  field: string;
  level: (typeof LEVELS)[number];
  letter: string;
};

const DEFAULT_FILTERS: ConceptFilters = {
  field: "All",
  level: "All",
  letter: "All"
};

type ConceptGroup = {
  field: string;
  concepts: ConceptEntry[];
};

export function ConceptsIndex({
  concepts,
  fields,
  letters
}: {
  concepts: ConceptEntry[];
  fields: string[];
  letters: string[];
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "/concepts";
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ConceptFilters>(() => ({
    field:
      searchParams?.get("field") === "All" ||
      (searchParams?.get("field") && fields.includes(searchParams.get("field") as string))
        ? (searchParams.get("field") as string)
        : "All",
    level: LEVELS.includes(searchParams?.get("level") as (typeof LEVELS)[number])
      ? (searchParams?.get("level") as (typeof LEVELS)[number])
      : "All",
    letter:
      searchParams?.get("letter") === "All" ||
      (searchParams?.get("letter") && letters.includes(searchParams.get("letter") as string))
        ? (searchParams.get("letter") as string)
        : "All"
  }));
  const activeField = filters.field;
  const activeLevel = filters.level;
  const activeLetter = filters.letter;

  function updateFilters(nextFilters: {
    field?: string;
    level?: (typeof LEVELS)[number];
    letter?: string;
  }) {
    const nextValues: ConceptFilters = {
      field: nextFilters.field ?? activeField,
      level: nextFilters.level ?? activeLevel,
      letter: nextFilters.letter ?? activeLetter
    };
    const params = new URLSearchParams();

    setFilters(nextValues);

    if (nextValues.field !== "All") params.set("field", nextValues.field);

    if (nextValues.level !== "All") params.set("level", nextValues.level);

    if (nextValues.letter !== "All") params.set("letter", nextValues.letter);

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const visibleConcepts = concepts
    .filter((concept) => activeField === "All" || concept.field === activeField)
    .filter((concept) => activeLevel === "All" || concept.level === activeLevel)
    .filter((concept) => activeLetter === "All" || concept.term[0].toUpperCase() === activeLetter)
    .sort((first, second) => first.field.localeCompare(second.field) || first.term.localeCompare(second.term));

  const conceptGroups = visibleConcepts.reduce<ConceptGroup[]>((groups, concept) => {
    const existing = groups.find((group) => group.field === concept.field);
    if (existing) {
      existing.concepts.push(concept);
    } else {
      groups.push({ field: concept.field, concepts: [concept] });
    }
    return groups;
  }, []);

  const activeFilterCount = [activeField !== "All", activeLevel !== "All", activeLetter !== "All"].filter(Boolean).length;

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    router.replace(pathname, { scroll: false });
  }

  return (
    <section className="space-y-8">
      <FilterPanel title="Concept filters" activeCount={activeFilterCount} resultCount={visibleConcepts.length} onReset={resetFilters}>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Field</span>
            <select
              value={activeField}
              onChange={(event) => updateFilters({ field: event.target.value })}
              className="archive-select"
            >
              {["All", ...fields].map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted">Level</span>
            <select
              value={activeLevel}
              onChange={(event) => updateFilters({ level: event.target.value as (typeof LEVELS)[number] })}
              className="archive-select"
            >
              {LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted">Initial</span>
            <select
              value={activeLetter}
              onChange={(event) => updateFilters({ letter: event.target.value })}
              className="archive-select"
            >
              {["All", ...letters].map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </label>
        </div>
      </FilterPanel>

      <div className="space-y-12">
        {conceptGroups.length ? conceptGroups.map((group) => (
          <section key={group.field} className="grid gap-5 py-2 lg:grid-cols-[190px_minmax(0,1fr)]">
            <div className="py-3">
              <h2 className="font-serifCn text-2xl leading-tight text-accent">{group.field}</h2>
              <p className="mt-2 text-sm text-muted">{group.concepts.length} terms</p>
            </div>

            <div>
              <div className="hidden grid-cols-[220px_minmax(0,1fr)] gap-4 py-2 text-xs uppercase tracking-[0.14em] text-muted md:grid">
                <span>Term</span>
                <span>Definition</span>
              </div>
              <div className="divide-y divide-border/70">
              {group.concepts.map((concept) => (
                <article key={concept.term} className="grid gap-4 py-5 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
                  <div>
                    <h3 className="font-serifCn text-[1.6rem] leading-tight text-accent">
                      <Link href={`/concepts/${getConceptSlug(concept.term)}`} className="hover:underline">
                        {concept.term}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">{concept.level}</p>
                  </div>

                  <div>
                    <p className="max-w-3xl text-sm leading-7 text-ink">{concept.definition}</p>
                    <details className="mt-3">
                      <summary className="cursor-pointer text-sm text-institute underline underline-offset-2">Analytical use</summary>
                      <p className="mt-3 text-sm leading-7 text-muted">{concept.whyItMatters}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {concept.related.map((item) => (
                          <span key={item} className="bg-paper px-2 py-1 text-xs text-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </section>
        )) : (
          <p className="py-8 text-sm text-muted">No concepts match the current filters.</p>
        )}
      </div>
    </section>
  );
}

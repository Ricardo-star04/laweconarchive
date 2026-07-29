"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FilterPanel } from "@/components/filter-panel";
import type { CaseRecord } from "@/lib/cases";

const SORT_OPTIONS = [
  { value: "field", label: "Field order" },
  { value: "oldest", label: "Oldest first" },
  { value: "newest", label: "Newest first" },
  { value: "title", label: "Title A-Z" }
] as const;

type SortOption = (typeof SORT_OPTIONS)[number]["value"];

type CaseFilters = {
  field: string;
  query: string;
  sort: SortOption;
};

const DEFAULT_FILTERS: CaseFilters = {
  field: "All",
  query: "",
  sort: "field"
};

type CaseGroup = {
  field: string;
  cases: CaseRecord[];
};

function caseMatchesQuery(caseRecord: CaseRecord, query: string) {
  if (!query.trim()) return true;

  const normalizedQuery = query.trim().toLowerCase();
  const searchableText = [
    caseRecord.title,
    caseRecord.citation,
    caseRecord.court,
    caseRecord.year,
    caseRecord.field,
    caseRecord.issue,
    caseRecord.facts,
    caseRecord.holding,
    caseRecord.reasoning,
    caseRecord.significance,
    ...caseRecord.concepts
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedQuery);
}

function sortCases(cases: CaseRecord[], sortBy: SortOption, fields: string[]) {
  return [...cases].sort((first, second) => {
    if (sortBy === "oldest") {
      return Number.parseInt(first.year, 10) - Number.parseInt(second.year, 10) || first.title.localeCompare(second.title);
    }

    if (sortBy === "newest") {
      return Number.parseInt(second.year, 10) - Number.parseInt(first.year, 10) || first.title.localeCompare(second.title);
    }

    if (sortBy === "title") {
      return first.title.localeCompare(second.title);
    }

    return (
      fields.indexOf(first.field) - fields.indexOf(second.field) ||
      Number.parseInt(first.year, 10) - Number.parseInt(second.year, 10) ||
      first.title.localeCompare(second.title)
    );
  });
}

export function CasesIndex({
  cases,
  fields
}: {
  cases: CaseRecord[];
  fields: string[];
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "/cases";
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<CaseFilters>(() => ({
    field:
      searchParams?.get("field") === "All" ||
      (searchParams?.get("field") && fields.includes(searchParams.get("field") as string))
        ? (searchParams.get("field") as string)
        : "All",
    query: searchParams?.get("q") ?? "",
    sort: SORT_OPTIONS.some((option) => option.value === searchParams?.get("sort"))
      ? (searchParams?.get("sort") as SortOption)
      : "field"
  }));
  const activeField = filters.field;
  const activeQuery = filters.query;
  const sortBy = filters.sort;

  function updateFilters(nextFilters: { field?: string; q?: string; sort?: SortOption }) {
    const nextValues: CaseFilters = {
      field: nextFilters.field ?? activeField,
      query: nextFilters.q ?? activeQuery,
      sort: nextFilters.sort ?? sortBy
    };
    const params = new URLSearchParams();

    setFilters(nextValues);

    if (nextValues.field !== "All") params.set("field", nextValues.field);

    if (nextValues.query.trim()) params.set("q", nextValues.query.trim());

    if (nextValues.sort !== "field") params.set("sort", nextValues.sort);

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    router.replace(pathname, { scroll: false });
  }

  const visibleCases = sortCases(
    cases
      .filter((caseRecord) => activeField === "All" || caseRecord.field === activeField)
      .filter((caseRecord) => caseMatchesQuery(caseRecord, activeQuery)),
    sortBy,
    fields
  );

  const caseGroups: CaseGroup[] =
    sortBy !== "field" || activeField !== "All"
      ? [
          {
            field: activeField === "All" ? SORT_OPTIONS.find((option) => option.value === sortBy)?.label ?? "Results" : activeField,
            cases: visibleCases
          }
        ]
      : visibleCases.reduce<CaseGroup[]>((groups, caseRecord) => {
          const existing = groups.find((group) => group.field === caseRecord.field);
          if (existing) {
            existing.cases.push(caseRecord);
          } else {
            groups.push({ field: caseRecord.field, cases: [caseRecord] });
          }
          return groups;
        }, []);

  const fieldCounts = Object.fromEntries(
    ["All", ...fields].map((field) => [
      field,
      cases
        .filter((caseRecord) => field === "All" || caseRecord.field === field)
        .filter((caseRecord) => caseMatchesQuery(caseRecord, activeQuery)).length
    ])
  );
  const activeFilterCount = [activeField !== "All", Boolean(activeQuery.trim()), sortBy !== "field"].filter(Boolean).length;

  return (
    <section className="space-y-8">
      <FilterPanel title="Case filters" activeCount={activeFilterCount} resultCount={visibleCases.length} onReset={resetFilters}>
        <div className="space-y-4">
          <div>
            <label className="block md:hidden">
              <span className="mb-2 block text-sm text-muted">Field</span>
              <select
                value={activeField}
                onChange={(event) => updateFilters({ field: event.target.value })}
                className="archive-select"
              >
                {["All", ...fields].map((field) => (
                  <option key={field} value={field}>
                    {field} ({fieldCounts[field]})
                  </option>
                ))}
              </select>
            </label>
            <p className="mb-2 hidden text-sm text-muted md:block">Field</p>
            <div className="hidden flex-wrap gap-2 md:flex">
              {["All", ...fields].map((field) => (
                <button
                  key={field}
                  type="button"
                  onClick={() => updateFilters({ field })}
                  className={[
                    "border px-3 py-1.5 text-xs",
                    activeField === field ? "border-institute bg-institute text-white" : "border-border text-muted"
                  ].join(" ")}
                >
                  {field} <span className="tabular-nums opacity-75">({fieldCounts[field]})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Search cases</span>
              <input
                type="search"
                value={activeQuery}
                onChange={(event) => updateFilters({ q: event.target.value })}
                placeholder="Case, court, concept, or issue"
                className="w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-muted">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => updateFilters({ sort: event.target.value as SortOption })}
                className="archive-select"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </FilterPanel>

      <div className="space-y-12">
        {caseGroups.length ? (
          caseGroups.map((group) => (
            <section key={group.field} className="py-2">
              <div className="mb-3 flex flex-col gap-1 border-b border-border/70 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h2 className="font-serifCn text-2xl leading-tight text-accent">{group.field}</h2>
                <p className="shrink-0 text-sm text-muted">{group.cases.length} cases</p>
              </div>

              <div className="hidden grid-cols-[88px_minmax(0,1fr)_160px] gap-5 py-2 text-xs uppercase tracking-[0.12em] text-muted md:grid">
                <span>Year</span>
                <span>Case and issue</span>
                <span className="text-right">Source</span>
              </div>
              <div className="divide-y divide-border/70">
                {group.cases.map((caseRecord) => (
                  <article key={caseRecord.slug} className="grid gap-4 py-5 md:grid-cols-[88px_minmax(0,1fr)_160px] md:gap-5">
                    <div>
                      <p className="font-serifCn text-2xl text-signal">{caseRecord.year}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{caseRecord.court}</p>
                    </div>
                    <div>
                      <h3 className="font-serifCn text-xl leading-snug text-accent">
                        <Link href={`/cases/${caseRecord.slug}`} className="hover:underline">
                          {caseRecord.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-7 text-ink">{caseRecord.citation}</p>
                      <p className="mt-2 max-w-4xl text-[0.95rem] leading-7 text-muted">{caseRecord.issue}</p>
                    </div>
                    <div className="md:text-right">
                      <a
                        href={caseRecord.sourceHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs uppercase text-muted underline underline-offset-2 hover:text-accent"
                      >
                        {caseRecord.sourceLabel}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="py-8 text-sm text-muted">No cases match the current filters.</p>
        )}
      </div>
    </section>
  );
}

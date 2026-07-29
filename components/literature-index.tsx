"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FilterPanel } from "@/components/filter-panel";
import { PublicationCover } from "@/components/venue-cover";
import { getReadingDoi, getReadingPublicationType } from "@/lib/topics";
import type { IndexedReading, ReadingLevel, ReadingPublicationType } from "@/lib/topics";
import { getPublicationCover } from "@/lib/venue-covers";

const LEVELS: Array<"All" | ReadingLevel> = ["All", "Introductory", "Intermediate", "Advanced"];
const PUBLICATION_TYPES: Array<"All" | ReadingPublicationType> = ["All", "Article", "Book", "Chapter", "Report"];
const DOI_OPTIONS = ["All", "Has DOI", "No DOI"] as const;
const SORT_OPTIONS = [
  { value: "field", label: "Field order" },
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title", label: "Title A-Z" }
] as const;

const DEFAULT_GROUP_LIMIT = 4;

type SortOption = (typeof SORT_OPTIONS)[number]["value"];

type ReadingFilters = {
  field: string;
  level: (typeof LEVELS)[number];
  type: (typeof PUBLICATION_TYPES)[number];
  doi: (typeof DOI_OPTIONS)[number];
  from: string;
  to: string;
  sort: SortOption;
};

const DEFAULT_FILTERS: ReadingFilters = {
  field: "All",
  level: "All",
  type: "All",
  doi: "All",
  from: "",
  to: "",
  sort: "field"
};

type ReadingGroup = {
  key: string;
  title: string;
  readings: IndexedReading[];
};

function isArchiveDefaultFilter({
  activeField,
  activeLevel,
  activeType,
  activeDoi,
  yearFrom,
  yearTo,
  sortBy
}: {
  activeField: string;
  activeLevel: (typeof LEVELS)[number];
  activeType: (typeof PUBLICATION_TYPES)[number];
  activeDoi: (typeof DOI_OPTIONS)[number];
  yearFrom: string;
  yearTo: string;
  sortBy: SortOption;
}) {
  return (
    activeField === "All" &&
    activeLevel === "All" &&
    activeType === "All" &&
    activeDoi === "All" &&
    !yearFrom &&
    !yearTo &&
    sortBy === "field"
  );
}

export function LiteratureIndex({
  readings,
  fields
}: {
  readings: IndexedReading[];
  fields: string[];
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "/literature";
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<ReadingFilters>(() => ({
    field:
      searchParams?.get("field") === "All" ||
      (searchParams?.get("field") && fields.includes(searchParams.get("field") as string))
        ? (searchParams.get("field") as string)
        : "All",
    level: LEVELS.includes(searchParams?.get("level") as (typeof LEVELS)[number])
      ? (searchParams?.get("level") as (typeof LEVELS)[number])
      : "All",
    type: PUBLICATION_TYPES.includes(searchParams?.get("type") as (typeof PUBLICATION_TYPES)[number])
      ? (searchParams?.get("type") as (typeof PUBLICATION_TYPES)[number])
      : "All",
    doi: DOI_OPTIONS.includes(searchParams?.get("doi") as (typeof DOI_OPTIONS)[number])
      ? (searchParams?.get("doi") as (typeof DOI_OPTIONS)[number])
      : "All",
    from: searchParams?.get("from") ?? "",
    to: searchParams?.get("to") ?? "",
    sort: SORT_OPTIONS.some((option) => option.value === searchParams?.get("sort"))
      ? (searchParams?.get("sort") as SortOption)
      : "field"
  }));
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const activeField = filters.field;
  const activeLevel = filters.level;
  const activeType = filters.type;
  const activeDoi = filters.doi;
  const sortBy = filters.sort;
  const yearFrom = filters.from;
  const yearTo = filters.to;

  function updateFilters(nextFilters: {
    field?: string;
    level?: (typeof LEVELS)[number];
    type?: (typeof PUBLICATION_TYPES)[number];
    doi?: (typeof DOI_OPTIONS)[number];
    from?: string;
    to?: string;
    sort?: SortOption;
  }) {
    const nextValues: ReadingFilters = {
      field: nextFilters.field ?? activeField,
      level: nextFilters.level ?? activeLevel,
      type: nextFilters.type ?? activeType,
      doi: nextFilters.doi ?? activeDoi,
      from: nextFilters.from ?? yearFrom,
      to: nextFilters.to ?? yearTo,
      sort: nextFilters.sort ?? sortBy
    };
    const params = new URLSearchParams();

    setFilters(nextValues);

    if (nextValues.field !== "All") params.set("field", nextValues.field);

    if (nextValues.level !== "All") params.set("level", nextValues.level);

    if (nextValues.type !== "All") params.set("type", nextValues.type);

    if (nextValues.doi !== "All") params.set("doi", nextValues.doi);

    if (nextValues.from.trim()) params.set("from", nextValues.from.trim());

    if (nextValues.to.trim()) params.set("to", nextValues.to.trim());

    if (nextValues.sort !== "field") params.set("sort", nextValues.sort);

    setExpandedGroups({});
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const isDefaultView = isArchiveDefaultFilter({
    activeField,
    activeLevel,
    activeType,
    activeDoi,
    yearFrom,
    yearTo,
    sortBy
  });

  const activeFilterCount = [
    activeField !== "All",
    activeLevel !== "All",
    activeType !== "All",
    activeDoi !== "All",
    Boolean(yearFrom),
    Boolean(yearTo),
    sortBy !== "field"
  ].filter(Boolean).length;

  const from = yearFrom ? Number.parseInt(yearFrom, 10) : null;
  const to = yearTo ? Number.parseInt(yearTo, 10) : null;
  const visibleReadings = [...readings]
    .filter((reading) => activeField === "All" || reading.topicTitle === activeField)
    .filter((reading) => activeLevel === "All" || reading.level === activeLevel)
    .filter((reading) => activeType === "All" || getReadingPublicationType(reading) === activeType)
    .filter((reading) => {
      if (activeDoi === "All") return true;
      const hasDoi = Boolean(getReadingDoi(reading));
      return activeDoi === "Has DOI" ? hasDoi : !hasDoi;
    })
    .filter((reading) => (from ? reading.sortYear >= from : true))
    .filter((reading) => (to ? reading.sortYear <= to : true))
    .sort((first, second) => {
      if (sortBy === "newest") return second.sortYear - first.sortYear || first.title.localeCompare(second.title);
      if (sortBy === "oldest") return first.sortYear - second.sortYear || first.title.localeCompare(second.title);
      if (sortBy === "title") return first.title.localeCompare(second.title);
      return (
        first.topicOrder - second.topicOrder ||
        first.sortYear - second.sortYear ||
        first.title.localeCompare(second.title)
      );
    });

  const readingGroups: ReadingGroup[] =
    sortBy !== "field"
      ? [
          {
            key: "sorted-results",
            title: SORT_OPTIONS.find((option) => option.value === sortBy)?.label ?? "Results",
            readings: visibleReadings
          }
        ]
      : visibleReadings.reduce<ReadingGroup[]>((groups, reading) => {
          const existing = groups.find((group) => group.key === reading.topicSlug);
          if (existing) {
            existing.readings.push(reading);
          } else {
            groups.push({ key: reading.topicSlug, title: reading.topicTitle, readings: [reading] });
          }
          return groups;
        }, []);

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    setExpandedGroups({});
    router.replace(pathname, { scroll: false });
  }

  return (
    <section className="space-y-8">
      <FilterPanel title="Reading filters" activeCount={activeFilterCount} resultCount={visibleReadings.length} onReset={resetFilters}>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_180px_180px]">
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
                    {field}
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
                    "border px-3 py-2 text-xs leading-none",
                    activeField === field ? "border-institute bg-institute text-white" : "border-border text-muted"
                  ].join(" ")}
                >
                  {field}
                </button>
              ))}
            </div>
          </div>

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

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Type</span>
            <select
              value={activeType}
              onChange={(event) => updateFilters({ type: event.target.value as (typeof PUBLICATION_TYPES)[number] })}
              className="archive-select"
            >
              {PUBLICATION_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted">DOI</span>
            <select
              value={activeDoi}
              onChange={(event) => updateFilters({ doi: event.target.value as (typeof DOI_OPTIONS)[number] })}
              className="archive-select"
            >
              {DOI_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted">From</span>
            <input
              type="number"
              inputMode="numeric"
              value={yearFrom}
              onChange={(event) => updateFilters({ from: event.target.value })}
              placeholder="1913"
              className="w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted">To</span>
            <input
              type="number"
              inputMode="numeric"
              value={yearTo}
              onChange={(event) => updateFilters({ to: event.target.value })}
              placeholder="2026"
              className="w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
            />
          </label>
        </div>
      </FilterPanel>

      <div className="space-y-10">
        {readingGroups.length ? readingGroups.map((group) => {
          const isExpanded = expandedGroups[group.key];
          const shouldLimit = isDefaultView && !isExpanded && group.readings.length > DEFAULT_GROUP_LIMIT;
          const displayedReadings = shouldLimit ? group.readings.slice(0, DEFAULT_GROUP_LIMIT) : group.readings;
          const hiddenCount = group.readings.length - displayedReadings.length;

          return (
            <section key={group.key} className="grid gap-5 border-t border-border/70 py-7 lg:grid-cols-[190px_minmax(0,1fr)]">
              <div className="py-1">
                <h3 className="font-serifCn text-2xl leading-tight text-accent">{group.title}</h3>
                <p className="mt-2 text-sm text-muted">{group.readings.length} readings</p>
              </div>

              <div>
                <div className="divide-y divide-border/70 bg-white/45">
                  {displayedReadings.map((reading, index) => (
                    <article
                      key={`${reading.slug}-${reading.topicSlug}-${index}`}
                      className="grid gap-4 px-0 py-5 md:grid-cols-[92px_minmax(0,1fr)_150px] md:gap-6"
                    >
                      <div className="flex items-start gap-3 md:block">
                        <div className="w-16 shrink-0 md:w-[72px]">
                          <PublicationCover cover={getPublicationCover(reading)} reading={reading} size="thumbnail" />
                        </div>
                        <div className="min-w-0 md:mt-3">
                          <p className="text-[0.68rem] uppercase tracking-[0.12em] text-muted">
                            No. {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 font-serifCn text-lg text-signal">{reading.year}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted md:hidden">{reading.level}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="max-w-4xl font-serifCn text-xl leading-snug text-accent">
                          <Link href={`/readings/${reading.slug}`} className="hover:underline">
                            {reading.title}
                          </Link>
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-ink">{reading.authors}</p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          {reading.venue} · {getReadingPublicationType(reading)}
                          {getReadingDoi(reading) ? " · DOI" : ""}
                        </p>
                        <details className="mt-3 max-w-3xl">
                          <summary className="cursor-pointer text-sm text-institute underline underline-offset-2">Summary</summary>
                          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{reading.summary}</p>
                        </details>
                      </div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 md:block md:space-y-3 md:text-right">
                        <Link href={reading.topicHref} className="block text-sm leading-5 text-institute underline underline-offset-2">
                          {reading.topicTitle}
                        </Link>
                        <a
                          href={reading.sourceHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block text-xs uppercase leading-5 text-muted underline underline-offset-2 hover:text-accent"
                        >
                          {reading.sourceLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                {hiddenCount > 0 ? (
                  <button
                    type="button"
                    onClick={() => setExpandedGroups((current) => ({ ...current, [group.key]: true }))}
                    className="mt-3 w-full bg-paper/70 py-3 text-sm text-institute underline underline-offset-2 hover:bg-paper"
                  >
                    Show {hiddenCount} more readings in this group
                  </button>
                ) : null}
              </div>
            </section>
          );
        }) : (
          <p className="py-8 text-sm text-muted">No readings match the current filters.</p>
        )}
      </div>
    </section>
  );
}

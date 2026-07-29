"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArchiveImage } from "@/components/archive-image";
import { FilterPanel } from "@/components/filter-panel";
import type { ScholarRecord } from "@/lib/field-history";

const AREA_OPTIONS = [
  {
    label: "All fields",
    keywords: []
  },
  {
    label: "Foundations / Institutions",
    keywords: [
      "transaction costs",
      "property rights",
      "institutional economics",
      "deterrence",
      "public enforcement",
      "human behavior",
      "transaction-cost economics",
      "economic governance",
      "contractual relations",
      "institutions",
      "institutional change",
      "economic history",
      "economic analysis of law",
      "law and economics",
      "legal process",
      "behavioral law and economics",
      "behavioral economics",
      "prospect theory",
      "judgment and decision-making",
      "choice architecture",
      "contracts",
      "negotiation",
      "judicial behavior",
      "litigation",
      "consumer contracts",
      "consumer finance"
    ]
  },
  {
    label: "Corporate Law",
    keywords: [
      "corporate law",
      "corporate governance",
      "comparative corporate law",
      "corporate finance",
      "ownership design",
      "agency problems",
      "shareholder rights",
      "shareholder voting",
      "executive compensation",
      "takeovers",
      "mergers and acquisitions",
      "organizational law",
      "contract theory",
      "incomplete contracts",
      "moral hazard",
      "incentive design",
      "private benefits of control"
    ]
  },
  {
    label: "Securities Regulation",
    keywords: [
      "securities regulation",
      "securities enforcement",
      "securities litigation",
      "capital markets",
      "market manipulation",
      "gatekeepers",
      "mandatory disclosure",
      "efficient markets",
      "investor protection",
      "securities law",
      "market regulation",
      "securities litigation",
      "insider trading",
      "behavioral economics",
      "information traders",
      "disclosure regulation",
      "financial reporting"
    ]
  },
  {
    label: "Financial Law",
    keywords: [
      "financial regulation",
      "financial systems",
      "financial markets",
      "financial crises",
      "banking",
      "bankruptcy",
      "systemic risk",
      "liquidity",
      "consumer finance",
      "legal theory of finance"
    ]
  },
  {
    label: "Methods / Empirical",
    keywords: [
      "empirical legal studies",
      "comparative corporate law",
      "law and finance",
      "legal origins",
      "financial development",
      "measurement",
      "indices"
    ]
  },
  {
    label: "Legal Theory / Concepts",
    keywords: ["analytical jurisprudence", "legal relations", "rights analysis"]
  }
];

type ScholarGroup = {
  letter: string;
  scholars: ScholarRecord[];
};

function scholarMatchesArea(scholar: ScholarRecord, activeArea: string) {
  const option = AREA_OPTIONS.find((area) => area.label === activeArea);
  if (!option || !option.keywords.length) return true;

  const searchableText = scholar.fields.join(" ").toLowerCase();

  return option.keywords.some((keyword) => searchableText.includes(keyword));
}

export function ScholarIndex({ scholars, letters }: { scholars: ScholarRecord[]; letters: string[] }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/scholars";
  const searchParams = useSearchParams();
  const requestedLetter = searchParams?.get("letter") ?? "All";
  const requestedArea = searchParams?.get("area") ?? "All fields";
  const activeLetter = requestedLetter === "All" || letters.includes(requestedLetter) ? requestedLetter : "All";
  const activeArea = AREA_OPTIONS.some((area) => area.label === requestedArea) ? requestedArea : "All fields";

  function updateFilters(nextFilters: { letter?: string; area?: string }) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    const nextLetter = nextFilters.letter ?? activeLetter;
    const nextArea = nextFilters.area ?? activeArea;

    if (nextLetter === "All") {
      params.delete("letter");
    } else {
      params.set("letter", nextLetter);
    }

    if (nextArea === "All fields") {
      params.delete("area");
    } else {
      params.set("area", nextArea);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  const visibleScholars = scholars
    .filter((scholar) => activeLetter === "All" || scholar.sortLetter === activeLetter)
    .filter((scholar) => scholarMatchesArea(scholar, activeArea));

  const scholarGroups = visibleScholars.reduce<ScholarGroup[]>((groups, scholar) => {
    const existing = groups.find((group) => group.letter === scholar.sortLetter);
    if (existing) {
      existing.scholars.push(scholar);
    } else {
      groups.push({ letter: scholar.sortLetter, scholars: [scholar] });
    }
    return groups;
  }, []);

  const areaCounts = Object.fromEntries(
    AREA_OPTIONS.map((area) => [
      area.label,
      scholars
        .filter((scholar) => activeLetter === "All" || scholar.sortLetter === activeLetter)
        .filter((scholar) => scholarMatchesArea(scholar, area.label)).length
    ])
  );

  const activeFilterCount = [activeLetter !== "All", activeArea !== "All fields"].filter(Boolean).length;

  function resetFilters() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-5 py-4 lg:grid-cols-[190px_minmax(0,1fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Surname index</p>
          <h2 className="mt-1 font-serifCn text-2xl text-accent">{scholars.length} profiles</h2>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-muted">
          The index is sorted by surname. Select a letter or a field to narrow the list; each entry opens a dedicated
          scholar page with institutional profile notes, source links, works, and relevance to the archive.
        </p>
      </section>

      <FilterPanel title="Scholar filters" activeCount={activeFilterCount} resultCount={visibleScholars.length} onReset={resetFilters}>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <label className="block md:hidden">
              <span className="mb-2 block text-sm text-muted">Surname letter</span>
              <select
                value={activeLetter}
                onChange={(event) => updateFilters({ letter: event.target.value })}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
              >
                {["All", ...letters].map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </label>
            <p className="mb-2 hidden text-sm text-muted md:block">Surname letter</p>
            <div className="hidden flex-wrap gap-2 md:flex">
              {["All", ...letters].map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => updateFilters({ letter })}
                  className={[
                    "border px-3 py-1.5 text-xs uppercase tracking-[0.12em]",
                    activeLetter === letter ? "border-institute bg-institute text-white" : "border-border text-muted"
                  ].join(" ")}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block md:hidden">
              <span className="mb-2 block text-sm text-muted">Field</span>
              <select
                value={activeArea}
                onChange={(event) => updateFilters({ area: event.target.value })}
                className="w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
              >
                {AREA_OPTIONS.map((area) => (
                  <option key={area.label} value={area.label}>
                    {area.label} ({areaCounts[area.label]})
                  </option>
                ))}
              </select>
            </label>
            <p className="mb-2 hidden text-sm text-muted md:block">Field</p>
            <div className="hidden flex-wrap gap-2 md:flex">
              {AREA_OPTIONS.map((area) => (
                <button
                  key={area.label}
                  type="button"
                  aria-pressed={activeArea === area.label}
                  onClick={() => updateFilters({ area: area.label })}
                  className={[
                    "border px-3 py-1.5 text-xs",
                    activeArea === area.label ? "border-institute bg-institute text-white" : "border-border text-muted"
                  ].join(" ")}
                >
                  {area.label} <span className="tabular-nums opacity-75">({areaCounts[area.label]})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </FilterPanel>

      <section className="space-y-12">
        {scholarGroups.length ? scholarGroups.map((group) => (
          <section key={group.letter} className="grid gap-5 py-2 lg:grid-cols-[120px_minmax(0,1fr)]">
            <div className="py-3">
              <h3 className="font-serifCn text-4xl text-accent">{group.letter}</h3>
              <p className="mt-1 text-sm text-muted">{group.scholars.length} profiles</p>
            </div>

            <div>
              <div className="hidden grid-cols-[56px_minmax(0,1fr)_180px] gap-4 py-2 text-xs uppercase tracking-[0.14em] text-muted md:grid">
                <span>Portrait</span>
                <span>Profile</span>
                <span className="text-right">Fields</span>
              </div>
              <div className="divide-y divide-border/70">
              {group.scholars.map((scholar) => (
                <article key={scholar.slug} className="grid gap-4 py-5 md:grid-cols-[56px_minmax(0,1fr)_180px] md:items-start">
                  <ArchiveImage
                    src={scholar.imageUrl}
                    alt={scholar.imageAlt}
                    variant="thumbnail"
                    className="w-14 p-1"
                    imageClassName="h-[72px]"
                    imagePosition={scholar.imagePosition}
                  />
                  <div>
                    <h4 className="font-serifCn text-[1.6rem] leading-tight text-accent">
                      <Link href={`/scholars/${scholar.slug}`} className="hover:underline">
                        {scholar.name}
                      </Link>
                    </h4>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-ink">{scholar.role}</p>
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm text-institute underline underline-offset-2">Profile note</summary>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{scholar.summary}</p>
                    </details>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {scholar.fields.slice(0, 2).map((field) => (
                      <span key={field} className="bg-paper px-2 py-1 text-xs text-muted">
                        {field}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
              </div>
            </div>
          </section>
        )) : (
          <p className="py-8 text-sm text-muted">No scholars match the current filters.</p>
        )}
      </section>
    </div>
  );
}

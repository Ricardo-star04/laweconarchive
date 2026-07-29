"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "start-here": "Start Here",
  topics: "Fields",
  literature: "Readings",
  readings: "Readings",
  concepts: "Concepts",
  cases: "Cases",
  methods: "Methods",
  "weekly-report": "Research Weekly",
  history: "History & Theory",
  "theory-lineages": "History & Theory",
  scholars: "Scholars",
  introduction: "Primer",
  "source-policy": "Source Policy",
  citation: "Citation",
  updates: "Internal Update Log",
  about: "About",
  articles: "Articles"
};

function labelFor(segment: string) {
  return labels[segment] ?? segment.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = (pathname ?? "/").split("/").filter(Boolean);

  if (segments.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-6 pt-5 text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-accent">{labelFor(segment)}</span>
              ) : (
                <Link href={href} className="hover:text-accent">
                  {labelFor(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

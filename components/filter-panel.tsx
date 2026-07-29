"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export function FilterPanel({
  title = "Filters",
  activeCount,
  resultCount,
  onReset,
  children
}: {
  title?: string;
  activeCount: number;
  resultCount: number;
  onReset: () => void;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-y border-border/70 bg-white/80 px-4 md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3 py-4 md:py-5">
        <div>
          <p className="text-sm text-muted">{title}</p>
          <p className="mt-1 font-serifCn text-lg leading-tight text-accent">
            {resultCount} shown
            {activeCount ? ` · ${activeCount} active` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {activeCount ? (
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-2 text-sm text-muted underline underline-offset-2 hover:text-accent"
            >
              Reset
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="border border-border bg-white px-3 py-2 text-sm text-institute md:hidden"
            aria-expanded={isOpen}
          >
            {isOpen ? "Hide filters" : "Show filters"}
          </button>
        </div>
      </div>
      <div className={[isOpen ? "block" : "hidden", "pb-5 md:block"].join(" ")}>{children}</div>
    </section>
  );
}

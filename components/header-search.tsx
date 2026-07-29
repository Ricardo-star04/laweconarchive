"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchItem } from "@/lib/search";

function resultScore(item: SearchItem, query: string) {
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const keywords = item.keywords.join(" ").toLowerCase();
  const type = item.type.toLowerCase();
  const haystack = `${title} ${type} ${description} ${keywords}`;
  const terms = query.split(/\s+/).filter(Boolean);

  if (!terms.every((term) => haystack.includes(term))) return 0;

  let score = 1;
  if (title === query) score += 1000;
  else if (title.startsWith(query)) score += 500;
  else if (title.includes(query)) score += 250;

  if (type === query) score += 120;
  if (keywords.includes(query)) score += 80;
  if (description.includes(query)) score += 40;

  for (const term of terms) {
    if (title.includes(term)) score += 35;
    if (keywords.includes(term)) score += 15;
    if (description.includes(term)) score += 5;
  }

  return score;
}

export function HeaderSearch({
  items,
  onOpenChange,
  inverse = false
}: {
  items: SearchItem[];
  onOpenChange?: (isOpen: boolean) => void;
  inverse?: boolean;
}) {
  const searchInputId = useId();
  const searchResultsId = `${searchInputId}-results`;
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, " ");

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];
    return items
      .map((item) => ({ item, score: resultScore(item, normalizedQuery) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map((result) => result.item);
  }, [items, normalizedQuery]);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    onOpenChange?.(false);
  }, [onOpenChange]);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeSearch();
    }

    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) closeSearch();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeSearch, isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={isOpen ? "Close archive search" : "Open archive search"}
        aria-expanded={isOpen}
        aria-controls={isOpen ? searchResultsId : undefined}
        className={[
          "flex h-11 w-11 items-center justify-center border lg:h-9 lg:w-9",
          inverse
            ? isOpen
              ? "border-white bg-white text-institute"
              : "border-white/40 text-white/80 hover:border-white/80 hover:text-white"
            : isOpen
              ? "border-institute text-accent"
              : "border-border text-muted hover:border-institute hover:text-accent"
        ].join(" ")}
        onClick={() => {
          const nextOpen = !isOpen;
          setIsOpen(nextOpen);
          if (!nextOpen) setQuery("");
          onOpenChange?.(nextOpen);
        }}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6.2" />
          <path d="m15.5 15.5 4 4" />
        </svg>
      </button>

      {isOpen ? (
        <div
          id={searchResultsId}
          role="dialog"
          aria-label="Archive search"
          className="fixed inset-x-4 top-[4.5rem] z-40 max-h-[calc(100dvh-5.5rem)] overflow-hidden border border-border bg-white p-4 shadow-[0_18px_45px_rgba(140,21,21,0.14)] lg:absolute lg:left-auto lg:right-0 lg:top-full lg:mt-2 lg:w-[440px]"
        >
          <div className="mb-3 flex items-center justify-between gap-4 border-b border-border pb-2">
            <p className="text-xs uppercase tracking-[0.16em] text-signal">Archive search</p>
            <button
              type="button"
              onClick={closeSearch}
              className="min-h-11 px-2 text-xs uppercase tracking-[0.12em] text-muted hover:text-accent lg:min-h-0"
            >
              Close
            </button>
          </div>
          <label htmlFor={searchInputId} className="sr-only">
            Search this site
          </label>
          <input
            ref={inputRef}
            id={searchInputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search concepts, authors, fields, or titles..."
            autoComplete="off"
            aria-controls={`${searchResultsId}-list`}
            className="min-h-11 w-full border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-institute"
          />

          {results.length ? (
            <>
              <p className="mt-3 text-xs text-muted" aria-live="polite">
                {results.length} {results.length === 1 ? "result" : "results"} · ranked by relevance
              </p>
              <ul
                id={`${searchResultsId}-list`}
                className="mt-2 max-h-[min(55dvh,420px)] divide-y divide-border/70 overflow-y-auto overscroll-contain"
              >
              {results.map((item) => (
                <li key={`${item.type}-${item.href}-${item.title}`}>
                  <Link href={item.href} onClick={closeSearch} className="block py-3 hover:bg-paper">
                    <div className="flex items-start justify-between gap-4 px-2">
                      <p className="font-serifCn text-lg leading-tight text-accent">{item.title}</p>
                      <span className="shrink-0 border border-border px-2 py-1 text-xs uppercase text-muted">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-3 px-2 text-xs leading-5 text-muted">{item.description}</p>
                  </Link>
                </li>
              ))}
              </ul>
            </>
          ) : normalizedQuery.length >= 2 ? (
            <p className="mt-3 py-3 text-sm text-muted" aria-live="polite">
              No matching entries. Try a shorter title, surname, concept, or field.
            </p>
          ) : (
            <p className="mt-3 text-xs leading-5 text-muted">
              Enter at least two characters. Multiple words are matched together.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}

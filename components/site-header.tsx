"use client";

import Link from "next/link";
import { MediaGatedImage } from "@/components/media-gated-image";
import { withBasePath } from "@/lib/base-path";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeaderSearch } from "@/components/header-search";
import type { SearchItem } from "@/lib/search";

type NavigationLink = {
  href: string;
  label: string;
  description?: string;
  aliases?: string[];
};

type NavigationGroup = {
  title: string;
  description: string;
  items: NavigationLink[];
};

const primaryNavItems: NavigationLink[] = [
  {
    href: "/start-here",
    label: "Start Here",
    description: "A short orientation for new readers."
  },
  {
    href: "/topics",
    label: "Fields",
    description: "Corporate law, securities regulation, financial law, and methods."
  },
  {
    href: "/literature",
    label: "Readings",
    description: "Source-linked literature records and article summaries.",
    aliases: ["/readings"]
  }
];

const desktopNavGroups: NavigationGroup[] = [
  {
    title: "Reference",
    description: "Core indexes for scholars, concepts, cases, and research methods.",
    items: [
      {
        href: "/scholars",
        label: "Scholars",
        description: "Scholar profiles organized by surname and field."
      },
      {
        href: "/concepts",
        label: "Concepts",
        description: "A compact glossary of recurring terms and analytical frames."
      },
      {
        href: "/cases",
        label: "Cases",
        description: "Classic cases for foundational theory, corporate law, securities regulation, and financial law."
      },
      {
        href: "/methods",
        label: "Methods Toolkit",
        description: "Research design, empirical legal studies, and causal inference notes."
      }
    ]
  },
  {
    title: "Analysis",
    description: "Guides for history, theory, critique, comparison, and current research.",
    items: [
      {
        href: "/history",
        label: "History & Theory",
        description: "A chronological field history with problem-centered theory lineages.",
        aliases: ["/theory-lineages"]
      },
      {
        href: "/debates",
        label: "Debates",
        description: "Recurring critiques and limits of law-and-economics arguments."
      },
      {
        href: "/comparative-law",
        label: "Comparative Law",
        description: "Comparative dimensions of corporate, securities, and financial-law institutions."
      },
      {
        href: "/weekly-report",
        label: "Research Weekly",
        description: "New law-and-economics papers and working papers, updated every Monday at 08:00.",
        aliases: ["/case-method"]
      }
    ]
  },
  {
    title: "Site",
    description: "Editorial information and source standards.",
    items: [
      {
        href: "/about",
        label: "About",
        description: "Purpose, audience, scope, and contact information."
      },
      {
        href: "/source-policy",
        label: "Source Policy",
        description: "Standards for sources, summaries, images, and verification."
      },
      {
        href: "/citation",
        label: "Citation",
        description: "How to cite archive pages and verify original sources."
      }
    ]
  }
];

const mobileNavGroups: NavigationGroup[] = [
  {
    title: "Quick access",
    description: "Primary ways into the archive.",
    items: [
      { href: "/start-here", label: "Start Here" },
      { href: "/topics", label: "Fields" },
      { href: "/literature", label: "Readings", aliases: ["/readings"] },
      { href: "/weekly-report", label: "Research Weekly", aliases: ["/case-method"] }
    ]
  },
  {
    title: "Reference",
    description: "Core research indexes and methods.",
    items: [
      { href: "/scholars", label: "Scholars" },
      { href: "/concepts", label: "Concepts" },
      { href: "/cases", label: "Cases" },
      { href: "/methods", label: "Methods Toolkit" }
    ]
  },
  {
    title: "Analysis",
    description: "Guides for history, theory, critique, comparison, and current research.",
    items: [
      { href: "/history", label: "History & Theory", aliases: ["/theory-lineages"] },
      { href: "/debates", label: "Debates" },
      { href: "/comparative-law", label: "Comparative Law" }
    ]
  },
  {
    title: "Site",
    description: "Editorial information and source standards.",
    items: [
      { href: "/about", label: "About" },
      { href: "/source-policy", label: "Source Policy" },
      { href: "/citation", label: "Citation" }
    ]
  }
];

export function SiteHeader({ searchItems }: { searchItems: SearchItem[] }) {
  const pathname = usePathname() ?? "/";
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isActivePath = (item: NavigationLink) => {
    const paths = [item.href, ...(item.aliases ?? [])];
    return paths.some((href) => pathname === href || (href !== "/" && pathname.startsWith(href)));
  };

  const currentSection =
    [...primaryNavItems, ...desktopNavGroups.flatMap((group) => group.items)].find((item) => isActivePath(item))?.label ??
    "Home";

  return (
    <header className="relative sticky top-0 z-20 bg-institute shadow-[0_10px_35px_rgba(88,0,0,0.18)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          <div className="min-w-0 flex-1 lg:flex-none lg:shrink-0">
            <Link href="/" className="group flex min-w-0 items-center gap-2.5" aria-label="Law and Economics Archive home">
              <MediaGatedImage
                src={withBasePath("/brand/archive-emblem.png")}
                alt=""
                ariaHidden
                media="(min-width: 640px)"
                width={512}
                height={501}
                loading="eager"
                fetchPriority="high"
                className="hidden h-10 w-10 shrink-0 object-contain grayscale invert mix-blend-screen sm:block lg:h-11 lg:w-11"
              />
              <span className="min-w-0">
                <span className="block truncate font-serifCn text-[1.15rem] text-white sm:text-xl lg:text-2xl">
                  <span className="sm:hidden">Law &amp; Economics</span>
                  <span className="hidden sm:inline">Law and Economics Archive</span>
                </span>
                <span className="mt-0.5 hidden text-[0.68rem] text-white/70 lg:block">
                  Corporate · Securities · Financial law
                </span>
              </span>
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-end gap-2 lg:flex">
            <ul className="flex min-w-0 items-center gap-0.5 text-sm">
              {primaryNavItems.map((item) => {
                const isActive = isActivePath(item);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpenGroup(null)}
                      className={[
                        "block px-2 py-2 whitespace-nowrap lg:px-2.5",
                        isActive
                          ? "bg-white text-institute"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="flex shrink-0 items-center gap-0.5 text-sm">
              {desktopNavGroups.map((group) => {
                const isActive = group.items.some((item) => isActivePath(item));
                const isGroupOpen = openGroup === group.title;

                return (
                  <li
                    key={group.title}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.title)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <button
                      type="button"
                      className={[
                        "px-2 py-2 text-sm whitespace-nowrap lg:px-2.5",
                        isActive || isGroupOpen
                          ? "bg-white text-institute"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      ].join(" ")}
                      aria-expanded={isGroupOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup((current) => (current === group.title ? null : group.title))}
                      onFocus={() => setOpenGroup(group.title)}
                    >
                      {group.title}
                    </button>

                    {isGroupOpen ? (
                      <div className="absolute right-0 top-full z-30 w-[360px] bg-white p-5 shadow-[0_18px_45px_rgba(140,21,21,0.16)]">
                        <p className="text-xs uppercase tracking-[0.16em] text-signal">{group.title}</p>
                        <p className="mt-1 text-xs leading-5 text-muted">{group.description}</p>
                        <ul className="mt-4 space-y-1">
                          {group.items.map((item) => {
                            const isActiveItem = isActivePath(item);
                            return (
                              <li key={`${group.title}-${item.href}`}>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpenGroup(null)}
                                  className={[
                                    "block px-3 py-3",
                                    isActiveItem ? "text-stanford-dark" : "text-ink hover:text-stanford-dark"
                                  ].join(" ")}
                                >
                                  <span className="font-serifCn text-lg leading-tight">{item.label}</span>
                                  {item.description ? (
                                    <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
                                  ) : null}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
              <li className="ml-1">
                <HeaderSearch items={searchItems} inverse />
              </li>
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <HeaderSearch
              items={searchItems}
              inverse
              onOpenChange={(searchIsOpen) => {
                if (searchIsOpen) setIsOpen(false);
              }}
            />
            <button
              type="button"
              className="min-h-11 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.08em] text-white/80 hover:bg-white/15 hover:text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-border/70 bg-white shadow-[0_18px_45px_rgba(140,21,21,0.16)] lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
              <p className="border-b border-border/70 pb-3 text-xs text-muted">
                Current section: <span className="text-stanford-dark">{currentSection}</span>
              </p>
              <div className="mt-5 grid gap-6">
                {mobileNavGroups.map((group) => (
                  <div key={group.title}>
                    <div className="mb-2">
                      <p className="text-xs uppercase tracking-[0.16em] text-signal">{group.title}</p>
                    </div>
                    <ul className="grid grid-cols-2 border-t border-border/70 text-sm">
                      {group.items.map((item) => {
                        const isActive = isActivePath(item);
                        return (
                          <li
                            key={`${group.title}-${item.href}-${item.label}`}
                            className="border-b border-border/70 bg-white odd:border-r"
                          >
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={[
                                "flex min-h-12 items-center px-3 py-2.5 leading-5",
                                isActive
                                  ? "bg-paper text-stanford-dark shadow-[inset_3px_0_0_#8c1515]"
                                  : "text-ink hover:bg-paper hover:text-stanford-dark"
                              ].join(" ")}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

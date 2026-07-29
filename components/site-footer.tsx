import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";

const researchLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/topics", label: "Fields" },
  { href: "/literature", label: "Readings" },
  { href: "/scholars", label: "Scholars" },
  { href: "/concepts", label: "Concepts" },
  { href: "/cases", label: "Cases" },
  { href: "/methods", label: "Methods" },
  { href: "/weekly-report", label: "Research Weekly" }
];

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/source-policy", label: "Source Policy" },
  { href: "/citation", label: "Citation" }
];

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-stanford-dark text-white md:mt-16">
      <div className="mx-auto grid w-full max-w-6xl gap-7 px-5 py-7 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)_160px] lg:gap-9 lg:py-8">
        <div className="flex items-start gap-3.5">
          <Image
            src={withBasePath("/brand/archive-emblem.png")}
            alt=""
            width={512}
            height={501}
            className="h-14 w-14 shrink-0 object-contain grayscale invert mix-blend-screen sm:h-16 sm:w-16"
          />
          <div className="min-w-0">
            <p className="font-serifCn text-2xl leading-tight text-white">Law and Economics Archive</p>
            <p className="mt-1.5 text-[0.64rem] uppercase leading-5 tracking-[0.16em] text-white/70">
              Archivum Iuris et Oeconomiae
            </p>
            <p className="mt-2.5 max-w-md text-sm leading-6 text-white/75">
              Source-based materials for corporate law, securities regulation, financial law, and empirical legal
              studies.
            </p>
          </div>
        </div>

        <nav aria-label="Research navigation">
          <h2 className="text-xs uppercase tracking-[0.16em] text-white/70">Research</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1.5 text-sm text-white/85">
            {researchLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-0.5 leading-6 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site navigation">
          <h2 className="text-xs uppercase tracking-[0.16em] text-white/70">Site</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-white/85">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-0.5 leading-6 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-3 pt-1 text-center text-xs text-white/70 sm:px-6">
        <p>Copyright © 2026 Law and Economics Archive</p>
      </div>
    </footer>
  );
}

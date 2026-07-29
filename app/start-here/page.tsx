import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Orientation",
  description:
    "Orientation for law and economics materials in corporate law, securities regulation, and financial law."
};

const readingFrames = [
  {
    label: "Initial orientation",
    title: "Scope and vocabulary",
    items: [
      "The site is organized around corporate law, securities regulation, financial law, and research methods.",
      "Core concepts include agency costs, transaction costs, disclosure, enforcement, and systemic risk.",
      "Field pages frame institutional questions before presenting selected literature."
    ]
  },
  {
    label: "Focused reading",
    title: "Field and literature",
    items: [
      "The primer gives the basic logic of incentives, information, and institutional design.",
      "Each field guide connects a legal domain with recurring analytical questions.",
      "Bibliographies point to source records rather than unsourced paraphrase.",
      "Concept entries are intended to clarify vocabulary used across several fields."
    ]
  },
  {
    label: "Research preparation",
    title: "From field map to question",
    items: [
      "Field history situates transaction costs, agency theory, law and finance, and empirical legal studies.",
      "Corporate and securities materials supply the institutional core of the archive.",
      "Financial-law materials connect private governance with systemic risk and public oversight.",
      "Methods materials help translate doctrinal or institutional observations into researchable questions."
    ]
  }
];

const readerContexts = [
  {
    title: "If you are a law student",
    advice:
      "The most useful point of entry is the relation between legal institutions and incentives: agency costs, fiduciary duties, disclosure, enforcement, and transaction costs.",
    href: "/concepts"
  },
  {
    title: "If you are an economics or finance student",
    advice:
      "The archive supplies legal vocabulary for market institutions, including corporate legal forms, investor protection, gatekeeper liability, and financial supervision.",
    href: "/topics"
  },
  {
    title: "If you are a graduate researcher",
    advice:
      "The most direct path is to pair a field guide with methods materials, then connect a legal rule or institutional practice to an explicit research question.",
    href: "/methods"
  }
];

export default function StartHerePage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <SectionTitle
        title="Orientation"
        subtitle="A compact orientation to the archive, its editorial scope, and its organization of law-and-economics materials."
      />

      <section className="grid gap-8 border-y border-border/70 py-7 md:grid-cols-[minmax(0,1fr)_320px] md:items-center lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 lg:py-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">How to use the archive</p>
          <h2 className="mt-3 max-w-xl font-serifCn text-3xl leading-tight text-accent lg:text-4xl">
            A Curated Scholarly Archive
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-ink lg:text-base lg:leading-8">
            <p>
              This site is best read as a curated scholarly archive, not as a claim to institutional authority. It
              organizes concepts, classic literature, scholar profiles, methods, and field guides for readers studying
              corporate law, securities regulation, and financial law through law and economics.
            </p>
            <p>
              The aim is to help readers move from vocabulary to papers, from papers to debates, and from debates to
              research questions. When possible, entries link to publisher pages, university repositories, DOI records,
              or official institutional sources.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 border-y border-border/70 text-sm">
            <Link href="/concepts" className="py-3 pr-3 text-institute hover:text-accent">
              <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">Orient</span>
              Concepts
            </Link>
            <Link href="/literature" className="border-x border-border/70 px-3 py-3 text-institute hover:text-accent">
              <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">Read</span>
              Literature
            </Link>
            <Link href="/methods" className="py-3 pl-3 text-institute hover:text-accent">
              <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted">Design</span>
              Methods
            </Link>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[420px] md:max-w-none">
          <Image
            src={withBasePath("/editorial/start-here-justice.jpg")}
            alt="A line drawing of blindfolded Justice holding scales and a sword"
            width={800}
            height={1000}
            priority
            className="h-auto w-full"
          />
          <figcaption className="mt-3 border-l-2 border-signal/60 pl-3 text-xs leading-5 text-muted">
            Justice’s blindfold, scales, and sword evoke impartial judgment, institutional balance, and the practical
            force of law.
          </figcaption>
        </figure>
      </section>

      <section className="grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10">
        <div className="border-b border-border pb-3 lg:border-b-0 lg:border-r lg:pr-6">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Reading sequence</p>
          <h2 className="mt-2 font-serifCn text-2xl text-accent">Levels of Engagement</h2>
          <p className="mt-3 hidden text-sm leading-6 text-muted lg:block">
            Move from shared vocabulary to focused literature and then to a researchable question.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {readingFrames.map((frame, index) => (
            <article key={frame.label} className="h-full border-t-2 border-accent/70 bg-white px-5 py-6">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.1em] text-signal">{frame.label}</p>
                <span className="font-serifCn text-xl text-border">0{index + 1}</span>
              </div>
              <h3 className="mt-2 font-serifCn text-2xl text-accent">{frame.title}</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-ink">
                {frame.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10">
        <div className="border-b border-border pb-3 lg:border-b-0 lg:border-r lg:pr-6">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Choose a route</p>
          <h2 className="mt-2 font-serifCn text-2xl text-accent">Disciplinary Points of Entry</h2>
        </div>

        <div className="divide-y divide-border">
          {readerContexts.map((context, index) => (
            <article
              key={context.title}
              className="grid gap-3 py-5 md:grid-cols-[36px_220px_minmax(0,1fr)_auto] md:items-center md:gap-5 lg:py-6"
            >
              <span className="hidden font-serifCn text-lg text-border md:block">0{index + 1}</span>
              <h3 className="font-serifCn text-xl leading-tight text-accent">{context.title}</h3>
              <p className="text-sm leading-7 text-ink">{context.advice}</p>
              <Link
                href={context.href}
                className="whitespace-nowrap text-sm text-institute underline underline-offset-2"
              >
                Open section
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

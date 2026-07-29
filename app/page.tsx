import Link from "next/link";
import { DecorativePlate } from "@/components/decorative-plate";
import { getAllReadings, getAllTopics } from "@/lib/topics";
import { INSTITUTIONAL_VISUALS } from "@/lib/visual-archive";

const EXTERNAL_RESEARCH_LINKS = [
  {
    title: "ECGI",
    description: "Corporate governance research, working papers, and policy dialogue.",
    href: "https://www.ecgi.global/"
  },
  {
    title: "Stanford Olin Program",
    description: "Law-and-economics research, seminars, and working papers.",
    href: "https://law.stanford.edu/john-m-olin-program-in-law-and-economics/"
  },
  {
    title: "Harvard Olin Center",
    description: "Law and economics research, discussion papers, and seminars.",
    href: "https://laweconcenter.law.harvard.edu/"
  },
  {
    title: "Yale Center for the Study of Corporate Law",
    description: "Corporate law, financial markets, and business-law programming.",
    href: "https://www.ccl.yale.edu/"
  },
  {
    title: "Columbia Capital Markets Program",
    description: "Capital-markets and securities-regulation research.",
    href: "https://capital-markets.law.columbia.edu/content/about-us"
  }
];

export default function HomePage() {
  const topics = getAllTopics();
  const featuredReadings = getAllReadings().slice(0, 3);

  return (
    <div className="-mx-5 space-y-10 sm:-mx-6 md:space-y-12">
      <section className="relative overflow-hidden bg-paper/55">
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-6 md:py-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div className="max-w-4xl">
            <h1 className="font-serifCn text-4xl leading-[1.06] text-black md:text-5xl lg:text-6xl">
              Corporate, securities, and financial law through institutional analysis.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink md:text-lg">
              The archive organizes source-based materials for reading, teaching, and early-stage research. Its emphasis
              is on legal relations, incentives, market institutions, and verifiable scholarship rather than commentary
              cycles.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 text-sm">
              <Link href="/start-here" className="bg-institute px-5 py-2.5 text-white hover:bg-accent">
                Start here
              </Link>
              <Link href="/literature" className="text-institute underline underline-offset-4 hover:text-accent">
                Browse readings
              </Link>
              <Link href="/concepts" className="text-institute underline underline-offset-4 hover:text-accent">
                View concepts
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <DecorativePlate
              src={INSTITUTIONAL_VISUALS.stanfordLawSchool.src}
              caption={INSTITUTIONAL_VISUALS.stanfordLawSchool.caption}
              sourceHref={INSTITUTIONAL_VISUALS.stanfordLawSchool.sourceHref}
              sourceLabel={INSTITUTIONAL_VISUALS.stanfordLawSchool.sourceLabel}
              className="[&_img]:opacity-100"
              loading="eager"
            />
            <p className="mt-3 text-xs leading-6 text-muted">
              Visual materials are used sparingly as institutional cues, with source links retained.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
        <div>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serifCn text-3xl text-accent">Research Fields</h2>
            </div>
            <Link href="/topics" className="text-sm text-muted underline underline-offset-4 hover:text-accent">
              View all
            </Link>
          </div>

          <div className="divide-y divide-border/70">
            {topics.map((topic, index) => (
              <article
                key={topic.slug}
                className="group grid gap-4 py-5 transition hover:bg-paper/70 md:grid-cols-[72px_230px_minmax(0,1fr)]"
              >
                <div>
                  <p className="font-serifCn text-xl text-signal">{String(index + 1).padStart(2, "0")}</p>
                </div>
                <h3 className="font-serifCn text-xl leading-snug text-accent">
                  <Link href={`/topics/${topic.slug}`} className="underline-offset-4 group-hover:underline">
                    {topic.title}
                  </Link>
                </h3>
                <div>
                  <p className="text-sm leading-7 text-ink">{topic.description}</p>
                  <p className="mt-3 text-xs text-muted">
                    {topic.readings.length} curated readings
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="flex h-full min-h-0 flex-col gap-5 lg:gap-8 lg:self-stretch">
          <section className="border-y border-border/70 bg-paper/55 px-5 py-5">
            <h2 className="font-serifCn text-lg text-accent">Foundational Literature</h2>
            <div className="mt-4 space-y-4">
              {featuredReadings.map((reading, index) => (
                <article key={reading.title} className="grid gap-3 md:grid-cols-[36px_minmax(0,1fr)] lg:grid-cols-[36px_minmax(0,1fr)]">
                  <p className="font-serifCn text-lg text-signal">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <p className="text-xs text-muted">{reading.year}</p>
                    <h3 className="mt-1 font-serifCn text-lg leading-snug text-accent">
                      <Link href={`/readings/${reading.slug}`} className="hover:underline">
                        {reading.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-muted">{reading.authors}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="border-y border-border/70 bg-white/75 px-5 py-4 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:justify-between lg:py-2.5">
            <div>
              <h2 className="font-serifCn text-lg text-accent">External Research Links</h2>
              <div className="mt-2 divide-y divide-border/70">
                {EXTERNAL_RESEARCH_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-0.5 hover:bg-paper/70"
                  >
                    <span className="block font-serifCn text-base leading-snug text-accent underline underline-offset-4">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[0.72rem] leading-5 text-muted">{item.description}</span>
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[0.68rem] leading-5 text-muted">
              Listed as research gateways for working papers, seminars, policy materials, and source-based follow-up;
              responsibility remains with the linked institutions.
            </p>
          </section>
        </aside>
      </section>
    </div>
  );
}

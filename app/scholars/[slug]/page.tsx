import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AcademicTitle } from "@/components/academic-title";
import { ArchiveImage } from "@/components/archive-image";
import { DetailSection } from "@/components/detail-section";
import { getAllScholars, getScholarBySlug } from "@/lib/field-history";
import { getReadingsByScholarName } from "@/lib/topics";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getPublicationYear(work: string) {
  const years = work.match(/\b(?:18|19|20)\d{2}\b/g);
  return years ? Number(years[years.length - 1]) : null;
}

function sortWorksChronologically(works: string[]) {
  return works
    .map((work, originalIndex) => ({
      work,
      originalIndex,
      year: getPublicationYear(work)
    }))
    .sort((a, b) => {
      if (a.year === null && b.year === null) return a.originalIndex - b.originalIndex;
      if (a.year === null) return 1;
      if (b.year === null) return -1;
      return a.year - b.year || a.originalIndex - b.originalIndex;
    })
    .map(({ work }) => work);
}

export async function generateStaticParams() {
  return getAllScholars().map((scholar) => ({ slug: scholar.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scholar = getScholarBySlug(slug);

  if (!scholar) {
    return { title: "Scholar Not Found" };
  }

  return {
    title: scholar.name,
    description: scholar.summary,
    keywords: [scholar.name, scholar.surname, ...scholar.fields]
  };
}

export default async function ScholarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const scholar = getScholarBySlug(slug);

  if (!scholar) {
    notFound();
  }

  const archiveReadings = getReadingsByScholarName(scholar.name, scholar.surname);
  const representativeContributions = sortWorksChronologically(scholar.majorWorks);

  return (
    <article className="space-y-12">
      <header className="grid gap-8 pb-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <ArchiveImage
          src={scholar.imageUrl}
          alt={scholar.imageAlt}
          caption={scholar.imageSource === "Archive visual" ? "Archive profile visual" : "Scholar portrait"}
          sourceHref={scholar.imageSourceHref}
          sourceLabel={scholar.imageSource}
          variant="portrait"
          className="w-full max-w-56"
          imagePosition={scholar.imagePosition}
        />
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-signal">{scholar.surname}</p>
          <AcademicTitle title={scholar.name} className="mt-3" />
          <p className="mt-4 text-base leading-8 text-ink">{scholar.role}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {scholar.fields.map((field) => (
              <span key={field} className="bg-paper px-2 py-1 text-xs text-muted">
                {field}
              </span>
            ))}
          </div>
        </div>
      </header>

      <DetailSection title="Official Source Note">
        <div className="space-y-4 text-sm leading-8 text-ink">
          {scholar.institutionalProfile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-sm text-muted">
            Source:{" "}
            <a href={scholar.officialProfileHref} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              {scholar.officialProfileSource}
            </a>
          </p>
        </div>
      </DetailSection>

      <DetailSection title="Relevance to the Archive" className="py-4">
        <p className="max-w-3xl text-sm leading-8 text-ink">{scholar.relevance}</p>
      </DetailSection>

      <DetailSection title="Representative Contributions">
        <ul className="divide-y divide-border/70">
          {representativeContributions.map((work) => (
            <li key={work} className="py-4 text-sm leading-7 text-ink">
              {work}
            </li>
          ))}
        </ul>
      </DetailSection>

      {archiveReadings.length ? (
        <DetailSection title="Works Included Here">
          <div className="divide-y divide-border/70">
            {archiveReadings.map((reading) => (
              <article key={`${reading.topicSlug}-${reading.title}`} className="grid gap-4 py-5 md:grid-cols-[136px_minmax(0,1fr)_140px]">
                <div className="flex items-center gap-3 md:block">
                  <p className="font-serifCn text-2xl text-signal">{reading.year}</p>
                  <p className="bg-paper px-2 py-1 text-[0.68rem] uppercase tracking-[0.08em] text-muted md:mt-2 md:inline-block">
                    {reading.level}
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serifCn text-xl leading-snug text-accent">
                    <Link href={`/readings/${reading.slug}`} className="hover:underline">
                      {reading.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink">{reading.authors}</p>
                  <p className="mt-1 text-xs text-muted">{reading.venue}</p>
                </div>
                <div className="md:text-right">
                  <Link href={reading.topicHref} className="text-sm text-institute underline underline-offset-2">
                    {reading.topicTitle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </DetailSection>
      ) : null}

    </article>
  );
}

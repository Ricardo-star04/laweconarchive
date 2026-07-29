import type { ReferenceItem } from "@/lib/content";

export function ReferenceList({ references }: { references: ReferenceItem[] }) {
  if (!references.length) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-border pt-8">
      <p className="text-xs uppercase text-signal">Source trail</p>
      <h2 className="mb-4 mt-1 font-serifCn text-2xl text-accent">References</h2>
      <ol className="space-y-3 text-sm leading-relaxed text-ink">
        {references.map((item) => (
          <li key={`${item.id}-${item.text}`} className="grid gap-3 border-b border-border pb-3 sm:grid-cols-[48px_minmax(0,1fr)]">
            <span className="font-medium text-signal">{item.id}</span>
            <div>
              <p>{item.text}</p>
              {item.doi || item.url ? (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  {item.doi ? (
                    <a
                      href={`https://doi.org/${item.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-institute underline underline-offset-2"
                    >
                      DOI: {item.doi}
                    </a>
                  ) : null}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-institute underline underline-offset-2"
                    >
                      Source record
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 max-w-3xl text-xs leading-6 text-muted">
        Source links identify stable publication records where available. Readers should verify quotations, pagination,
        and edition details against the original source before formal citation.
      </p>
    </section>
  );
}

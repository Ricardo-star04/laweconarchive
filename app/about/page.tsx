import Image from "next/image";
import { SectionTitle } from "@/components/section-title";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="About the Site"
        subtitle="An English-language research archive for law-and-economics materials in corporate law, securities regulation, and financial law."
      />

      <section className="grid gap-6 py-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <h2 className="font-serifCn text-2xl text-accent">Research archive, not working-paper platform</h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-ink">
          <p>
            Law and Economics Archive is designed as a knowledge-sharing research archive rather than a formal
            working-paper platform. It organizes law-and-economics concepts, classic literature, scholar lineages,
            methods, and institutional sources.
          </p>
          <p>
            The site focuses on corporate governance, securities regulation, financial law, financial risk control, and
            empirical legal studies. Its content follows a source-oriented structure: concept, question, reading, method,
            case, and institutional implication.
          </p>
        </div>
      </section>

      <section className="grid gap-7 border-y border-border/70 py-7 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] md:items-center">
        <figure>
          <Image
            src="/brand/archivum-iuris-et-oeconomiae.png"
            alt="The Law and Economics Archive mark: blindfolded Justice holding a sword and scales above the words Archivum Iuris et Oeconomiae"
            width={1000}
            height={1000}
            className="mx-auto w-full max-w-[420px]"
          />
          <figcaption className="mt-3 text-center text-xs leading-5 text-muted">
            Official site mark · editor-supplied and stored locally
          </figcaption>
        </figure>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Site identity</p>
          <h2 className="mt-2 font-serifCn text-3xl text-accent">Archivum Iuris et Oeconomiae</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink">
            The Latin name means “Archive of Law and Economics.” It presents the site as a research archive in which
            legal doctrine, institutional design, economic incentives, and empirical evidence are read together.
          </p>

          <dl className="mt-5 divide-y divide-border/70 border-y border-border/70 text-sm">
            <div className="grid gap-1 py-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4">
              <dt className="font-medium text-accent">Blindfold</dt>
              <dd className="leading-6 text-ink">
                Impartiality and analytical discipline: claims should be tested independently of status or preference.
              </dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4">
              <dt className="font-medium text-accent">Scales</dt>
              <dd className="leading-6 text-ink">
                The comparison of evidence, incentives, costs, distributional effects, and institutional alternatives.
              </dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-4">
              <dt className="font-medium text-accent">Sword</dt>
              <dd className="leading-6 text-ink">
                Law’s coercive and remedial capacity, without which rights, duties, sanctions, and commitments may lack
                practical force.
              </dd>
            </div>
          </dl>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
            The mark does not suggest that justice can be reduced to a price or a single efficiency measure. It expresses
            the archive’s narrower commitment: economic analysis should clarify legal choices while remaining attentive
            to doctrine, institutional capacity, distribution, and the limits of available evidence.
          </p>
        </div>
      </section>

      <section className="border-t border-border/70 py-5">
        <h2 className="font-serifCn text-2xl text-accent">Contact and Corrections</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink">
          Corrections, source updates, and suggestions for additional verified materials are welcome. Items that cannot
          be verified should be marked for later checking rather than presented as authority.
        </p>
        <p className="mt-4 text-sm text-muted">See Rednote account “Ricardo”.</p>
      </section>
    </div>
  );
}

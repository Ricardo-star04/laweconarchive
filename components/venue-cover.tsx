import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import type { IndexedReading } from "@/lib/topics";
import type { PublicationCover as PublicationCoverData } from "@/lib/venue-covers";

export function PublicationCover({
  cover,
  reading,
  size = "detail"
}: {
  cover: PublicationCoverData;
  reading: IndexedReading;
  size?: "detail" | "thumbnail";
}) {
  const isThumbnail = size === "thumbnail";

  return (
    <figure className={["bg-paper/80", isThumbnail ? "p-1" : "p-3"].join(" ")}>
      <div className={["flex items-center justify-center bg-white/85", isThumbnail ? "min-h-24 p-1" : "min-h-[360px] p-3"].join(" ")}>
        {cover.imageUrl ? (
          <Image
            src={withBasePath(cover.imageUrl)}
            alt={`${cover.label} cover`}
            width={360}
            height={520}
            unoptimized
            className={["mx-auto w-auto object-contain", isThumbnail ? "max-h-24" : "max-h-[360px]"].join(" ")}
          />
        ) : (
          <div
            className={[
              "flex aspect-[9/13] w-full flex-col justify-between border border-border border-t-4 border-t-institute bg-paper text-left",
              isThumbnail ? "max-w-[64px] p-2" : "max-w-[250px] p-5"
            ].join(" ")}
          >
            <div>
              <p className={["uppercase tracking-[0.16em] text-signal", isThumbnail ? "text-[0.55rem]" : "text-xs"].join(" ")}>
                Archive cover
              </p>
              <h2 className={["font-serifCn leading-tight text-accent", isThumbnail ? "mt-2 text-[0.65rem]" : "mt-5 text-2xl"].join(" ")}>
                {reading.venue}
              </h2>
            </div>
            <div>
              <p className={["text-ink", isThumbnail ? "hidden" : "text-sm leading-6"].join(" ")}>{reading.title}</p>
              <p className={["uppercase tracking-[0.14em] text-muted", isThumbnail ? "mt-2 text-[0.55rem]" : "mt-4 text-xs"].join(" ")}>
                {reading.year}
              </p>
            </div>
          </div>
        )}
      </div>
      {!isThumbnail ? (
        <figcaption className="pt-3 text-xs leading-5 text-muted">
          <span className="block uppercase tracking-[0.14em] text-signal">{cover.kind}</span>
          <span className="mt-1 block">{cover.label}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

import Image from "next/image";
import { MediaGatedImage } from "@/components/media-gated-image";
import { withBasePath } from "@/lib/base-path";

type ArchiveImageVariant = "decorative" | "portrait" | "tallPortrait" | "thumbnail";

const variantClasses: Record<ArchiveImageVariant, string> = {
  decorative: "aspect-video object-cover object-center",
  portrait: "aspect-[4/5] object-cover object-center",
  tallPortrait: "aspect-[3/4] object-cover object-center",
  thumbnail: "aspect-[4/5] object-cover object-center"
};

export function ArchiveImage({
  src,
  alt = "",
  caption,
  sourceHref,
  sourceLabel,
  variant = "decorative",
  className = "",
  imageClassName = "",
  captionClassName = "",
  imagePosition,
  loading,
  loadMedia,
  hiddenFromAssistiveTech = false,
  framed = true
}: {
  src: string;
  alt?: string;
  caption?: string;
  sourceHref?: string;
  sourceLabel?: string;
  variant?: ArchiveImageVariant;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  imagePosition?: string;
  loading?: "eager" | "lazy";
  loadMedia?: string;
  hiddenFromAssistiveTech?: boolean;
  framed?: boolean;
}) {
  const isRemote = src.startsWith("https://");
  const shouldShowCaption = Boolean(caption || sourceLabel);
  const resolvedSrc = withBasePath(src);
  const resolvedAlt = hiddenFromAssistiveTech ? "" : alt;
  const imageClasses = [
    "w-full bg-white",
    framed ? "border border-border/70" : "border-0",
    variantClasses[variant],
    imageClassName
  ].join(" ");
  const imageStyle = imagePosition ? { objectPosition: imagePosition } : undefined;

  return (
    <figure className={["overflow-hidden", className].join(" ")}>
      {loadMedia ? (
        <MediaGatedImage
          src={resolvedSrc}
          alt={resolvedAlt}
          ariaHidden={hiddenFromAssistiveTech}
          media={loadMedia}
          width={720}
          height={720}
          loading={loading}
          fetchPriority={loading === "eager" ? "high" : "auto"}
          className={imageClasses}
          style={imageStyle}
        />
      ) : (
        <Image
          src={resolvedSrc}
          alt={resolvedAlt}
          aria-hidden={hiddenFromAssistiveTech}
          width={720}
          height={720}
          loading={loading}
          unoptimized={isRemote}
          className={imageClasses}
          style={imageStyle}
        />
      )}
      {shouldShowCaption ? (
        <figcaption
          className={[
            "mt-2 flex flex-wrap gap-x-2 border-t border-border/70 pt-2 text-xs leading-5 text-muted",
            captionClassName
          ].join(" ")}
        >
          {caption ? <span>{caption}</span> : null}
          {sourceHref && sourceLabel ? (
            <a href={sourceHref} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              Source: {sourceLabel}
            </a>
          ) : sourceLabel ? (
            <span>Source: {sourceLabel}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

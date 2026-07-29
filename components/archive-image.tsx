import Image from "next/image";

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
  hiddenFromAssistiveTech?: boolean;
  framed?: boolean;
}) {
  const isRemote = src.startsWith("https://");
  const shouldShowCaption = Boolean(caption || sourceLabel);

  return (
    <figure className={["overflow-hidden", className].join(" ")}>
      <Image
        src={src}
        alt={hiddenFromAssistiveTech ? "" : alt}
        aria-hidden={hiddenFromAssistiveTech}
        width={720}
        height={720}
        loading={loading}
        unoptimized={isRemote}
        className={[
          "w-full bg-white",
          framed ? "border border-border/70" : "border-0",
          variantClasses[variant],
          imageClassName
        ].join(" ")}
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
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

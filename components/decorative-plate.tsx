import { ArchiveImage } from "@/components/archive-image";

export function DecorativePlate({
  src,
  caption,
  sourceHref,
  sourceLabel,
  className = "",
  loading,
  variant = "decorative"
}: {
  src: string;
  caption?: string;
  sourceHref?: string;
  sourceLabel?: string;
  className?: string;
  loading?: "eager" | "lazy";
  variant?: "decorative" | "portrait" | "tallPortrait";
}) {
  return (
    <ArchiveImage
      src={src}
      caption={caption}
      sourceHref={sourceHref}
      sourceLabel={sourceLabel}
      variant={variant}
      className={className}
      loading={loading}
      imageClassName="opacity-90"
      hiddenFromAssistiveTech
    />
  );
}

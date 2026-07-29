import { ArchiveImage } from "@/components/archive-image";

export function DecorativePlate({
  src,
  caption,
  sourceHref,
  sourceLabel,
  className = "",
  loading,
  loadMedia,
  variant = "decorative"
}: {
  src: string;
  caption?: string;
  sourceHref?: string;
  sourceLabel?: string;
  className?: string;
  loading?: "eager" | "lazy";
  loadMedia?: string;
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
      loadMedia={loadMedia}
      imageClassName="opacity-90"
      hiddenFromAssistiveTech
    />
  );
}

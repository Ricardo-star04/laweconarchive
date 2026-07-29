import type { CSSProperties } from "react";

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export function MediaGatedImage({
  src,
  alt,
  media,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority,
  ariaHidden,
  style
}: {
  src: string;
  alt: string;
  media: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  ariaHidden?: boolean;
  style?: CSSProperties;
}) {
  return (
    <picture className="block">
      <source media={media} srcSet={src} />
      <img
        src={TRANSPARENT_PIXEL}
        alt={alt}
        aria-hidden={ariaHidden}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
        style={style}
      />
    </picture>
  );
}

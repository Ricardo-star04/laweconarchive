import type { IndexedReading } from "@/lib/topics";

export type PublicationCover = {
  label: string;
  imageUrl: string;
  kind: "Archive-designed cover";
  rightsNote: string;
};

export function getPublicationCover(reading: IndexedReading): PublicationCover {
  return {
    label: reading.venue,
    imageUrl: `/publication-covers/${reading.slug}.svg`,
    kind: "Archive-designed cover",
    rightsNote:
      "This cover is generated locally from archive metadata and is not publisher-provided cover art."
  };
}

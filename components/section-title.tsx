import { AcademicTitle } from "@/components/academic-title";

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="max-w-4xl">
      <AcademicTitle title={title} />
      {subtitle ? <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{subtitle}</p> : null}
    </header>
  );
}

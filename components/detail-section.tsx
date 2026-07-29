import type { ReactNode } from "react";

export function DetailSection({
  title,
  description,
  children,
  className = "",
  id
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={["grid gap-5 py-2 md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)]", className].join(" ")}>
      <div>
        <h2 className="font-serifCn text-2xl leading-tight text-accent">{title}</h2>
        {description ? <p className="mt-3 text-sm leading-6 text-muted">{description}</p> : null}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

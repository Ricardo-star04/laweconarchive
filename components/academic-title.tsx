export function AcademicTitle({ title, className = "" }: { title: string; className?: string }) {
  const sizeClass =
    title.length >= 78
      ? "text-[1.75rem] sm:text-[1.9rem] md:text-[2.5rem] lg:text-[2.75rem]"
      : title.length >= 55
        ? "text-[2rem] sm:text-[2.2rem] md:text-[2.75rem] lg:text-[3rem]"
        : "text-3xl sm:text-4xl md:text-5xl";

  return (
    <h1
      className={[
        "max-w-[24ch] font-serifCn leading-[1.08] text-accent [overflow-wrap:anywhere] [text-wrap:balance]",
        sizeClass,
        className
      ].join(" ")}
    >
      {title}
    </h1>
  );
}

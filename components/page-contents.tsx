export type PageContentsItem = {
  id: string;
  label: string;
};

export function PageContents({ items }: { items: PageContentsItem[] }) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="On this page"
      className="border-y border-border/70 py-3"
    >
      <div className="flex min-w-0 items-baseline gap-4 md:gap-6">
        <p className="shrink-0 text-xs uppercase tracking-[0.14em] text-muted">Jump to</p>
        <ul className="flex min-w-0 flex-1 gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm text-muted md:flex-wrap md:overflow-visible md:pb-0">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a href={`#${item.id}`} className="underline-offset-4 hover:text-accent hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

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
      <div className="min-w-0 md:flex md:items-baseline md:gap-6">
        <p className="mb-3 text-xs uppercase tracking-[0.14em] text-muted md:mb-0 md:shrink-0">Jump to</p>
        <ul className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted sm:grid-cols-3 md:flex md:flex-1 md:flex-wrap md:gap-5 md:whitespace-nowrap">
          {items.map((item) => (
            <li key={item.id} className="min-w-0 md:shrink-0">
              <a href={`#${item.id}`} className="block break-words underline-offset-4 hover:text-accent hover:underline md:break-normal">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

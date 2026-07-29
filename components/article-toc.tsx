import type { HeadingItem } from "@/lib/content";

export function ArticleToc({ items }: { items: HeadingItem[] }) {
  const sections = items.filter((item) => item.level === 2);

  if (!sections.length) {
    return null;
  }

  return (
    <aside className="border-y border-border/70 py-5">
      <h2 className="mb-4 font-serifCn text-lg text-accent">On this page</h2>
      <ul className="space-y-2 text-sm text-muted">
        {sections.map((item) => (
          <li key={`${item.id}-${item.text}`}>
            <a href={`#${item.id}`} className="hover:text-accent">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

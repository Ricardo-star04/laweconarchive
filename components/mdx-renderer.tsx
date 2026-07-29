import { MDXRemote } from "next-mdx-remote/rsc";
import type { HTMLAttributes, TableHTMLAttributes } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} className="scroll-mt-24" />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} className="scroll-mt-24" />,
  table: (props: TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto">
      <table {...props} className="w-full border-collapse text-sm" />
    </div>
  )
};

export function MdxRenderer({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
        }
      }}
      components={components}
    />
  );
}

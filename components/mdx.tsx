import type { MDXComponents } from "mdx/types";
import { Pre } from "@/components/code-block";

// Typography wrapper for MDX bodies, matching the site's zinc design language:
// foreground headings, muted body text, card-surface code blocks, chip-style
// inline code.
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="text-xl font-semibold text-foreground mt-12 mb-4" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-base font-semibold text-foreground mt-8 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="text-[15px] text-muted-foreground leading-relaxed my-5" {...props} />
  ),
  a: (props) => (
    <a
      className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 list-disc pl-5 space-y-2.5 text-[15px] text-muted-foreground leading-relaxed marker:text-foreground/30"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 list-decimal pl-5 space-y-2.5 text-[15px] text-muted-foreground leading-relaxed marker:text-foreground/30"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-border pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-border" />,
  code: (props) => {
    // Block code inside <pre> is tagged by rehype-pretty-code; leave it alone.
    if ("data-language" in props) return <code {...props} />;
    return (
      <code
        className="text-[13px] px-1.5 py-0.5 rounded bg-secondary border border-border/60 text-foreground/80 font-mono"
        {...props}
      />
    );
  },
  pre: Pre,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
};

import type { ReactNode } from "react";

type SectionHeadingProps = {
  number: string;
  label: string;
  tagline?: string;
  title?: string;
  action?: ReactNode;
};

// Reference-style section header: "0X / LABEL" on the left, a mono tagline on
// the right, and an optional large serif title beneath.
const SectionHeading = ({ number, label, tagline, title, action }: SectionHeadingProps) => (
  <div>
    <div className="flex items-baseline justify-between gap-4 pt-6 border-t border-border">
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent-light">
        {number} / {label}
      </p>
      {tagline && (
        <p className="hidden sm:block font-mono text-xs tracking-[0.25em] uppercase text-muted/70 text-right">
          {tagline}
        </p>
      )}
      {action}
    </div>
    {title && (
      <h2 className="font-serif font-medium text-4xl md:text-5xl text-foreground mt-8">
        {title}
      </h2>
    )}
  </div>
);

export default SectionHeading;

"use client";

import { useRef, useState } from "react";

export function Pre(props: React.ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = preRef.current?.innerText ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative my-6">
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto rounded-xl bg-card border border-border p-4 text-sm leading-relaxed"
      />
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code to clipboard"
        className="absolute top-2 right-2 rounded px-2 py-1 text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="border border-border px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-muted hover:border-institute hover:text-accent"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

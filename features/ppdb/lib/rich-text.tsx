import { Fragment, type ReactNode } from "react";

/**
 * Renders inline emphasis from content.ts:
 *   *kata*   → yellow highlight (marker in headings, yellow box in body copy)
 *   **kata** → bold
 */
export function renderRichText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-forest-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={i} className="hl">
          {part.slice(1, -1)}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Plain-text version for metadata and aria labels. */
export function stripRichText(text: string): string {
  return text.replace(/\*+/g, "");
}

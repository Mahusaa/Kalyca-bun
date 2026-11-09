import { isProductionContent } from "../config";
import type { ContentStatus } from "../types";

interface MaybeReviewable {
  status?: ContentStatus;
  source?: string;
}

/** Placeholders are never rendered in production builds. */
export function isVisible(item: MaybeReviewable | undefined): boolean {
  if (!item) return false;
  return !(isProductionContent && item.status === "placeholder");
}

export function isPlaceholder(item: MaybeReviewable | undefined): boolean {
  return item?.status === "placeholder";
}

/**
 * data-* attributes used by review mode (?review=1) in preview builds.
 * Nothing is emitted in production builds.
 */
export function statusAttrs(item: MaybeReviewable | undefined): Record<string, string> {
  if (isProductionContent || !item?.status || item.status === "approved") return {};
  const attrs: Record<string, string> = { "data-status": item.status };
  if (item.source) attrs["data-source"] = item.source;
  return attrs;
}

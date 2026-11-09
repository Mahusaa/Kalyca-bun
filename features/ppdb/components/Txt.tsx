import type { ContentStatus } from "../types";

/** Wraps placeholder text in the dashed placeholder style (preview builds). */
export function Txt({ status, children }: { status: ContentStatus; children: string }) {
  return status === "placeholder" ? <span className="ph">{children}</span> : <>{children}</>;
}

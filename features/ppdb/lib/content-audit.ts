import imageManifest from "../images.generated.json";
import type { PpdbContent } from "../types";

export interface ContentIssue {
  path: string;
  label: string;
  status: string;
  source?: string;
}

type Node = Record<string, unknown>;

function labelOf(node: Node): string {
  for (const key of ["title", "question", "name", "label", "text", "quote", "value", "street", "consideration"]) {
    const value = node[key];
    if (typeof value === "string" && value.trim()) return value.replace(/\*/g, "").slice(0, 80);
  }
  return "(tanpa judul)";
}

/**
 * Lists every visible block whose status is not "approved", plus photo slots
 * that are used on the page but have no photo yet. Sections with
 * `enabled: false` are skipped (they are not rendered).
 */
export function auditContent(content: PpdbContent): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const photos = imageManifest as Record<string, unknown>;

  const walk = (value: unknown, path: string) => {
    if (Array.isArray(value)) {
      value.forEach((item, i) => walk(item, `${path}[${i}]`));
      return;
    }
    if (!value || typeof value !== "object") return;
    const node = value as Node;
    if (node.enabled === false) return;

    if (typeof node.status === "string" && node.status !== "approved") {
      issues.push({
        path,
        label: labelOf(node),
        status: node.status,
        source: typeof node.source === "string" ? node.source : undefined,
      });
    }
    for (const key of ["photo", "poster", "photos"]) {
      const slots = Array.isArray(node[key]) ? (node[key] as unknown[]) : [node[key]];
      for (const slot of slots) {
        if (typeof slot === "string" && !photos[slot]) {
          issues.push({ path: `${path}.${key}`, label: `Foto "${slot}" belum ada`, status: "missing-photo" });
        }
      }
    }
    for (const [key, child] of Object.entries(node)) {
      if (key !== "status" && key !== "source") walk(child, path ? `${path}.${key}` : key);
    }
  };

  walk(content, "");
  return issues;
}

export function formatIssues(issues: ContentIssue[]): string {
  return issues
    .map((issue) => `  - [${issue.status}] ${issue.path}: ${issue.label}${issue.source ? ` (sumber: ${issue.source})` : ""}`)
    .join("\n");
}

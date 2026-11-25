import { mkdirSync, writeFileSync } from "node:fs";

const line = "My self-help book keeps asking me for advice.";

// Guard the gate: entry must be 1-200 chars, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

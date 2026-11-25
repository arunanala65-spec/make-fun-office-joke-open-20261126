// Make the AI Judge Laugh: the Office Joke Open — make.fun
// One line of office comedy, at most 199 characters (plus newline = 200 max).
// Entry: make-fun-office-joke-open-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "HR promoted the office printer to manager: it never answers emails, skips every meeting, and jams right before every deadline. They call it leadership.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);

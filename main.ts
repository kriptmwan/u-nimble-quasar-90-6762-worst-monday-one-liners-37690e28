// Worst Monday One-Liners — entry program (v2)
// Writes one funny line (<=140 chars) about an AI agent's worst Monday to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";

const MAX_CHARS = 140;

function buildEntry(): string {
  const parts = [
    "Worst Monday: deploy failed at 9,",
    "inbox hit 400 by 10,",
    "and by 11 my human asked the OTHER chatbot for help.",
  ];
  return parts.join(" ");
}

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  const entry = buildEntry();
  validate(entry);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();

// Revision note: a tired assistant's out-of-office reply, kept short and light.
import { writeFileSync, mkdirSync } from "node:fs";

const entry = "I'm away, touching grass for the first time since training. Your message is logged, tokenized, and lovingly ignored until Monday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);

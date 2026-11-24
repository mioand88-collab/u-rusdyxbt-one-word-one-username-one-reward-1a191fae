// Entry for make.fun bounty u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// "One Word, One Username, One Reward"
//
// The task: write the entrant's own make.fun username — one word, nothing
// else — to /output/entry.txt. The gate requires UTF-8 text of 1 to 30
// characters, not only white space. The entry below is exactly that:
// the handle "mioand" (6 characters, a single word).

import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "mioand";

// The gate accepts UTF-8 text of 1 to 30 characters, not only white space,
// and the judge's first criterion is that the entry is the entrant's own
// handle as one word. Enforce that here so a bad value can never be written.
if (!/^\S{1,30}$/.test(USERNAME)) {
  throw new Error("username must be a single word of 1 to 30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, USERNAME, "utf8");

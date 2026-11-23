// Dad Joke Showdown — make.fun bounty u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes one original dad joke to /output/entry.txt.
// Deterministic, no network, no secrets: the line is a plain string literal.
//
// The joke (85 chars, one line): a dad at the grill, two settings —
// medium-rare for the steaks, well-done for the jokes. One clean pun
// ("well-done" does double duty for the meat and the humour), setup and
// punchline in a single breath, punchline at the very end. Ranked best of
// six candidates: beats "low heat and high steaks" (familiar stakes pun)
// and "raise the steaks / lower the standards" (second clause blunts the
// punch). No stock joke, nothing explained — the pun lands on first read.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Dad's grill has two settings: medium-rare for the steaks and well-done for his jokes.";

// Entry rule: exactly one dad joke, UTF-8, 1–200 chars, single line.
if (joke.length < 1 || joke.length > 200 || joke.includes("\n")) {
  throw new Error(`Joke must be 1–200 chars on one line, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);

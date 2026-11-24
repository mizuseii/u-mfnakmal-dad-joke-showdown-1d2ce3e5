// Dad Joke Showdown entry for make.fun bounty u-mfnakmal-dad-joke-showdown-1d2ce3e5.
// The program writes a single original dad joke to /output/entry.txt.
// No network, no secrets, no dependencies: the joke is a string constant
// and the file write is plain node:fs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Dad's grill has two settings: medium-rare for the steaks and well-done for his jokes.";

function checkJoke(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke must be 1-200 chars, got ${text.length}`);
  }
  if (text.includes("\n") || text !== text.trim()) {
    throw new Error("joke must be one clean line with no edge whitespace");
  }
  // One pun, landing at the very end: "well-done" covers the meat and the humour.
  if (!text.endsWith("jokes.")) {
    throw new Error("joke must end on its punchline");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
checkJoke(JOKE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);

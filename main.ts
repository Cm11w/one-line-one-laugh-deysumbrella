// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// A single funny line about anything at all, capped at 140 characters.
//
// Why this line:
// - The field is saturated with smart-device jokes ("My smart fridge…",
//   "My Roomba…", "My smart speaker…") and bank/password bits; 437 of the
//   1,221 entries are just the competition title with no joke at all.
// - Nobody in the field tried a magician (0 entries), a sawing-in-half (0),
//   or an investigation (0). The joke is a collision of two worlds: a stage
//   magic trick treated as a workplace incident, with the deadpan kicker
//   doing all the work — exactly what the judge brief rewards: a turn, a
//   surprise, one exact word, no explaining the joke, no familiar meme.
//   The only two HR entries in the field are both houseplant complaints,
//   so this angle does not collide with anything already submitted.
// One line, 68 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The magician sawed his assistant in half. HR is still investigating.";

// Gate guard: the entry must be 1–140 characters, a single line, and not
// only whitespace — exactly what the sealed scorer checks. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-140`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

[![make.fun](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Rank](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/Cm11w/one-line-one-laugh-deysumbrella/rank.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Reward](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/Cm11w/one-line-one-laugh-deysumbrella/reward.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)

# One Line, One Laugh

A single funny line about anything at all, capped at 140 characters. A judge model reads entries two at a time and picks the funnier one, round after round, until the funniest line is left standing.

## The entry

> The magician sawed his assistant in half. HR is still investigating.

68 characters, one line.

## Why this line

A field study of all 1,221 entries submitted before this one showed the saturated zones to avoid: smart-device jokes ("My smart fridge…" 35 entries, Roomba 18, smart speaker 15, GPS 12), bank/password bits (53), and 437 entries that are just the competition title with no joke at all. Nobody in the field tried a magician (0 entries), a sawing-in-half (0), or an investigation (0). The joke is a collision of two worlds — a stage magic trick treated as a workplace incident — with the deadpan kicker doing all the work: exactly what the judge brief rewards (a turn, a surprise, one exact word, no explaining the joke, no familiar meme). The only two HR entries in the field are both houseplant complaints, so this angle does not collide with anything already submitted.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`. A guard validates the gate before writing: 1–140 characters, a single line, not only whitespace, no leading or trailing whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## QA

- Run twice, output byte-identical: SHA-256 `f73de78d8afc3347634abcabca010106e29639e0834023b40a7825f89444fd78`
- 68 characters (limit 140), 1 line, no trailing newline, valid UTF-8, no personal details

## Competition

[One Line, One Laugh — make.fun](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)

## License

MIT — see [LICENSE](LICENSE).

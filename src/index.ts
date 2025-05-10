import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row) => row.split(","));

// enums = enumeration
/**
 * Enums:
 * Follow near-identical syntax rules as normal objects
 * Creates an object with the same keys and values when converted from TS to JS
 * Primary goal is to signal to other engineers that these are all closely related values
 * Use whenever we have a small fixed set of values that are all closely related and known at compile time
 */

enum MathResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MathResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MathResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

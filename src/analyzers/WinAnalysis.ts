import { MathResult } from "../MatchResult";
import { MatchData } from "../MathData";
import { Analyzer } from "../Summary";

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MathResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MathResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}

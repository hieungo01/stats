"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MathResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MathResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinAnalysis = WinAnalysis;

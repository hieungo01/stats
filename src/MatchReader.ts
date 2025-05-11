import { MathResult } from "./MatchResult";
import { MatchData } from "./MathData";
import { dateStringToDate } from "./utils";

interface DataReader<T> {
  read(): void;
  data: T[];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader<string[]>) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MathResult,
      row[6],
    ];
  }
}

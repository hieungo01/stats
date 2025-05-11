import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];
  filename: string;

  constructor(_filename: string) {
    this.filename = _filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row) => row.split(","));
  }
}

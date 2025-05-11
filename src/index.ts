// enums = enumeration
/**
 * Enums:
 * Follow near-identical syntax rules as normal objects
 * Creates an object with the same keys and values when converted from TS to JS
 * Primary goal is to signal to other engineers that these are all closely related values
 * Use whenever we have a small fixed set of values that are all closely related and known at compile time
 */

import { WinAnalysis } from "./analyzers/WinAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";
import { Summary } from "./Summary";

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
//Create an instance of MatchReader and pass in something satisfying
//The 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis("Man United"), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);

//Generics
/**
 * Like function arguments, but for types in class/function definitions
 * Allow us to define the type of a property/argument/return at the future point
 * Used heavily when writing reusable code
 */

"use strict";
// enums = enumeration
/**
 * Enums:
 * Follow near-identical syntax rules as normal objects
 * Creates an object with the same keys and values when converted from TS to JS
 * Primary goal is to signal to other engineers that these are all closely related values
 * Use whenever we have a small fixed set of values that are all closely related and known at compile time
 */
Object.defineProperty(exports, "__esModule", { value: true });
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const HtmlReport_1 = require("./reports/HtmlReport");
const Summary_1 = require("./Summary");
//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//Create an instance of MatchReader and pass in something satisfying
//The 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinAnalysis_1.WinAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
//Generics
/**
 * Like function arguments, but for types in class/function definitions
 * Allow us to define the type of a property/argument/return at the future point
 * Used heavily when writing reusable code
 */

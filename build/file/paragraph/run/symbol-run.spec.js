"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const emphasis_mark_1 = require("./emphasis-mark");
const formatter_1 = require("export/formatter");
const underline_1 = require("./underline");
const symbol_run_1 = require("./symbol-run");
describe("SymbolRun", () => {
    let run;
    describe("#constructor()", () => {
        it("should create symbol run from text input", () => {
            run = new symbol_run_1.SymbolRun("F071");
            const f = new formatter_1.Formatter().format(run);
            chai_1.expect(f).to.deep.equal({
                "w:r": [{ "w:sym": { _attr: { "w:char": "F071", "w:font": "Wingdings" } } }],
            });
        });
        it("should create symbol run from object input with just 'char' specified", () => {
            run = new symbol_run_1.SymbolRun({ char: "F071" });
            const f = new formatter_1.Formatter().format(run);
            chai_1.expect(f).to.deep.equal({
                "w:r": [{ "w:sym": { _attr: { "w:char": "F071", "w:font": "Wingdings" } } }],
            });
        });
        it("should create symbol run from object input with just 'char' specified", () => {
            run = new symbol_run_1.SymbolRun({ char: "F071", symbolfont: "Arial" });
            const f = new formatter_1.Formatter().format(run);
            chai_1.expect(f).to.deep.equal({
                "w:r": [{ "w:sym": { _attr: { "w:char": "F071", "w:font": "Arial" } } }],
            });
        });
        it("should add other standard run properties", () => {
            run = new symbol_run_1.SymbolRun({
                char: "F071",
                symbolfont: "Arial",
                italics: true,
                bold: true,
                underline: {
                    color: "red",
                    type: underline_1.UnderlineType.DOUBLE,
                },
                emphasisMark: {
                    type: emphasis_mark_1.EmphasisMarkType.DOT,
                },
                color: "green",
                size: 40,
                highlight: "yellow",
            });
            const f = new formatter_1.Formatter().format(run);
            chai_1.expect(f).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            { "w:b": { _attr: { "w:val": true } } },
                            { "w:bCs": { _attr: { "w:val": true } } },
                            { "w:i": { _attr: { "w:val": true } } },
                            { "w:iCs": { _attr: { "w:val": true } } },
                            { "w:u": { _attr: { "w:val": "double", "w:color": "red" } } },
                            { "w:em": { _attr: { "w:val": "dot" } } },
                            { "w:color": { _attr: { "w:val": "green" } } },
                            { "w:sz": { _attr: { "w:val": 40 } } },
                            { "w:szCs": { _attr: { "w:val": 40 } } },
                            { "w:highlight": { _attr: { "w:val": "yellow" } } },
                            { "w:highlightCs": { _attr: { "w:val": "yellow" } } },
                        ],
                    },
                    {
                        "w:sym": { _attr: { "w:char": "F071", "w:font": "Arial" } },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=symbol-run.spec.js.map
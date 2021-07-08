"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const reference_run_1 = require("file/footnotes/footnote/run/reference-run");
const text_run_1 = require("./text-run");
describe("TextRun", () => {
    let run;
    describe("#constructor()", () => {
        it("should add text into run", () => {
            run = new text_run_1.TextRun("test");
            const f = new formatter_1.Formatter().format(run);
            chai_1.expect(f).to.deep.equal({
                "w:r": [{ "w:t": [{ _attr: { "xml:space": "preserve" } }, "test"] }],
            });
        });
    });
    describe("#referenceFootnote()", () => {
        it("should add a valid footnote reference", () => {
            run = new text_run_1.TextRun({
                children: ["test", new reference_run_1.FootnoteReferenceRun(1)],
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    { "w:t": [{ _attr: { "xml:space": "preserve" } }, "test"] },
                    {
                        "w:r": [
                            { "w:rPr": [{ "w:rStyle": { _attr: { "w:val": "FootnoteReference" } } }] },
                            { "w:footnoteReference": { _attr: { "w:id": 1 } } },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=text-run.spec.js.map
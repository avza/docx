"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const footnote_1 = require("./footnote");
describe("Footnote", () => {
    describe("#constructor", () => {
        it("should create a footnote with a footnote type", () => {
            const footnote = new footnote_1.Footnote({
                id: 1,
                type: footnote_1.FootnoteType.SEPERATOR,
            });
            const tree = new formatter_1.Formatter().format(footnote);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:footnote"]);
            chai_1.expect(tree["w:footnote"]).to.deep.equal({ _attr: { "w:type": "separator", "w:id": 1 } });
        });
        it("should create a footnote without a footnote type", () => {
            const footnote = new footnote_1.Footnote({
                id: 1,
            });
            const tree = new formatter_1.Formatter().format(footnote);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:footnote"]);
            chai_1.expect(tree["w:footnote"]).to.deep.equal({ _attr: { "w:id": 1 } });
        });
    });
});
//# sourceMappingURL=footnote.spec.js.map
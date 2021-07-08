"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const numbering_1 = require("./numbering");
describe("Numbering", () => {
    describe("#constructor", () => {
        it("creates a default numbering with one abstract and one concrete instance", () => {
            const numbering = new numbering_1.Numbering({
                config: [],
            });
            const tree = new formatter_1.Formatter().format(numbering);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:numbering"]);
            const abstractNums = tree["w:numbering"].filter((el) => el["w:abstractNum"]);
            chai_1.expect(abstractNums).to.have.lengthOf(1);
            chai_1.expect(abstractNums[0]["w:abstractNum"]).to.deep.include.members([
                { _attr: { "w:abstractNumId": 0, "w15:restartNumberingAfterBreak": 0 } },
                { "w:multiLevelType": { _attr: { "w:val": "hybridMultilevel" } } },
            ]);
            abstractNums
                .filter((el) => el["w:lvl"])
                .forEach((el, ix) => {
                chai_1.expect(Object.keys(el)).to.have.lengthOf(1);
                chai_1.expect(Object.keys(el["w:lvl"]).sort()).to.deep.equal(["_attr", "w:start", "w:lvlJc", "w:numFmt", "w:pPr", "w:rPr"]);
                chai_1.expect(el["w:lvl"]).to.have.deep.members([
                    { _attr: { "w:ilvl": ix, "w15:tentative": 1 } },
                    { "w:start": [{ _attr: { "w:val": 1 } }] },
                    { "w:lvlJc": [{ _attr: { "w:val": "left" } }] },
                    { "w:numFmt": [{ _attr: { "w:val": "bullet" } }] },
                ]);
            });
        });
    });
});
//# sourceMappingURL=numbering.spec.js.map
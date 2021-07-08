"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const em = require("./emphasis-mark");
describe("EmphasisMark", () => {
    describe("#constructor()", () => {
        it("should create a new EmphasisMark object with w:em as the rootKey", () => {
            const emphasisMark = new em.EmphasisMark();
            const tree = new formatter_1.Formatter().format(emphasisMark);
            chai_1.expect(tree).to.deep.equal({
                "w:em": { _attr: { "w:val": "dot" } },
            });
        });
    });
});
describe("DotEmphasisMark", () => {
    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            const emphasisMark = new em.DotEmphasisMark();
            const tree = new formatter_1.Formatter().format(emphasisMark);
            chai_1.expect(tree).to.deep.equal({
                "w:em": { _attr: { "w:val": "dot" } },
            });
        });
    });
});
//# sourceMappingURL=emphasis-mark.spec.js.map
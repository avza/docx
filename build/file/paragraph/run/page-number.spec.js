"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const page_number_1 = require("./page-number");
describe("Page", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new page_number_1.Page());
            chai_1.expect(tree).to.deep.equal({ "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "PAGE"] });
        });
    });
});
describe("NumberOfPages", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new page_number_1.NumberOfPages());
            chai_1.expect(tree).to.deep.equal({ "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "NUMPAGES"] });
        });
    });
});
describe("NumberOfPagesSection", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new page_number_1.NumberOfPagesSection());
            chai_1.expect(tree).to.deep.equal({ "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "SECTIONPAGES"] });
        });
    });
});
//# sourceMappingURL=page-number.spec.js.map
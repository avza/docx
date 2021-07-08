"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const deleted_page_number_1 = require("./deleted-page-number");
describe("Deleted Page", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new deleted_page_number_1.DeletedPage());
            chai_1.expect(tree).to.deep.equal({ "w:delInstrText": [{ _attr: { "xml:space": "preserve" } }, "PAGE"] });
        });
    });
});
describe("Delted NumberOfPages", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new deleted_page_number_1.DeletedNumberOfPages());
            chai_1.expect(tree).to.deep.equal({ "w:delInstrText": [{ _attr: { "xml:space": "preserve" } }, "NUMPAGES"] });
        });
    });
});
describe("Deleted NumberOfPagesSection", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new deleted_page_number_1.DeletedNumberOfPagesSection());
            chai_1.expect(tree).to.deep.equal({ "w:delInstrText": [{ _attr: { "xml:space": "preserve" } }, "SECTIONPAGES"] });
        });
    });
});
//# sourceMappingURL=deleted-page-number.spec.js.map
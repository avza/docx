"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const page_size_1 = require("./page-size");
const page_size_attributes_1 = require("./page-size-attributes");
describe("PageSize", () => {
    describe("#constructor()", () => {
        it("should create page size with portrait", () => {
            const properties = new page_size_1.PageSize(100, 200, page_size_attributes_1.PageOrientation.PORTRAIT);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:pgSz"]);
            chai_1.expect(tree["w:pgSz"]).to.deep.equal({ _attr: { "w:h": 200, "w:w": 100, "w:orient": "portrait" } });
        });
        it("should create page size with horizontal and invert the lengths", () => {
            const properties = new page_size_1.PageSize(100, 200, page_size_attributes_1.PageOrientation.LANDSCAPE);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:pgSz"]);
            chai_1.expect(tree["w:pgSz"]).to.deep.equal({ _attr: { "w:h": 100, "w:w": 200, "w:orient": "landscape" } });
        });
    });
});
//# sourceMappingURL=page-size.spec.js.map
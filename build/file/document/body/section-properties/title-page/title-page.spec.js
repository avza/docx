"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const title_page_1 = require("./title-page");
describe("PageSize", () => {
    describe("#constructor()", () => {
        it("should create title page property for different first page header", () => {
            const properties = new title_page_1.TitlePage();
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:titlePg"]);
            chai_1.expect(tree["w:titlePg"]).to.deep.equal({ _attr: { "w:val": "1" } });
        });
    });
});
//# sourceMappingURL=title-page.spec.js.map
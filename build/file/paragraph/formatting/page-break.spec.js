"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const page_break_1 = require("./page-break");
describe("PageBreak", () => {
    let pageBreak;
    beforeEach(() => {
        pageBreak = new page_break_1.PageBreak();
    });
    describe("#constructor()", () => {
        it("should create a Page Break with correct attributes", () => {
            const tree = new formatter_1.Formatter().format(pageBreak);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:br": {
                            _attr: {
                                "w:type": "page",
                            },
                        },
                    },
                ],
            });
        });
    });
});
describe("PageBreakBefore", () => {
    it("should create page break before", () => {
        const pageBreakBefore = new page_break_1.PageBreakBefore();
        const tree = new formatter_1.Formatter().format(pageBreakBefore);
        chai_1.expect(tree).to.deep.equal({
            "w:pageBreakBefore": {},
        });
    });
});
//# sourceMappingURL=page-break.spec.js.map
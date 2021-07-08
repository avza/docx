"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const style_1 = require("./style");
describe("ParagraphStyle", () => {
    let style;
    describe("#constructor()", () => {
        it("should create a style with given value", () => {
            style = new style_1.Style("test");
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:pStyle": {
                    _attr: {
                        "w:val": "test",
                    },
                },
            });
        });
        it("should create a style with blank val", () => {
            style = new style_1.Style("");
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:pStyle": {
                    _attr: {
                        "w:val": "",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=style.spec.js.map
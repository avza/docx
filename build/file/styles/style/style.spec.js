"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const style_1 = require("./style");
describe("Style", () => {
    describe("#constructor()", () => {
        it("should set the given properties", () => {
            const style = new style_1.Style({
                type: "paragraph",
                styleId: "myStyleId",
                default: true,
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId", "w:default": true } },
            });
        });
        it("should set the name of the style, if given", () => {
            const style = new style_1.Style({
                type: "paragraph",
                styleId: "myStyleId",
            }, "Style Name");
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    { "w:name": { _attr: { "w:val": "Style Name" } } },
                ],
            });
        });
    });
});
//# sourceMappingURL=style.spec.js.map
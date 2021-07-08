"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const styles_1 = require("file/styles");
const page_borders_1 = require("./page-borders");
describe("PageBorders", () => {
    describe("#constructor()", () => {
        it("should create empty element when no options are passed", () => {
            const properties = new page_borders_1.PageBorders();
            chai_1.expect(() => new formatter_1.Formatter().format(properties)).to.throw();
        });
        it("should create page borders with some configuration", () => {
            const properties = new page_borders_1.PageBorders({
                pageBorders: {
                    display: page_borders_1.PageBorderDisplay.FIRST_PAGE,
                },
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:pgBorders"]);
            chai_1.expect(tree["w:pgBorders"]).to.deep.equal({ _attr: { "w:display": "firstPage" } });
        });
        it("should create page borders with full configuration", () => {
            const properties = new page_borders_1.PageBorders({
                pageBorders: {
                    display: page_borders_1.PageBorderDisplay.FIRST_PAGE,
                    zOrder: page_borders_1.PageBorderZOrder.BACK,
                },
                pageBorderTop: {
                    style: styles_1.BorderStyle.DOUBLE_WAVE,
                    size: 10,
                    color: "001122",
                },
                pageBorderRight: {
                    style: styles_1.BorderStyle.DOUBLE,
                    size: 20,
                    color: "223344",
                },
                pageBorderBottom: {
                    style: styles_1.BorderStyle.SINGLE,
                    size: 30,
                    color: "556677",
                },
                pageBorderLeft: {
                    style: styles_1.BorderStyle.DOTTED,
                    size: 40,
                    color: "889900",
                },
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:pgBorders"]);
            chai_1.expect(tree["w:pgBorders"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:pgBorders"][0]).to.deep.equal({ _attr: { "w:display": "firstPage", "w:zOrder": "back" } });
            chai_1.expect(tree["w:pgBorders"][1]).to.deep.equal({
                "w:top": {
                    _attr: { "w:color": "001122", "w:size": 10, "w:val": "doubleWave" },
                },
            });
            chai_1.expect(tree["w:pgBorders"][2]).to.deep.equal({
                "w:right": {
                    _attr: { "w:color": "223344", "w:size": 20, "w:val": "double" },
                },
            });
            chai_1.expect(tree["w:pgBorders"][3]).to.deep.equal({
                "w:bottom": {
                    _attr: { "w:color": "556677", "w:size": 30, "w:val": "single" },
                },
            });
            chai_1.expect(tree["w:pgBorders"][4]).to.deep.equal({
                "w:left": {
                    _attr: { "w:color": "889900", "w:size": 40, "w:val": "dotted" },
                },
            });
        });
    });
});
//# sourceMappingURL=page-borders.spec.js.map
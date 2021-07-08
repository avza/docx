"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const grid_1 = require("./grid");
const xml_components_1 = require("file/xml-components");
describe("GridCol", () => {
    describe("#constructor", () => {
        it("sets the width attribute to the value given", () => {
            const grid = new grid_1.GridCol(1234);
            const tree = new formatter_1.Formatter().format(grid);
            chai_1.expect(tree).to.deep.equal({
                "w:gridCol": { _attr: { "w:w": 1234 } },
            });
        });
        it("does not set a width attribute if not given", () => {
            const grid = new grid_1.GridCol();
            const tree = new formatter_1.Formatter().format(grid);
            chai_1.expect(tree).to.deep.equal({ "w:gridCol": xml_components_1.EMPTY_OBJECT });
        });
    });
});
describe("TableGrid", () => {
    describe("#constructor", () => {
        it("creates a column for each width given", () => {
            const grid = new grid_1.TableGrid([1234, 321, 123]);
            const tree = new formatter_1.Formatter().format(grid);
            chai_1.expect(tree).to.deep.equal({
                "w:tblGrid": [
                    { "w:gridCol": { _attr: { "w:w": 1234 } } },
                    { "w:gridCol": { _attr: { "w:w": 321 } } },
                    { "w:gridCol": { _attr: { "w:w": 123 } } },
                ],
            });
        });
    });
});
//# sourceMappingURL=grid.spec.js.map
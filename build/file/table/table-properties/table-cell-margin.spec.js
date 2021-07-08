"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_cell_1 = require("../table-cell");
const table_cell_margin_1 = require("./table-cell-margin");
describe("TableCellMargin", () => {
    describe("#constructor", () => {
        it("should throw an error if theres no child elements", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({});
            chai_1.expect(() => new formatter_1.Formatter().format(cellMargin)).to.throw();
        });
    });
    describe("#addTopMargin", () => {
        it("should add a table cell top margin", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                top: {
                    value: 1234,
                    type: table_cell_1.WidthType.DXA,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:top": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
        it("should add a table cell top margin using default width type", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                top: {
                    value: 1234,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:top": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
    });
    describe("#addLeftMargin", () => {
        it("should add a table cell left margin", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                left: {
                    value: 1234,
                    type: table_cell_1.WidthType.DXA,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:left": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
        it("should add a table cell left margin using default width type", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                left: {
                    value: 1234,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:left": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
    });
    describe("#addBottomMargin", () => {
        it("should add a table cell bottom margin", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                bottom: {
                    value: 1234,
                    type: table_cell_1.WidthType.DXA,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:bottom": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
        it("should add a table cell bottom margin using default width type", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                bottom: {
                    value: 1234,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:bottom": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
    });
    describe("#addRightMargin", () => {
        it("should add a table cell right margin", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                right: {
                    value: 1234,
                    type: table_cell_1.WidthType.DXA,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:right": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
        it("should add a table cell right margin using default width type", () => {
            const cellMargin = new table_cell_margin_1.TableCellMargin({
                right: {
                    value: 1234,
                },
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({ "w:tblCellMar": [{ "w:right": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] });
        });
    });
});
//# sourceMappingURL=table-cell-margin.spec.js.map
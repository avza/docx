"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_row_height_1 = require("file/table/table-row/table-row-height");
const table_row_properties_1 = require("./table-row-properties");
describe("TableRowProperties", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            chai_1.expect(() => new formatter_1.Formatter().format(rowProperties)).to.throw("XMLComponent did not format correctly");
        });
    });
    describe("#setCantSplit", () => {
        it("sets cantSplit to avoid row been paginated", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            rowProperties.setCantSplit();
            const tree = new formatter_1.Formatter().format(rowProperties);
            chai_1.expect(tree).to.deep.equal({ "w:trPr": [{ "w:cantSplit": { _attr: { "w:val": true } } }] });
        });
    });
    describe("#setTableHeader", () => {
        it("sets row as table header (repeat row on each page of table)", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            rowProperties.setTableHeader();
            const tree = new formatter_1.Formatter().format(rowProperties);
            chai_1.expect(tree).to.deep.equal({ "w:trPr": [{ "w:tblHeader": { _attr: { "w:val": true } } }] });
        });
    });
    describe("#setHeight", () => {
        it("sets row height exact", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            rowProperties.setHeight(100, table_row_height_1.HeightRule.EXACT);
            const tree = new formatter_1.Formatter().format(rowProperties);
            chai_1.expect(tree).to.deep.equal({ "w:trPr": [{ "w:trHeight": { _attr: { "w:val": 100, "w:hRule": "exact" } } }] });
        });
        it("sets row height auto", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            rowProperties.setHeight(100, table_row_height_1.HeightRule.AUTO);
            const tree = new formatter_1.Formatter().format(rowProperties);
            chai_1.expect(tree).to.deep.equal({ "w:trPr": [{ "w:trHeight": { _attr: { "w:val": 100, "w:hRule": "auto" } } }] });
        });
        it("sets row height at least", () => {
            const rowProperties = new table_row_properties_1.TableRowProperties();
            rowProperties.setHeight(100, table_row_height_1.HeightRule.ATLEAST);
            const tree = new formatter_1.Formatter().format(rowProperties);
            chai_1.expect(tree).to.deep.equal({ "w:trPr": [{ "w:trHeight": { _attr: { "w:val": 100, "w:hRule": "atLeast" } } }] });
        });
    });
});
//# sourceMappingURL=table-row-properties.spec.js.map
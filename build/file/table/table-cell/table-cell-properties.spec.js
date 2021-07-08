"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const styles_1 = require("file/styles");
const table_cell_components_1 = require("./table-cell-components");
const table_cell_properties_1 = require("./table-cell-properties");
describe("TableCellProperties", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            chai_1.expect(() => new formatter_1.Formatter().format(properties)).to.throw("XMLComponent did not format correctly");
        });
    });
    describe("#addGridSpan", () => {
        it("adds grid span", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.addGridSpan(1);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:gridSpan": { _attr: { "w:val": 1 } } }] });
        });
    });
    describe("#addVerticalMerge", () => {
        it("adds vertical merge", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.addVerticalMerge(table_cell_components_1.VerticalMergeType.CONTINUE);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:vMerge": { _attr: { "w:val": "continue" } } }] });
        });
    });
    describe("#setVerticalAlign", () => {
        it("sets vertical align", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.setVerticalAlign(table_cell_components_1.VerticalAlign.BOTTOM);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:vAlign": { _attr: { "w:val": "bottom" } } }] });
        });
    });
    describe("#setWidth", () => {
        it("should set width", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.setWidth(1, table_cell_components_1.WidthType.DXA);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:tcW": { _attr: { "w:type": "dxa", "w:w": 1 } } }] });
        });
        it("should set width using default of AUTO", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.setWidth(1);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:tcW": { _attr: { "w:type": "auto", "w:w": 1 } } }] });
        });
    });
    describe("#setShading", () => {
        it("sets shading", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.setShading({
                fill: "test",
                color: "000",
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({ "w:tcPr": [{ "w:shd": { _attr: { "w:fill": "test", "w:color": "000" } } }] });
        });
    });
    describe("#addMargins", () => {
        it("sets shading", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.addMargins({});
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({
                "w:tcPr": [
                    {
                        "w:tcMar": [
                            {
                                "w:top": {
                                    _attr: {
                                        "w:type": "dxa",
                                        "w:w": 0,
                                    },
                                },
                            },
                            {
                                "w:bottom": {
                                    _attr: {
                                        "w:type": "dxa",
                                        "w:w": 0,
                                    },
                                },
                            },
                            {
                                "w:end": {
                                    _attr: {
                                        "w:type": "dxa",
                                        "w:w": 0,
                                    },
                                },
                            },
                            {
                                "w:start": {
                                    _attr: {
                                        "w:type": "dxa",
                                        "w:w": 0,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#Borders", () => {
        it("should return the TableCellBorders if Border has borders", () => {
            const properties = new table_cell_properties_1.TableCellProperties();
            properties.Borders.addTopBorder(styles_1.BorderStyle.DASH_DOT_STROKED, 3, "red");
            const borders = properties.Borders;
            const tree = new formatter_1.Formatter().format(borders);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [{ "w:top": { _attr: { "w:val": "dashDotStroked", "w:sz": 3, "w:color": "red" } } }],
            });
        });
    });
});
//# sourceMappingURL=table-cell-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const paragraph_1 = require("../../paragraph");
const shading_1 = require("../shading");
const table_cell_1 = require("../table-cell");
const table_layout_1 = require("./table-layout");
const table_properties_1 = require("./table-properties");
describe("TableProperties", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const tp = new table_properties_1.TableProperties({});
            chai_1.expect(() => new formatter_1.Formatter().format(tp)).to.throw("XMLComponent did not format correctly");
        });
    });
    describe("#setWidth", () => {
        it("should add a table width property", () => {
            const tp = new table_properties_1.TableProperties({
                width: {
                    size: 1234,
                    type: table_cell_1.WidthType.DXA,
                },
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [{ "w:tblW": { _attr: { "w:type": "dxa", "w:w": 1234 } } }],
            });
        });
        it("should add a table width property with default of AUTO", () => {
            const tp = new table_properties_1.TableProperties({
                width: {
                    size: 1234,
                },
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [{ "w:tblW": { _attr: { "w:type": "auto", "w:w": 1234 } } }],
            });
        });
    });
    describe("#setLayout", () => {
        it("sets the table to fixed width layout", () => {
            const tp = new table_properties_1.TableProperties({
                layout: table_layout_1.TableLayoutType.FIXED,
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [{ "w:tblLayout": { _attr: { "w:type": "fixed" } } }],
            });
        });
    });
    describe("#cellMargin", () => {
        it("adds a table cell top margin", () => {
            const tp = new table_properties_1.TableProperties({
                cellMargin: {
                    top: {
                        value: 1234,
                        type: table_cell_1.WidthType.DXA,
                    },
                },
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [{ "w:tblCellMar": [{ "w:top": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] }],
            });
        });
        it("adds a table cell left margin", () => {
            const tp = new table_properties_1.TableProperties({
                cellMargin: {
                    left: {
                        value: 1234,
                        type: table_cell_1.WidthType.DXA,
                    },
                },
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [{ "w:tblCellMar": [{ "w:left": { _attr: { "w:type": "dxa", "w:w": 1234 } } }] }],
            });
        });
    });
    describe("#setShading", () => {
        it("sets the shading of the table", () => {
            const tp = new table_properties_1.TableProperties({
                shading: {
                    fill: "b79c2f",
                    val: shading_1.ShadingType.REVERSE_DIAGONAL_STRIPE,
                    color: "auto",
                },
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [
                    {
                        "w:shd": {
                            _attr: {
                                "w:color": "auto",
                                "w:fill": "b79c2f",
                                "w:val": "reverseDiagStripe",
                            },
                        },
                    },
                ],
            });
        });
    });
    describe("#setAlignment", () => {
        it("sets the alignment of the table", () => {
            const tp = new table_properties_1.TableProperties({
                alignment: paragraph_1.AlignmentType.CENTER,
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [
                    {
                        "w:jc": {
                            _attr: {
                                "w:val": "center",
                            },
                        },
                    },
                ],
            });
        });
    });
    describe("#Set Virtual Right to Left", () => {
        it("sets the alignment of the table", () => {
            const tp = new table_properties_1.TableProperties({
                visuallyRightToLeft: true,
            });
            const tree = new formatter_1.Formatter().format(tp);
            chai_1.expect(tree).to.deep.equal({
                "w:tblPr": [
                    {
                        "w:bidiVisual": {},
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=table-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const styles_1 = require("file/styles");
const shading_1 = require("../shading");
const table_cell_1 = require("./table-cell");
const table_cell_components_1 = require("./table-cell-components");
describe("TableCellBorders", () => {
    describe("#prepForXml", () => {
        it("should not add empty borders element if there are no borders defined", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            chai_1.expect(() => new formatter_1.Formatter().format(tb)).to.throw();
        });
    });
    describe("#addingBorders", () => {
        it("should add top border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addTopBorder(styles_1.BorderStyle.DOTTED, 1, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:top": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 1,
                                "w:val": "dotted",
                            },
                        },
                    },
                ],
            });
        });
        it("should add start(left) border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addStartBorder(styles_1.BorderStyle.SINGLE, 2, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:start": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 2,
                                "w:val": "single",
                            },
                        },
                    },
                ],
            });
        });
        it("should add bottom border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addBottomBorder(styles_1.BorderStyle.DOUBLE, 1, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:bottom": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 1,
                                "w:val": "double",
                            },
                        },
                    },
                ],
            });
        });
        it("should add end(right) border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addEndBorder(styles_1.BorderStyle.THICK, 3, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:end": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 3,
                                "w:val": "thick",
                            },
                        },
                    },
                ],
            });
        });
        it("should add left border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addLeftBorder(styles_1.BorderStyle.THICK, 3, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:left": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 3,
                                "w:val": "thick",
                            },
                        },
                    },
                ],
            });
        });
        it("should add right border", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addRightBorder(styles_1.BorderStyle.THICK, 3, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:right": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 3,
                                "w:val": "thick",
                            },
                        },
                    },
                ],
            });
        });
        it("should add multiple borders", () => {
            const tb = new table_cell_components_1.TableCellBorders();
            tb.addTopBorder(styles_1.BorderStyle.DOTTED, 1, "FF00FF");
            tb.addEndBorder(styles_1.BorderStyle.THICK, 3, "FF00FF");
            tb.addBottomBorder(styles_1.BorderStyle.DOUBLE, 1, "FF00FF");
            tb.addStartBorder(styles_1.BorderStyle.SINGLE, 2, "FF00FF");
            tb.addLeftBorder(styles_1.BorderStyle.SINGLE, 2, "FF00FF");
            tb.addRightBorder(styles_1.BorderStyle.SINGLE, 2, "FF00FF");
            const tree = new formatter_1.Formatter().format(tb);
            chai_1.expect(tree).to.deep.equal({
                "w:tcBorders": [
                    {
                        "w:top": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 1,
                                "w:val": "dotted",
                            },
                        },
                    },
                    {
                        "w:end": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 3,
                                "w:val": "thick",
                            },
                        },
                    },
                    {
                        "w:bottom": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 1,
                                "w:val": "double",
                            },
                        },
                    },
                    {
                        "w:start": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 2,
                                "w:val": "single",
                            },
                        },
                    },
                    {
                        "w:left": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 2,
                                "w:val": "single",
                            },
                        },
                    },
                    {
                        "w:right": {
                            _attr: {
                                "w:color": "FF00FF",
                                "w:sz": 2,
                                "w:val": "single",
                            },
                        },
                    },
                ],
            });
        });
    });
});
describe("TableCellWidth", () => {
    describe("#constructor", () => {
        it("should create object", () => {
            const tcWidth = new table_cell_components_1.TableCellWidth(100, table_cell_components_1.WidthType.DXA);
            const tree = new formatter_1.Formatter().format(tcWidth);
            chai_1.expect(tree).to.deep.equal({
                "w:tcW": {
                    _attr: {
                        "w:type": "dxa",
                        "w:w": 100,
                    },
                },
            });
        });
    });
});
describe("TableCell", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with vertical align", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                verticalAlign: table_cell_components_1.VerticalAlign.CENTER,
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:vAlign": {
                                    _attr: {
                                        "w:val": "center",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with text direction", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                textDirection: table_cell_components_1.TextDirection.BOTTOM_TO_TOP_LEFT_TO_RIGHT,
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:textDirection": {
                                    _attr: {
                                        "w:val": "btLr",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with vertical merge", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                verticalMerge: table_cell_components_1.VerticalMergeType.RESTART,
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:vMerge": {
                                    _attr: {
                                        "w:val": "restart",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with margins", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                margins: {
                    top: 1,
                    left: 1,
                    bottom: 1,
                    right: 1,
                },
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:tcMar": [
                                    {
                                        "w:top": {
                                            _attr: {
                                                "w:type": "dxa",
                                                "w:w": 1,
                                            },
                                        },
                                    },
                                    {
                                        "w:bottom": {
                                            _attr: {
                                                "w:type": "dxa",
                                                "w:w": 1,
                                            },
                                        },
                                    },
                                    {
                                        "w:end": {
                                            _attr: {
                                                "w:type": "dxa",
                                                "w:w": 1,
                                            },
                                        },
                                    },
                                    {
                                        "w:start": {
                                            _attr: {
                                                "w:type": "dxa",
                                                "w:w": 1,
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with shading", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                shading: {
                    fill: "red",
                    color: "blue",
                    val: shading_1.ShadingType.PERCENT_10,
                },
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:shd": {
                                    _attr: {
                                        "w:color": "blue",
                                        "w:fill": "red",
                                        "w:val": "pct10",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with width", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                width: { size: 100, type: table_cell_components_1.WidthType.DXA },
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:tcW": {
                                    _attr: {
                                        "w:type": "dxa",
                                        "w:w": 100,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        it("should create with column span", () => {
            const cell = new table_cell_1.TableCell({
                children: [],
                columnSpan: 2,
            });
            const tree = new formatter_1.Formatter().format(cell);
            chai_1.expect(tree).to.deep.equal({
                "w:tc": [
                    {
                        "w:tcPr": [
                            {
                                "w:gridSpan": {
                                    _attr: {
                                        "w:val": 2,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:p": {},
                    },
                ],
            });
        });
        describe("rowSpan", () => {
            it("should not create with row span if its less than 1", () => {
                const cell = new table_cell_1.TableCell({
                    children: [],
                    rowSpan: 0,
                });
                const tree = new formatter_1.Formatter().format(cell);
                chai_1.expect(tree).to.deep.equal({
                    "w:tc": [
                        {
                            "w:p": {},
                        },
                    ],
                });
            });
            it("should create with row span if its greater than 1", () => {
                const cell = new table_cell_1.TableCell({
                    children: [],
                    rowSpan: 2,
                });
                const tree = new formatter_1.Formatter().format(cell);
                chai_1.expect(tree).to.deep.equal({
                    "w:tc": [
                        {
                            "w:tcPr": [
                                {
                                    "w:vMerge": {
                                        _attr: {
                                            "w:val": "restart",
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            "w:p": {},
                        },
                    ],
                });
            });
            it("should create with borders", () => {
                const cell = new table_cell_1.TableCell({
                    children: [],
                    borders: {
                        top: {
                            style: styles_1.BorderStyle.DASH_DOT_STROKED,
                            size: 3,
                            color: "red",
                        },
                        bottom: {
                            style: styles_1.BorderStyle.DOUBLE,
                            size: 3,
                            color: "blue",
                        },
                        left: {
                            style: styles_1.BorderStyle.DASH_DOT_STROKED,
                            size: 3,
                            color: "green",
                        },
                        right: {
                            style: styles_1.BorderStyle.DASH_DOT_STROKED,
                            size: 3,
                            color: "#ff8000",
                        },
                    },
                });
                const tree = new formatter_1.Formatter().format(cell);
                chai_1.expect(tree).to.deep.equal({
                    "w:tc": [
                        {
                            "w:tcPr": [
                                {
                                    "w:tcBorders": [
                                        {
                                            "w:top": {
                                                _attr: {
                                                    "w:color": "red",
                                                    "w:sz": 3,
                                                    "w:val": "dashDotStroked",
                                                },
                                            },
                                        },
                                        {
                                            "w:bottom": {
                                                _attr: {
                                                    "w:color": "blue",
                                                    "w:sz": 3,
                                                    "w:val": "double",
                                                },
                                            },
                                        },
                                        {
                                            "w:left": {
                                                _attr: {
                                                    "w:color": "green",
                                                    "w:sz": 3,
                                                    "w:val": "dashDotStroked",
                                                },
                                            },
                                        },
                                        {
                                            "w:right": {
                                                _attr: {
                                                    "w:color": "#ff8000",
                                                    "w:sz": 3,
                                                    "w:val": "dashDotStroked",
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            "w:p": {},
                        },
                    ],
                });
            });
        });
    });
});
//# sourceMappingURL=table-cell.spec.js.map
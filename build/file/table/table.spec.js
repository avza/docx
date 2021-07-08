"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const paragraph_1 = require("../paragraph");
const table_1 = require("./table");
const table_properties_1 = require("./table-properties");
const table_cell_1 = require("./table-cell");
const table_layout_1 = require("./table-properties/table-layout");
const table_row_1 = require("./table-row");
const DEFAULT_TABLE_PROPERTIES = {
    "w:tblCellMar": [
        {
            "w:bottom": {
                _attr: {
                    "w:type": "auto",
                    "w:w": 0,
                },
            },
        },
        {
            "w:top": {
                _attr: {
                    "w:type": "auto",
                    "w:w": 0,
                },
            },
        },
        {
            "w:left": {
                _attr: {
                    "w:type": "auto",
                    "w:w": 0,
                },
            },
        },
        {
            "w:right": {
                _attr: {
                    "w:type": "auto",
                    "w:w": 0,
                },
            },
        },
    ],
};
const BORDERS = {
    "w:tblBorders": [
        { "w:top": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
        { "w:left": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
        { "w:bottom": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
        { "w:right": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
        { "w:insideH": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
        { "w:insideV": { _attr: { "w:val": "single", "w:sz": 4, "w:space": 0, "w:color": "auto" } } },
    ],
};
const WIDTHS = {
    "w:tblW": {
        _attr: {
            "w:type": "auto",
            "w:w": 100,
        },
    },
};
describe("Table", () => {
    describe("#constructor", () => {
        it("creates a table with the correct number of rows and columns", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
            });
            const tree = new formatter_1.Formatter().format(table);
            const cell = {
                "w:tc": [
                    {
                        "w:p": [
                            {
                                "w:r": [
                                    {
                                        "w:t": [
                                            {
                                                _attr: {
                                                    "xml:space": "preserve",
                                                },
                                            },
                                            "hello",
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
            chai_1.expect(tree).to.deep.equal({
                "w:tbl": [
                    { "w:tblPr": [DEFAULT_TABLE_PROPERTIES, BORDERS, WIDTHS] },
                    {
                        "w:tblGrid": [{ "w:gridCol": { _attr: { "w:w": 100 } } }, { "w:gridCol": { _attr: { "w:w": 100 } } }],
                    },
                    { "w:tr": [cell, cell] },
                    { "w:tr": [cell, cell] },
                    { "w:tr": [cell, cell] },
                ],
            });
        });
        it("creates a table with the correct columnSpan and rowSpan", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                                columnSpan: 2,
                            }),
                        ],
                    }),
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                                rowSpan: 2,
                            }),
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
            });
            const tree = new formatter_1.Formatter().format(table);
            const cellP = { "w:p": [{ "w:r": [{ "w:t": [{ _attr: { "xml:space": "preserve" } }, "hello"] }] }] };
            chai_1.expect(tree).to.deep.equal({
                "w:tbl": [
                    { "w:tblPr": [DEFAULT_TABLE_PROPERTIES, BORDERS, WIDTHS] },
                    {
                        "w:tblGrid": [{ "w:gridCol": { _attr: { "w:w": 100 } } }, { "w:gridCol": { _attr: { "w:w": 100 } } }],
                    },
                    {
                        "w:tr": [
                            {
                                "w:tc": [{ "w:tcPr": [{ "w:gridSpan": { _attr: { "w:val": 2 } } }] }, cellP],
                            },
                        ],
                    },
                    {
                        "w:tr": [
                            {
                                "w:tc": [{ "w:tcPr": [{ "w:vMerge": { _attr: { "w:val": "restart" } } }] }, cellP],
                            },
                            { "w:tc": [cellP] },
                        ],
                    },
                    {
                        "w:tr": [
                            {
                                "w:tc": [{ "w:tcPr": [{ "w:vMerge": { _attr: { "w:val": "continue" } } }] }, { "w:p": {} }],
                            },
                            { "w:tc": [cellP] },
                        ],
                    },
                ],
            });
        });
        it("sets the table to fixed width layout", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
                layout: table_layout_1.TableLayoutType.FIXED,
            });
            const tree = new formatter_1.Formatter().format(table);
            chai_1.expect(tree).to.have.property("w:tbl").which.is.an("array").with.has.length.at.least(1);
            chai_1.expect(tree["w:tbl"][0]).to.deep.equal({
                "w:tblPr": [DEFAULT_TABLE_PROPERTIES, BORDERS, WIDTHS, { "w:tblLayout": { _attr: { "w:type": "fixed" } } }],
            });
        });
        it("should center the table", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
                alignment: paragraph_1.AlignmentType.CENTER,
            });
            const tree = new formatter_1.Formatter().format(table);
            chai_1.expect(tree).to.have.property("w:tbl").which.is.an("array").with.has.length.at.least(1);
            chai_1.expect(tree["w:tbl"][0]).to.deep.equal({
                "w:tblPr": [DEFAULT_TABLE_PROPERTIES, BORDERS, WIDTHS, { "w:jc": { _attr: { "w:val": "center" } } }],
            });
        });
        it("should set the table to provided width", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
                width: {
                    size: 100,
                    type: table_cell_1.WidthType.PERCENTAGE,
                },
                layout: table_layout_1.TableLayoutType.FIXED,
            });
            const tree = new formatter_1.Formatter().format(table);
            chai_1.expect(tree).to.have.property("w:tbl").which.is.an("array").with.has.length.at.least(1);
            chai_1.expect(tree["w:tbl"][0]).to.deep.equal({
                "w:tblPr": [
                    DEFAULT_TABLE_PROPERTIES,
                    BORDERS,
                    {
                        "w:tblW": {
                            _attr: {
                                "w:type": "pct",
                                "w:w": "100%",
                            },
                        },
                    },
                    { "w:tblLayout": { _attr: { "w:type": "fixed" } } },
                ],
            });
        });
    });
    describe("Cell", () => {
        describe("#prepForXml", () => {
            it("inserts a paragraph at the end of the cell if it is empty", () => {
                const table = new table_1.Table({
                    rows: [
                        new table_row_1.TableRow({
                            children: [
                                new table_cell_1.TableCell({
                                    children: [new paragraph_1.Paragraph("hello")],
                                }),
                            ],
                        }),
                    ],
                });
                const tree = new formatter_1.Formatter().format(table);
                chai_1.expect(tree).to.have.property("w:tbl").which.is.an("array");
                const row = tree["w:tbl"].find((x) => x["w:tr"]);
                chai_1.expect(row).not.to.be.undefined;
                chai_1.expect(row["w:tr"]).to.be.an("array").which.has.length.at.least(1);
                chai_1.expect(row["w:tr"].find((x) => x["w:tc"])).to.deep.equal({
                    "w:tc": [
                        {
                            "w:p": [
                                {
                                    "w:r": [
                                        {
                                            "w:t": [
                                                {
                                                    _attr: {
                                                        "xml:space": "preserve",
                                                    },
                                                },
                                                "hello",
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                });
            });
        });
    });
    describe("#float", () => {
        it("sets the table float properties", () => {
            const table = new table_1.Table({
                rows: [
                    new table_row_1.TableRow({
                        children: [
                            new table_cell_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
                float: {
                    horizontalAnchor: table_properties_1.TableAnchorType.MARGIN,
                    verticalAnchor: table_properties_1.TableAnchorType.PAGE,
                    absoluteHorizontalPosition: 10,
                    relativeHorizontalPosition: table_properties_1.RelativeHorizontalPosition.CENTER,
                    absoluteVerticalPosition: 20,
                    relativeVerticalPosition: table_properties_1.RelativeVerticalPosition.BOTTOM,
                    bottomFromText: 30,
                    topFromText: 40,
                    leftFromText: 50,
                    rightFromText: 60,
                },
            });
            const tree = new formatter_1.Formatter().format(table);
            chai_1.expect(tree).to.have.property("w:tbl").which.is.an("array").with.has.length.at.least(1);
            chai_1.expect(tree["w:tbl"][0]).to.deep.equal({
                "w:tblPr": [
                    DEFAULT_TABLE_PROPERTIES,
                    BORDERS,
                    WIDTHS,
                    {
                        "w:tblpPr": {
                            _attr: {
                                "w:horzAnchor": "margin",
                                "w:vertAnchor": "page",
                                "w:tblpX": 10,
                                "w:tblpXSpec": "center",
                                "w:tblpY": 20,
                                "w:tblpYSpec": "bottom",
                                "w:bottomFromText": 30,
                                "w:topFromText": 40,
                                "w:leftFromText": 50,
                                "w:rightFromText": 60,
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=table.spec.js.map
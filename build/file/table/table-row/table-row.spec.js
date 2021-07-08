"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const paragraph_1 = require("file/paragraph");
const table_row_height_1 = require("file/table/table-row/table-row-height");
const xml_components_1 = require("file/xml-components");
const table_cell_1 = require("../table-cell");
const table_row_1 = require("./table-row");
describe("TableRow", () => {
    describe("#constructor", () => {
        it("should create with no cells", () => {
            const tableRow = new table_row_1.TableRow({
                children: [],
            });
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": xml_components_1.EMPTY_OBJECT,
            });
        });
        it("should create with one cell", () => {
            const tableRow = new table_row_1.TableRow({
                children: [
                    new table_cell_1.TableCell({
                        children: [],
                    }),
                ],
            });
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": [
                    {
                        "w:tc": [
                            {
                                "w:p": xml_components_1.EMPTY_OBJECT,
                            },
                        ],
                    },
                ],
            });
        });
        it("should create with cant split", () => {
            const tableRow = new table_row_1.TableRow({
                children: [],
                cantSplit: true,
            });
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": [
                    {
                        "w:trPr": [
                            {
                                "w:cantSplit": {
                                    _attr: {
                                        "w:val": true,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("should create with table header", () => {
            const tableRow = new table_row_1.TableRow({
                children: [],
                tableHeader: true,
            });
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": [
                    {
                        "w:trPr": [
                            {
                                "w:tblHeader": {
                                    _attr: {
                                        "w:val": true,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("should set row height", () => {
            const tableRow = new table_row_1.TableRow({
                children: [],
                height: {
                    value: 100,
                    rule: table_row_height_1.HeightRule.EXACT,
                },
            });
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": [
                    {
                        "w:trPr": [
                            {
                                "w:trHeight": {
                                    _attr: {
                                        "w:hRule": "exact",
                                        "w:val": 100,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#addCellToIndex", () => {
        it("should add cell to correct index with no initial properties", () => {
            const tableRow = new table_row_1.TableRow({
                children: [
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                ],
                tableHeader: true,
            });
            tableRow.addCellToIndex(new table_cell_1.TableCell({
                children: [],
            }), 0);
            const tree = new formatter_1.Formatter().format(tableRow);
            chai_1.expect(tree).to.deep.equal({
                "w:tr": [
                    {
                        "w:trPr": [
                            {
                                "w:tblHeader": {
                                    _attr: {
                                        "w:val": true,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:tc": [
                            {
                                "w:p": {},
                            },
                        ],
                    },
                    {
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
                                                    "test",
                                                ],
                                            },
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
    describe("#rootIndexToColumnIndex", () => {
        it("should get the correct virtual column index by root index", () => {
            const tableRow = new table_row_1.TableRow({
                children: [
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                ],
            });
            chai_1.expect(tableRow.rootIndexToColumnIndex(1)).to.equal(0);
            chai_1.expect(tableRow.rootIndexToColumnIndex(2)).to.equal(3);
            chai_1.expect(tableRow.rootIndexToColumnIndex(3)).to.equal(4);
            chai_1.expect(tableRow.rootIndexToColumnIndex(4)).to.equal(5);
            chai_1.expect(() => tableRow.rootIndexToColumnIndex(0)).to.throw(`cell 'rootIndex' should between 1 to 4`);
            chai_1.expect(() => tableRow.rootIndexToColumnIndex(5)).to.throw(`cell 'rootIndex' should between 1 to 4`);
        });
    });
    describe("#columnIndexToRootIndex", () => {
        it("should get the correct root index by virtual column index", () => {
            const tableRow = new table_row_1.TableRow({
                children: [
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                ],
            });
            chai_1.expect(tableRow.columnIndexToRootIndex(0)).to.equal(1);
            chai_1.expect(tableRow.columnIndexToRootIndex(1)).to.equal(1);
            chai_1.expect(tableRow.columnIndexToRootIndex(2)).to.equal(1);
            chai_1.expect(tableRow.columnIndexToRootIndex(3)).to.equal(2);
            chai_1.expect(tableRow.columnIndexToRootIndex(4)).to.equal(3);
            chai_1.expect(tableRow.columnIndexToRootIndex(5)).to.equal(4);
            chai_1.expect(tableRow.columnIndexToRootIndex(6)).to.equal(4);
            chai_1.expect(tableRow.columnIndexToRootIndex(7)).to.equal(4);
            chai_1.expect(() => tableRow.columnIndexToRootIndex(-1)).to.throw(`cell 'columnIndex' should not less than zero`);
            chai_1.expect(() => tableRow.columnIndexToRootIndex(8)).to.throw(`cell 'columnIndex' should not great than 7`);
        });
        it("should allow end new cell index", () => {
            const tableRow = new table_row_1.TableRow({
                children: [
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                    }),
                    new table_cell_1.TableCell({
                        children: [new paragraph_1.Paragraph("test")],
                        columnSpan: 3,
                    }),
                ],
            });
            chai_1.expect(tableRow.columnIndexToRootIndex(8, true)).to.equal(5);
            chai_1.expect(tableRow.columnIndexToRootIndex(10, true)).to.equal(5);
        });
    });
});
//# sourceMappingURL=table-row.spec.js.map
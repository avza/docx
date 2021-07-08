"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_cell_margins_1 = require("./table-cell-margins");
describe("TableCellMargin", () => {
    describe("#constructor", () => {
        it("should create with default values", () => {
            const cellMargin = new table_cell_margins_1.TableCellMargin({});
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
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
            });
        });
        it("should create with values", () => {
            const cellMargin = new table_cell_margins_1.TableCellMargin({
                top: 5,
                bottom: 5,
                left: 5,
                right: 5,
            });
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
                "w:tcMar": [
                    {
                        "w:top": {
                            _attr: {
                                "w:type": "dxa",
                                "w:w": 5,
                            },
                        },
                    },
                    {
                        "w:bottom": {
                            _attr: {
                                "w:type": "dxa",
                                "w:w": 5,
                            },
                        },
                    },
                    {
                        "w:end": {
                            _attr: {
                                "w:type": "dxa",
                                "w:w": 5,
                            },
                        },
                    },
                    {
                        "w:start": {
                            _attr: {
                                "w:type": "dxa",
                                "w:w": 5,
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=table-cell-margins.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const cell_margin_1 = require("./cell-margin");
describe("TopCellMargin", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cellMargin = new cell_margin_1.TopCellMargin(1);
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
                "w:top": {
                    _attr: {
                        "w:type": "dxa",
                        "w:w": 1,
                    },
                },
            });
        });
    });
});
describe("BottomCellMargin", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cellMargin = new cell_margin_1.BottomCellMargin(1);
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
                "w:bottom": {
                    _attr: {
                        "w:type": "dxa",
                        "w:w": 1,
                    },
                },
            });
        });
    });
});
describe("LeftCellMargin", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cellMargin = new cell_margin_1.LeftCellMargin(1);
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
                "w:start": {
                    _attr: {
                        "w:type": "dxa",
                        "w:w": 1,
                    },
                },
            });
        });
    });
});
describe("RightCellMargin", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const cellMargin = new cell_margin_1.RightCellMargin(1);
            const tree = new formatter_1.Formatter().format(cellMargin);
            chai_1.expect(tree).to.deep.equal({
                "w:end": {
                    _attr: {
                        "w:type": "dxa",
                        "w:w": 1,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=cell-margin.spec.js.map
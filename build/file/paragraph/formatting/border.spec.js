"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const border_1 = require("./border");
describe("Border", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const border = new border_1.Border({
                top: {
                    color: "red",
                    space: 1,
                    value: "test",
                    size: 2,
                },
                bottom: {
                    color: "red",
                    space: 3,
                    value: "test",
                    size: 4,
                },
                left: {
                    color: "red",
                    space: 5,
                    value: "test",
                    size: 6,
                },
                right: {
                    color: "red",
                    space: 7,
                    value: "test",
                    size: 8,
                },
            });
            const tree = new formatter_1.Formatter().format(border);
            chai_1.expect(tree).to.deep.equal({
                "w:pBdr": [
                    {
                        "w:top": {
                            _attr: {
                                "w:color": "red",
                                "w:space": 1,
                                "w:sz": 2,
                                "w:val": "test",
                            },
                        },
                    },
                    {
                        "w:bottom": {
                            _attr: {
                                "w:color": "red",
                                "w:space": 3,
                                "w:sz": 4,
                                "w:val": "test",
                            },
                        },
                    },
                    {
                        "w:left": {
                            _attr: {
                                "w:color": "red",
                                "w:space": 5,
                                "w:sz": 6,
                                "w:val": "test",
                            },
                        },
                    },
                    {
                        "w:right": {
                            _attr: {
                                "w:color": "red",
                                "w:space": 7,
                                "w:sz": 8,
                                "w:val": "test",
                            },
                        },
                    },
                ],
            });
        });
    });
});
describe("ThematicBreak", () => {
    let thematicBreak;
    beforeEach(() => {
        thematicBreak = new border_1.ThematicBreak();
    });
    describe("#constructor()", () => {
        it("should create a Thematic Break with correct border properties", () => {
            const tree = new formatter_1.Formatter().format(thematicBreak);
            chai_1.expect(tree).to.deep.equal({
                "w:pBdr": [
                    {
                        "w:bottom": {
                            _attr: {
                                "w:color": "auto",
                                "w:space": 1,
                                "w:sz": 6,
                                "w:val": "single",
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=border.spec.js.map
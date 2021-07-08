"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const styles_1 = require("file/styles");
const table_borders_1 = require("./table-borders");
describe("TableBorders", () => {
    describe("#constructor", () => {
        describe("default borders", () => {
            it("should add a table cell top border using default width type", () => {
                const tableBorders = new table_borders_1.TableBorders({});
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("top border", () => {
            it("should add a table cell top border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    top: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("left border", () => {
            it("should add a table cell left border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    left: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("bottom border", () => {
            it("should add a table cell bottom border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    bottom: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("right border", () => {
            it("should add a table cell right border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    right: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("inside horizontal border", () => {
            it("should add a table cell inside horizontal border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    insideHorizontal: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("inside vertical border", () => {
            it("should add a table cell inside horizontal border", () => {
                const tableBorders = new table_borders_1.TableBorders({
                    insideVertical: {
                        style: styles_1.BorderStyle.DOUBLE,
                        size: 1,
                        color: "red",
                    },
                });
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 4,
                                    "w:val": "single",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "red",
                                    "w:space": 0,
                                    "w:sz": 1,
                                    "w:val": "double",
                                },
                            },
                        },
                    ],
                });
            });
        });
        describe("TableBorders.NONE convenience object", () => {
            it("should add no borders", () => {
                const tableBorders = new table_borders_1.TableBorders(table_borders_1.TableBorders.NONE);
                const tree = new formatter_1.Formatter().format(tableBorders);
                chai_1.expect(tree).to.deep.equal({
                    "w:tblBorders": [
                        {
                            "w:top": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                        {
                            "w:left": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                        {
                            "w:bottom": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                        {
                            "w:right": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                        {
                            "w:insideH": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                        {
                            "w:insideV": {
                                _attr: {
                                    "w:color": "auto",
                                    "w:space": 0,
                                    "w:sz": 0,
                                    "w:val": "none",
                                },
                            },
                        },
                    ],
                });
            });
        });
    });
});
//# sourceMappingURL=table-borders.spec.js.map
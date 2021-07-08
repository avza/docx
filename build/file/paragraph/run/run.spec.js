"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_1 = require("file/table");
const _1 = require("./");
const emphasis_mark_1 = require("./emphasis-mark");
const run_1 = require("./run");
const underline_1 = require("./underline");
describe("Run", () => {
    describe("#bold()", () => {
        it("it should add bold to the properties", () => {
            const run = new _1.Run({
                bold: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            { "w:b": { _attr: { "w:val": true } } },
                            {
                                "w:bCs": {
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
    });
    describe("#italics()", () => {
        it("it should add italics to the properties", () => {
            const run = new _1.Run({
                italics: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            { "w:i": { _attr: { "w:val": true } } },
                            {
                                "w:iCs": {
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
    });
    describe("#underline()", () => {
        it("should default to 'single' and no color", () => {
            const run = new _1.Run({
                underline: {},
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:u": { _attr: { "w:val": "single" } } }] }],
            });
        });
        it("should set the style type and color if given", () => {
            const run = new _1.Run({
                underline: {
                    type: underline_1.UnderlineType.DOUBLE,
                    color: "990011",
                },
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:u": { _attr: { "w:val": "double", "w:color": "990011" } } }] }],
            });
        });
    });
    describe("#emphasisMark()", () => {
        it("should default to 'dot'", () => {
            const run = new _1.Run({
                emphasisMark: {},
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }] }],
            });
        });
        it("should set the style type if given", () => {
            const run = new _1.Run({
                emphasisMark: {
                    type: emphasis_mark_1.EmphasisMarkType.DOT,
                },
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }] }],
            });
        });
    });
    describe("#smallCaps()", () => {
        it("it should add smallCaps to the properties", () => {
            const run = new _1.Run({
                smallCaps: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:smallCaps": { _attr: { "w:val": true } } }] }],
            });
        });
    });
    describe("#caps()", () => {
        it("it should add caps to the properties", () => {
            const run = new _1.Run({
                allCaps: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:caps": { _attr: { "w:val": true } } }] }],
            });
        });
    });
    describe("#strike()", () => {
        it("it should add strike to the properties", () => {
            const run = new _1.Run({
                strike: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:strike": { _attr: { "w:val": true } } }] }],
            });
        });
    });
    describe("#doubleStrike()", () => {
        it("it should add caps to the properties", () => {
            const run = new _1.Run({
                doubleStrike: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:dstrike": { _attr: { "w:val": true } } }] }],
            });
        });
    });
    describe("#subScript()", () => {
        it("it should add subScript to the properties", () => {
            const run = new _1.Run({
                subScript: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "subscript" } } }] }],
            });
        });
    });
    describe("#superScript()", () => {
        it("it should add superScript to the properties", () => {
            const run = new _1.Run({
                superScript: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "superscript" } } }] }],
            });
        });
    });
    describe("#highlight()", () => {
        it("it should add highlight to the properties", () => {
            const run = new _1.Run({
                highlight: "005599",
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            { "w:highlight": { _attr: { "w:val": "005599" } } },
                            {
                                "w:highlightCs": {
                                    _attr: {
                                        "w:val": "005599",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#shadow()", () => {
        it("it should add shadow to the properties", () => {
            const run = new _1.Run({
                shading: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            { "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                            {
                                "w:shdCs": {
                                    _attr: {
                                        "w:val": "pct10",
                                        "w:fill": "00FFFF",
                                        "w:color": "FF0000",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#break()", () => {
        it("it should add break to the run", () => {
            const run = new _1.Run({
                break: 1,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:br": {} }],
            });
        });
        it("it should add two breaks to the run", () => {
            const run = new _1.Run({
                break: 2,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    { "w:br": {} },
                    {
                        "w:br": {},
                    },
                ],
            });
        });
    });
    describe("#font()", () => {
        it("should set the font as named", () => {
            const run = new _1.Run({
                font: {
                    name: "Times",
                },
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            {
                                "w:rFonts": {
                                    _attr: {
                                        "w:ascii": "Times",
                                        "w:cs": "Times",
                                        "w:eastAsia": "Times",
                                        "w:hAnsi": "Times",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("should set the font for ascii and eastAsia", () => {
            const run = new _1.Run({
                font: {
                    ascii: "Times",
                    eastAsia: "KaiTi",
                },
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [
                            {
                                "w:rFonts": {
                                    _attr: {
                                        "w:ascii": "Times",
                                        "w:eastAsia": "KaiTi",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#color", () => {
        it("should set the run to the color given", () => {
            const run = new _1.Run({
                color: "001122",
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:color": { _attr: { "w:val": "001122" } } }] }],
            });
        });
    });
    describe("#size", () => {
        it("should set the run to the given size", () => {
            const run = new _1.Run({
                size: 24,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    {
                        "w:rPr": [{ "w:sz": { _attr: { "w:val": 24 } } }, { "w:szCs": { _attr: { "w:val": 24 } } }],
                    },
                ],
            });
        });
    });
    describe("#rtl", () => {
        it("should set the run to the RTL mode", () => {
            const run = new _1.Run({
                rightToLeft: true,
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:rtl": { _attr: { "w:val": true } } }] }],
            });
        });
    });
    describe("#numberOfTotalPages", () => {
        it("should set the run to the RTL mode", () => {
            const run = new _1.Run({
                children: [run_1.PageNumber.TOTAL_PAGES],
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    { "w:fldChar": { _attr: { "w:fldCharType": "begin" } } },
                    { "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "NUMPAGES"] },
                    { "w:fldChar": { _attr: { "w:fldCharType": "separate" } } },
                    { "w:fldChar": { _attr: { "w:fldCharType": "end" } } },
                ],
            });
        });
    });
    describe("#numberOfTotalPagesSection", () => {
        it("should set the run to the RTL mode", () => {
            const run = new _1.Run({
                children: [run_1.PageNumber.TOTAL_PAGES_IN_SECTION],
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    { "w:fldChar": { _attr: { "w:fldCharType": "begin" } } },
                    { "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "SECTIONPAGES"] },
                    { "w:fldChar": { _attr: { "w:fldCharType": "separate" } } },
                    { "w:fldChar": { _attr: { "w:fldCharType": "end" } } },
                ],
            });
        });
    });
    describe("#pageNumber", () => {
        it("should set the run to the RTL mode", () => {
            const run = new _1.Run({
                children: [run_1.PageNumber.CURRENT],
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [
                    { "w:fldChar": { _attr: { "w:fldCharType": "begin" } } },
                    { "w:instrText": [{ _attr: { "xml:space": "preserve" } }, "PAGE"] },
                    { "w:fldChar": { _attr: { "w:fldCharType": "separate" } } },
                    { "w:fldChar": { _attr: { "w:fldCharType": "end" } } },
                ],
            });
        });
    });
    describe("#style", () => {
        it("should set the style to the given styleId", () => {
            const run = new _1.Run({
                style: "myRunStyle",
            });
            const tree = new formatter_1.Formatter().format(run);
            chai_1.expect(tree).to.deep.equal({
                "w:r": [{ "w:rPr": [{ "w:rStyle": { _attr: { "w:val": "myRunStyle" } } }] }],
            });
        });
    });
});
//# sourceMappingURL=run.spec.js.map
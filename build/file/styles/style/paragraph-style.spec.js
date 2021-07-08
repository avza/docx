"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const paragraph_1 = require("file/paragraph");
const underline_1 = require("file/paragraph/run/underline");
const table_1 = require("file/table");
const xml_components_1 = require("file/xml-components");
const paragraph_style_1 = require("./paragraph-style");
describe("ParagraphStyle", () => {
    describe("#constructor", () => {
        it("should set the style type to paragraph and use the given style id", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
            });
        });
        it("should set the name of the style, if given", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                name: "Style Name",
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    { "w:name": { _attr: { "w:val": "Style Name" } } },
                ],
            });
        });
    });
    describe("formatting methods: style attributes", () => {
        it("#basedOn", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", basedOn: "otherId" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    { "w:basedOn": { _attr: { "w:val": "otherId" } } },
                ],
            });
        });
        it("#quickFormat", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", quickFormat: true });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:qFormat": xml_components_1.EMPTY_OBJECT },
                ],
            });
        });
        it("#next", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", next: "otherId" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    { "w:next": { _attr: { "w:val": "otherId" } } },
                ],
            });
        });
    });
    describe("formatting methods: paragraph properties", () => {
        it("#indent", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    indent: { left: 720 },
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:ind": { _attr: { "w:left": 720 } } }],
                    },
                ],
            });
        });
        it("#spacing", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", paragraph: { spacing: { before: 50, after: 150 } } });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:spacing": { _attr: { "w:before": 50, "w:after": 150 } } }],
                    },
                ],
            });
        });
        it("#center", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    alignment: paragraph_1.AlignmentType.CENTER,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "center" } } }],
                    },
                ],
            });
        });
        it("#character spacing", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    characterSpacing: 24,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:spacing": { _attr: { "w:val": 24 } } }],
                    },
                ],
            });
        });
        it("#left", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    alignment: paragraph_1.AlignmentType.LEFT,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "left" } } }],
                    },
                ],
            });
        });
        it("#right", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    alignment: paragraph_1.AlignmentType.RIGHT,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "right" } } }],
                    },
                ],
            });
        });
        it("#justified", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    alignment: paragraph_1.AlignmentType.JUSTIFIED,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "both" } } }],
                    },
                ],
            });
        });
        it("#thematicBreak", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    thematicBreak: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [
                            {
                                "w:pBdr": [
                                    {
                                        "w:bottom": {
                                            _attr: {
                                                "w:color": "auto",
                                                "w:space": 1,
                                                "w:val": "single",
                                                "w:sz": 6,
                                            },
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
        it("#contextualSpacing", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    contextualSpacing: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [
                            {
                                "w:contextualSpacing": {
                                    _attr: {
                                        "w:val": 1,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("#leftTabStop", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    leftTabStop: 1200,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [{ "w:tab": { _attr: { "w:val": "left", "w:pos": 1200 } } }],
                            },
                        ],
                    },
                ],
            });
        });
        it("#maxRightTabStop", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    rightTabStop: paragraph_1.TabStopPosition.MAX,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [{ "w:tab": { _attr: { "w:val": "right", "w:pos": 9026 } } }],
                            },
                        ],
                    },
                ],
            });
        });
        it("#keepLines", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    keepLines: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:pPr": [{ "w:keepLines": xml_components_1.EMPTY_OBJECT }] },
                ],
            });
        });
        it("#keepNext", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    keepNext: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:pPr": [{ "w:keepNext": xml_components_1.EMPTY_OBJECT }] },
                ],
            });
        });
        it("#outlineLevel", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                paragraph: {
                    outlineLevel: 1,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    { "w:pPr": [{ "w:outlineLvl": { _attr: { "w:val": 1 } } }] },
                ],
            });
        });
    });
    describe("formatting methods: run properties", () => {
        const sizeTests = [
            {
                size: 24,
                expected: [{ "w:sz": { _attr: { "w:val": 24 } } }, { "w:szCs": { _attr: { "w:val": 24 } } }],
            },
            {
                size: 24,
                sizeComplexScript: true,
                expected: [{ "w:sz": { _attr: { "w:val": 24 } } }, { "w:szCs": { _attr: { "w:val": 24 } } }],
            },
            {
                size: 24,
                sizeComplexScript: false,
                expected: [{ "w:sz": { _attr: { "w:val": 24 } } }],
            },
            {
                size: 24,
                sizeComplexScript: 26,
                expected: [{ "w:sz": { _attr: { "w:val": 24 } } }, { "w:szCs": { _attr: { "w:val": 26 } } }],
            },
        ];
        sizeTests.forEach(({ size, sizeComplexScript, expected }) => {
            it(`#size ${size} cs ${sizeComplexScript}`, () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: { size, sizeComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [{ _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } }, { "w:rPr": expected }],
                });
            });
        });
        it("#smallCaps", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    smallCaps: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:smallCaps": { _attr: { "w:val": true } } }],
                    },
                ],
            });
        });
        it("#allCaps", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    allCaps: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:caps": { _attr: { "w:val": true } } }],
                    },
                ],
            });
        });
        it("#strike", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    strike: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:strike": { _attr: { "w:val": true } } }],
                    },
                ],
            });
        });
        it("#doubleStrike", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    doubleStrike: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:dstrike": { _attr: { "w:val": true } } }],
                    },
                ],
            });
        });
        it("#subScript", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    subScript: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "subscript" } } }],
                    },
                ],
            });
        });
        it("#superScript", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    superScript: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "superscript" } } }],
                    },
                ],
            });
        });
        it("#font by name", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    font: "Times",
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
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
        it("#font for ascii and eastAsia", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    font: {
                        ascii: "Times",
                        eastAsia: "KaiTi",
                    },
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
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
        const boldTests = [
            {
                bold: true,
                expected: [{ "w:b": { _attr: { "w:val": true } } }, { "w:bCs": { _attr: { "w:val": true } } }],
            },
            {
                bold: true,
                boldComplexScript: true,
                expected: [{ "w:b": { _attr: { "w:val": true } } }, { "w:bCs": { _attr: { "w:val": true } } }],
            },
            {
                bold: true,
                boldComplexScript: false,
                expected: [{ "w:b": { _attr: { "w:val": true } } }],
            },
        ];
        boldTests.forEach(({ bold, boldComplexScript, expected }) => {
            it(`#bold ${bold} cs ${boldComplexScript}`, () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: { bold, boldComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [{ _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } }, { "w:rPr": expected }],
                });
            });
        });
        const italicsTests = [
            {
                italics: true,
                expected: [{ "w:i": { _attr: { "w:val": true } } }, { "w:iCs": { _attr: { "w:val": true } } }],
            },
            {
                italics: true,
                italicsComplexScript: true,
                expected: [{ "w:i": { _attr: { "w:val": true } } }, { "w:iCs": { _attr: { "w:val": true } } }],
            },
            {
                italics: true,
                italicsComplexScript: false,
                expected: [{ "w:i": { _attr: { "w:val": true } } }],
            },
        ];
        italicsTests.forEach(({ italics, italicsComplexScript, expected }) => {
            it(`#italics ${italics} cs ${italicsComplexScript}`, () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: { italics, italicsComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [{ _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } }, { "w:rPr": expected }],
                });
            });
        });
        const highlightTests = [
            {
                highlight: "005599",
                expected: [{ "w:highlight": { _attr: { "w:val": "005599" } } }, { "w:highlightCs": { _attr: { "w:val": "005599" } } }],
            },
            {
                highlight: "005599",
                highlightComplexScript: true,
                expected: [{ "w:highlight": { _attr: { "w:val": "005599" } } }, { "w:highlightCs": { _attr: { "w:val": "005599" } } }],
            },
            {
                highlight: "005599",
                highlightComplexScript: false,
                expected: [{ "w:highlight": { _attr: { "w:val": "005599" } } }],
            },
            {
                highlight: "005599",
                highlightComplexScript: "550099",
                expected: [{ "w:highlight": { _attr: { "w:val": "005599" } } }, { "w:highlightCs": { _attr: { "w:val": "550099" } } }],
            },
        ];
        highlightTests.forEach(({ highlight, highlightComplexScript, expected }) => {
            it(`#highlight ${highlight} cs ${highlightComplexScript}`, () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: { highlight, highlightComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [{ _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } }, { "w:rPr": expected }],
                });
            });
        });
        const shadingTests = [
            {
                shadow: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
                expected: [
                    { "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                    { "w:shdCs": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                ],
            },
            {
                shading: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
                expected: [
                    { "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                    { "w:shdCs": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                ],
            },
            {
                shading: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
                shadingComplexScript: true,
                expected: [
                    { "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                    { "w:shdCs": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                ],
            },
            {
                shading: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
                shadingComplexScript: false,
                expected: [{ "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } }],
            },
            {
                shading: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "FF0000",
                },
                shadingComplexScript: {
                    type: table_1.ShadingType.PERCENT_10,
                    fill: "00FFFF",
                    color: "00FF00",
                },
                expected: [
                    { "w:shd": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "FF0000" } } },
                    { "w:shdCs": { _attr: { "w:val": "pct10", "w:fill": "00FFFF", "w:color": "00FF00" } } },
                ],
            },
        ];
        shadingTests.forEach(({ shadow, shading, shadingComplexScript, expected }) => {
            it("#shadow correctly", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: { shadow, shading, shadingComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [{ _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } }, { "w:rPr": expected }],
                });
            });
        });
        describe("#underline", () => {
            it("should set underline to 'single' if no arguments are given", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: {
                        underline: {},
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "single" } } }],
                        },
                    ],
                });
            });
            it("should set the style if given", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: {
                        underline: {
                            type: underline_1.UnderlineType.DOUBLE,
                        },
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "double" } } }],
                        },
                    ],
                });
            });
            it("should set the style and color if given", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: {
                        underline: {
                            type: underline_1.UnderlineType.DOUBLE,
                            color: "005599",
                        },
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "double", "w:color": "005599" } } }],
                        },
                    ],
                });
            });
        });
        describe("#emphasisMark", () => {
            it("should set emphasisMark to 'dot' if no arguments are given", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: {
                        emphasisMark: {},
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                        },
                    ],
                });
            });
            it("should set the style if given", () => {
                const style = new paragraph_style_1.StyleForParagraph({
                    id: "myStyleId",
                    run: {
                        emphasisMark: {
                            type: paragraph_1.EmphasisMarkType.DOT,
                        },
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                        },
                    ],
                });
            });
        });
        it("#color", () => {
            const style = new paragraph_style_1.StyleForParagraph({
                id: "myStyleId",
                run: {
                    color: "123456",
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:color": { _attr: { "w:val": "123456" } } }],
                    },
                ],
            });
        });
        it("#link", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", link: "MyLink" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:link": { _attr: { "w:val": "MyLink" } } },
                ],
            });
        });
        it("#semiHidden", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", semiHidden: true });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:semiHidden": xml_components_1.EMPTY_OBJECT },
                ],
            });
        });
        it("#uiPriority", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", uiPriority: 99 });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "paragraph", "w:styleId": "myStyleId" } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                ],
            });
        });
        it("#unhideWhenUsed", () => {
            const style = new paragraph_style_1.StyleForParagraph({ id: "myStyleId", unhideWhenUsed: true });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    {
                        _attr: {
                            "w:type": "paragraph",
                            "w:styleId": "myStyleId",
                        },
                    },
                    { "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT },
                ],
            });
        });
    });
});
//# sourceMappingURL=paragraph-style.spec.js.map
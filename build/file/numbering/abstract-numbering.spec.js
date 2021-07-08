"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const xml_components_1 = require("file/xml-components");
const paragraph_1 = require("../paragraph");
const underline_1 = require("../paragraph/run/underline");
const table_1 = require("../table");
const abstract_numbering_1 = require("./abstract-numbering");
const level_1 = require("./level");
describe("AbstractNumbering", () => {
    it("stores its ID at its .id property", () => {
        const abstractNumbering = new abstract_numbering_1.AbstractNumbering(5, []);
        chai_1.expect(abstractNumbering.id).to.equal(5);
    });
    describe("#createLevel", () => {
        it("creates a level with the given characteristics", () => {
            const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                {
                    level: 3,
                    format: level_1.LevelFormat.LOWER_LETTER,
                    text: "%1)",
                    alignment: paragraph_1.AlignmentType.END,
                },
            ]);
            const tree = new formatter_1.Formatter().format(abstractNumbering);
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ _attr: { "w:ilvl": 3, "w15:tentative": 1 } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:start": { _attr: { "w:val": 1 } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:lvlJc": { _attr: { "w:val": "end" } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:numFmt": { _attr: { "w:val": level_1.LevelFormat.LOWER_LETTER } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:lvlText": { _attr: { "w:val": "%1)" } } });
        });
        it("uses 'start' as the default alignment", () => {
            const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                {
                    level: 3,
                    format: level_1.LevelFormat.LOWER_LETTER,
                    text: "%1)",
                },
            ]);
            const tree = new formatter_1.Formatter().format(abstractNumbering);
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ _attr: { "w:ilvl": 3, "w15:tentative": 1 } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:start": { _attr: { "w:val": 1 } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:lvlJc": { _attr: { "w:val": "start" } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:numFmt": { _attr: { "w:val": level_1.LevelFormat.LOWER_LETTER } } });
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:lvlText": { _attr: { "w:val": "%1)" } } });
        });
        it("has suffix", () => {
            const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                {
                    level: 3,
                    format: level_1.LevelFormat.LOWER_LETTER,
                    text: "%1)",
                    alignment: paragraph_1.AlignmentType.END,
                    suffix: level_1.LevelSuffix.SPACE,
                },
            ]);
            const tree = new formatter_1.Formatter().format(abstractNumbering);
            chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:suff": { _attr: { "w:val": "space" } } });
        });
        describe("formatting methods: paragraph properties", () => {
            it("#indent", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                indent: { left: 720 },
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:ind": { _attr: { "w:left": 720 } } }],
                });
            });
            it("#spacing", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                spacing: { before: 50, after: 150 },
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:spacing": { _attr: { "w:before": 50, "w:after": 150 } } }],
                });
            });
            it("#center", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                alignment: paragraph_1.AlignmentType.CENTER,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:jc": { _attr: { "w:val": "center" } } }],
                });
            });
            it("#left", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                alignment: paragraph_1.AlignmentType.LEFT,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:jc": { _attr: { "w:val": "left" } } }],
                });
            });
            it("#right", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                alignment: paragraph_1.AlignmentType.RIGHT,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:jc": { _attr: { "w:val": "right" } } }],
                });
            });
            it("#justified", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                alignment: paragraph_1.AlignmentType.JUSTIFIED,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:jc": { _attr: { "w:val": "both" } } }],
                });
            });
            it("#thematicBreak", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                thematicBreak: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
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
                });
            });
            it("#leftTabStop", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                leftTabStop: 1200,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [
                        {
                            "w:tabs": [{ "w:tab": { _attr: { "w:val": "left", "w:pos": 1200 } } }],
                        },
                    ],
                });
            });
            it("#maxRightTabStop", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                rightTabStop: paragraph_1.TabStopPosition.MAX,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [
                        {
                            "w:tabs": [{ "w:tab": { _attr: { "w:val": "right", "w:pos": 9026 } } }],
                        },
                    ],
                });
            });
            it("#keepLines", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                keepLines: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:keepLines": xml_components_1.EMPTY_OBJECT }],
                });
            });
            it("#keepNext", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            paragraph: {
                                keepNext: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:pPr": [{ "w:keepNext": xml_components_1.EMPTY_OBJECT }],
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
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: { size, sizeComplexScript },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:rPr": expected });
                });
            });
            it("#smallCaps", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                smallCaps: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:smallCaps": { _attr: { "w:val": true } } }],
                });
            });
            it("#allCaps", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                allCaps: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:caps": { _attr: { "w:val": true } } }],
                });
            });
            it("#strike", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                strike: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:strike": { _attr: { "w:val": true } } }],
                });
            });
            it("#doubleStrike", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                doubleStrike: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:dstrike": { _attr: { "w:val": true } } }],
                });
            });
            it("#subScript", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                subScript: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "subscript" } } }],
                });
            });
            it("#superScript", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                superScript: true,
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:vertAlign": { _attr: { "w:val": "superscript" } } }],
                });
            });
            it("#font by name", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                font: "Times",
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
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
                });
            });
            it("#font for ascii and eastAsia", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                font: {
                                    ascii: "Times",
                                    eastAsia: "KaiTi",
                                },
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
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
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: { bold, boldComplexScript },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:rPr": expected });
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
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: { italics, italicsComplexScript },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:rPr": expected });
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
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: { highlight, highlightComplexScript },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:rPr": expected });
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
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: { shadow, shading, shadingComplexScript },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({ "w:rPr": expected });
                });
            });
            describe("#underline", () => {
                it("should set underline to 'single' if no arguments are given", () => {
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: {
                                    underline: {},
                                },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                        "w:rPr": [{ "w:u": { _attr: { "w:val": "single" } } }],
                    });
                });
                it("should set the style if given", () => {
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: {
                                    underline: {
                                        type: underline_1.UnderlineType.DOUBLE,
                                    },
                                },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                        "w:rPr": [{ "w:u": { _attr: { "w:val": "double" } } }],
                    });
                });
                it("should set the style and color if given", () => {
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: {
                                    underline: {
                                        type: underline_1.UnderlineType.DOUBLE,
                                        color: "005599",
                                    },
                                },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                        "w:rPr": [{ "w:u": { _attr: { "w:val": "double", "w:color": "005599" } } }],
                    });
                });
            });
            describe("#emphasisMark", () => {
                it("should set emphasisMark to 'dot' if no arguments are given", () => {
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: {
                                    emphasisMark: {},
                                },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                        "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                    });
                });
                it("should set the style if given", () => {
                    const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                        {
                            level: 0,
                            format: level_1.LevelFormat.LOWER_ROMAN,
                            text: "%0.",
                            style: {
                                run: {
                                    emphasisMark: {
                                        type: paragraph_1.EmphasisMarkType.DOT,
                                    },
                                },
                            },
                        },
                    ]);
                    const tree = new formatter_1.Formatter().format(abstractNumbering);
                    chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                        "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                    });
                });
            });
            it("#color", () => {
                const abstractNumbering = new abstract_numbering_1.AbstractNumbering(1, [
                    {
                        level: 0,
                        format: level_1.LevelFormat.LOWER_ROMAN,
                        text: "%0.",
                        style: {
                            run: {
                                color: "123456",
                            },
                        },
                    },
                ]);
                const tree = new formatter_1.Formatter().format(abstractNumbering);
                chai_1.expect(tree["w:abstractNum"][2]["w:lvl"]).to.include({
                    "w:rPr": [{ "w:color": { _attr: { "w:val": "123456" } } }],
                });
            });
        });
    });
});
//# sourceMappingURL=abstract-numbering.spec.js.map
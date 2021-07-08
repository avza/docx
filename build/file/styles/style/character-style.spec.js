"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const emphasis_mark_1 = require("file/paragraph/run/emphasis-mark");
const underline_1 = require("file/paragraph/run/underline");
const table_1 = require("file/table");
const xml_components_1 = require("file/xml-components");
const character_style_1 = require("./character-style");
describe("CharacterStyle", () => {
    describe("#constructor", () => {
        it("should set the style type to character and use the given style id", () => {
            const style = new character_style_1.StyleForCharacter({ id: "myStyleId" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should set the name of the style, if given", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                name: "Style Name",
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    { "w:name": { _attr: { "w:val": "Style Name" } } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add smallCaps", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    smallCaps: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:smallCaps": { _attr: { "w:val": true } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add allCaps", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    allCaps: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:caps": { _attr: { "w:val": true } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add strike", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    strike: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:strike": { _attr: { "w:val": true } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add double strike", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    doubleStrike: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:dstrike": { _attr: { "w:val": true } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add sub script", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    subScript: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [
                            {
                                "w:vertAlign": {
                                    _attr: {
                                        "w:val": "subscript",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add font by name", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    font: "test font",
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [
                            {
                                "w:rFonts": {
                                    _attr: {
                                        "w:ascii": "test font",
                                        "w:cs": "test font",
                                        "w:eastAsia": "test font",
                                        "w:hAnsi": "test font",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add font for ascii and eastAsia", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    font: {
                        ascii: "test font ascii",
                        eastAsia: "test font eastAsia",
                    },
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [
                            {
                                "w:rFonts": {
                                    _attr: {
                                        "w:ascii": "test font ascii",
                                        "w:eastAsia": "test font eastAsia",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("should add character spacing", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    characterSpacing: 100,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:spacing": { _attr: { "w:val": 100 } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
    });
    describe("formatting methods: style attributes", () => {
        it("#basedOn", () => {
            const style = new character_style_1.StyleForCharacter({ id: "myStyleId", basedOn: "otherId" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                    { "w:basedOn": { _attr: { "w:val": "otherId" } } },
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
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: { size, sizeComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": expected,
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
        });
        describe("#underline", () => {
            it("should set underline to 'single' if no arguments are given", () => {
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: {
                        underline: {},
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "single" } } }],
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
            it("should set the style if given", () => {
                const style = new character_style_1.StyleForCharacter({
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
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "double" } } }],
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
            it("should set the style and color if given", () => {
                const style = new character_style_1.StyleForCharacter({
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
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:u": { _attr: { "w:val": "double", "w:color": "005599" } } }],
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
        });
        describe("#emphasisMark", () => {
            it("should set emphasisMark to 'dot' if no arguments are given", () => {
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: {
                        emphasisMark: {},
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
            it("should set the style if given", () => {
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: {
                        emphasisMark: {
                            type: emphasis_mark_1.EmphasisMarkType.DOT,
                        },
                    },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": [{ "w:em": { _attr: { "w:val": "dot" } } }],
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
        });
        it("#superScript", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    superScript: true,
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [
                            {
                                "w:vertAlign": {
                                    _attr: {
                                        "w:val": "superscript",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                ],
            });
        });
        it("#color", () => {
            const style = new character_style_1.StyleForCharacter({
                id: "myStyleId",
                run: {
                    color: "123456",
                },
            });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:rPr": [{ "w:color": { _attr: { "w:val": "123456" } } }],
                    },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
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
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: { bold, boldComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": expected,
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
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
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: { italics, italicsComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": expected,
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
        });
        it("#link", () => {
            const style = new character_style_1.StyleForCharacter({ id: "myStyleId", link: "MyLink" });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    {
                        "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                    },
                    { "w:link": { _attr: { "w:val": "MyLink" } } },
                ],
            });
        });
        it("#semiHidden", () => {
            const style = new character_style_1.StyleForCharacter({ id: "myStyleId", semiHidden: true });
            const tree = new formatter_1.Formatter().format(style);
            chai_1.expect(tree).to.deep.equal({
                "w:style": [
                    { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                    {
                        "w:uiPriority": {
                            _attr: {
                                "w:val": 99,
                            },
                        },
                    },
                    { "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT },
                    { "w:semiHidden": xml_components_1.EMPTY_OBJECT },
                ],
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
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: { highlight, highlightComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": expected,
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
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
                const style = new character_style_1.StyleForCharacter({
                    id: "myStyleId",
                    run: { shadow, shading, shadingComplexScript },
                });
                const tree = new formatter_1.Formatter().format(style);
                chai_1.expect(tree).to.deep.equal({
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "myStyleId" } },
                        {
                            "w:rPr": expected,
                        },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                });
            });
        });
    });
});
//# sourceMappingURL=character-style.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const shortid = require("shortid");
const sinon_1 = require("sinon");
const formatter_1 = require("export/formatter");
const xml_components_1 = require("file/xml-components");
const shading_1 = require("../table/shading");
const formatting_1 = require("./formatting");
const links_1 = require("./links");
const paragraph_1 = require("./paragraph");
const run_1 = require("./run");
describe("Paragraph", () => {
    describe("#constructor()", () => {
        it("should create valid JSON", () => {
            const paragraph = new paragraph_1.Paragraph("");
            const stringifiedJson = JSON.stringify(paragraph);
            try {
                JSON.parse(stringifiedJson);
            }
            catch (e) {
                chai_1.assert.isTrue(false);
            }
            chai_1.assert.isTrue(true);
        });
        it("should create have valid properties", () => {
            const paragraph = new paragraph_1.Paragraph("");
            const stringifiedJson = JSON.stringify(paragraph);
            const newJson = JSON.parse(stringifiedJson);
            chai_1.assert.equal(newJson.root[0].rootKey, "w:pPr");
        });
    });
    describe("#heading1()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_1,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading1" } } }],
                    },
                ],
            });
        });
    });
    describe("#heading2()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_2,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading2" } } }],
                    },
                ],
            });
        });
    });
    describe("#heading3()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_3,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading3" } } }],
                    },
                ],
            });
        });
    });
    describe("#heading4()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_4,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading4" } } }],
                    },
                ],
            });
        });
    });
    describe("#heading5()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_5,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading5" } } }],
                    },
                ],
            });
        });
    });
    describe("#heading6()", () => {
        it("should add heading style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.HEADING_6,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Heading6" } } }],
                    },
                ],
            });
        });
    });
    describe("#title()", () => {
        it("should add title style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                heading: formatting_1.HeadingLevel.TITLE,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "Title" } } }],
                    },
                ],
            });
        });
    });
    describe("#center()", () => {
        it("should add center alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.CENTER,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "center" } } }],
                    },
                ],
            });
        });
    });
    describe("#left()", () => {
        it("should add left alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.LEFT,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "left" } } }],
                    },
                ],
            });
        });
    });
    describe("#right()", () => {
        it("should add right alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.RIGHT,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "right" } } }],
                    },
                ],
            });
        });
    });
    describe("#start()", () => {
        it("should add start alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.START,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "start" } } }],
                    },
                ],
            });
        });
    });
    describe("#end()", () => {
        it("should add end alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.END,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "end" } } }],
                    },
                ],
            });
        });
    });
    describe("#distribute()", () => {
        it("should add distribute alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.DISTRIBUTE,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "distribute" } } }],
                    },
                ],
            });
        });
    });
    describe("#justified()", () => {
        it("should add justified alignment to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                alignment: formatting_1.AlignmentType.JUSTIFIED,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:jc": { _attr: { "w:val": "both" } } }],
                    },
                ],
            });
        });
    });
    describe("#maxRightTabStop()", () => {
        it("should add right tab stop to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                tabStops: [
                    {
                        type: formatting_1.TabStopType.RIGHT,
                        position: formatting_1.TabStopPosition.MAX,
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [
                                    {
                                        "w:tab": {
                                            _attr: {
                                                "w:pos": 9026,
                                                "w:val": "right",
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
    });
    describe("#leftTabStop()", () => {
        it("should add leftTabStop to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                tabStops: [
                    {
                        type: formatting_1.TabStopType.LEFT,
                        position: 100,
                        leader: formatting_1.LeaderType.HYPHEN,
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [
                                    {
                                        "w:tab": {
                                            _attr: {
                                                "w:pos": 100,
                                                "w:val": "left",
                                                "w:leader": "hyphen",
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
    });
    describe("#rightTabStop()", () => {
        it("should add rightTabStop to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                tabStops: [
                    {
                        type: formatting_1.TabStopType.RIGHT,
                        position: 100,
                        leader: formatting_1.LeaderType.DOT,
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [
                                    {
                                        "w:tab": {
                                            _attr: {
                                                "w:pos": 100,
                                                "w:val": "right",
                                                "w:leader": "dot",
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
    });
    describe("#centerTabStop()", () => {
        it("should add centerTabStop to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                tabStops: [
                    {
                        type: formatting_1.TabStopType.CENTER,
                        position: 100,
                        leader: formatting_1.LeaderType.MIDDLE_DOT,
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:tabs": [
                                    {
                                        "w:tab": {
                                            _attr: {
                                                "w:pos": 100,
                                                "w:val": "center",
                                                "w:leader": "middleDot",
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
    });
    describe("#contextualSpacing()", () => {
        it("should add contextualSpacing to JSON, and set 1 if true", () => {
            const paragraph = new paragraph_1.Paragraph({
                contextualSpacing: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:contextualSpacing": { _attr: { "w:val": 1 } } }],
                    },
                ],
            });
        });
    });
    describe("#thematicBreak()", () => {
        it("should add thematic break to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                thematicBreak: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:pBdr": [
                                    {
                                        "w:bottom": {
                                            _attr: {
                                                "w:val": "single",
                                                "w:color": "auto",
                                                "w:space": 1,
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
    });
    describe("#paragraphBorders()", () => {
        it("should add a left and right border to a paragraph", () => {
            const paragraph = new paragraph_1.Paragraph({
                border: {
                    left: {
                        color: "auto",
                        space: 1,
                        value: "single",
                        size: 6,
                    },
                    right: {
                        color: "auto",
                        space: 1,
                        value: "single",
                        size: 6,
                    },
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:pBdr": [
                                    {
                                        "w:left": {
                                            _attr: {
                                                "w:color": "auto",
                                                "w:space": 1,
                                                "w:sz": 6,
                                                "w:val": "single",
                                            },
                                        },
                                    },
                                    {
                                        "w:right": {
                                            _attr: {
                                                "w:color": "auto",
                                                "w:space": 1,
                                                "w:sz": 6,
                                                "w:val": "single",
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
    });
    describe("#pageBreak()", () => {
        it("should add page break to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                children: [new formatting_1.PageBreak()],
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:r": [{ "w:br": { _attr: { "w:type": "page" } } }],
                    },
                ],
            });
        });
    });
    describe("#pageBreakBefore()", () => {
        it("should add page break before to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                pageBreakBefore: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:pageBreakBefore": xml_components_1.EMPTY_OBJECT,
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#bullet()", () => {
        it("should default to 0 indent level if no bullet was specified", () => {
            const paragraph = new paragraph_1.Paragraph({
                bullet: {
                    level: 0,
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.have.property("w:p").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]).to.have.property("w:pPr").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]["w:pPr"][0]).to.deep.equal({
                "w:pStyle": { _attr: { "w:val": "ListParagraph" } },
            });
        });
        it("should add list paragraph style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                bullet: {
                    level: 0,
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.have.property("w:p").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]).to.have.property("w:pPr").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]["w:pPr"][0]).to.deep.equal({
                "w:pStyle": { _attr: { "w:val": "ListParagraph" } },
            });
        });
        it("it should add numbered properties", () => {
            const paragraph = new paragraph_1.Paragraph({
                bullet: {
                    level: 1,
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.have.property("w:p").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]).to.have.property("w:pPr").which.is.an("array").which.has.length.at.least(2);
            chai_1.expect(tree["w:p"][0]["w:pPr"][1]).to.deep.equal({
                "w:numPr": [{ "w:ilvl": { _attr: { "w:val": 1 } } }, { "w:numId": { _attr: { "w:val": 1 } } }],
            });
        });
    });
    describe("#setNumbering", () => {
        it("should add list paragraph style to JSON", () => {
            const paragraph = new paragraph_1.Paragraph({
                numbering: {
                    reference: "test id",
                    level: 0,
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.have.property("w:p").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]).to.have.property("w:pPr").which.is.an("array").which.has.length.at.least(1);
            chai_1.expect(tree["w:p"][0]["w:pPr"][0]).to.deep.equal({
                "w:pStyle": { _attr: { "w:val": "ListParagraph" } },
            });
        });
        it("it should add numbered properties", () => {
            const paragraph = new paragraph_1.Paragraph({
                numbering: {
                    reference: "test id",
                    level: 0,
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            { "w:pStyle": { _attr: { "w:val": "ListParagraph" } } },
                            {
                                "w:numPr": [{ "w:ilvl": { _attr: { "w:val": 0 } } }, { "w:numId": { _attr: { "w:val": "{test id}" } } }],
                            },
                        ],
                    },
                ],
            });
        });
    });
    it("it should add bookmark", () => {
        sinon_1.stub(shortid, "generate").callsFake(() => {
            return "test-unique-id";
        });
        const paragraph = new paragraph_1.Paragraph({
            children: [new links_1.Bookmark("test-id", "test")],
        });
        const tree = new formatter_1.Formatter().format(paragraph);
        chai_1.expect(tree).to.deep.equal({
            "w:p": [
                {
                    "w:bookmarkStart": {
                        _attr: {
                            "w:id": "test-unique-id",
                            "w:name": "test-id",
                        },
                    },
                },
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
                {
                    "w:bookmarkEnd": {
                        _attr: {
                            "w:id": "test-unique-id",
                        },
                    },
                },
            ],
        });
    });
    describe("#style", () => {
        it("should set the paragraph style to the given styleId", () => {
            const paragraph = new paragraph_1.Paragraph({
                style: "myFancyStyle",
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:pStyle": { _attr: { "w:val": "myFancyStyle" } } }],
                    },
                ],
            });
        });
    });
    describe("#indent", () => {
        it("should set the paragraph indent to the given values", () => {
            const paragraph = new paragraph_1.Paragraph({
                indent: { left: 720 },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:ind": { _attr: { "w:left": 720 } } }],
                    },
                ],
            });
        });
    });
    describe("#spacing", () => {
        it("should set the paragraph spacing to the given values", () => {
            const paragraph = new paragraph_1.Paragraph({
                spacing: { before: 90, line: 50 },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:spacing": { _attr: { "w:before": 90, "w:line": 50 } } }],
                    },
                ],
            });
        });
    });
    describe("#keepLines", () => {
        it("should set the paragraph keepLines sub-component", () => {
            const paragraph = new paragraph_1.Paragraph({
                keepLines: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [{ "w:pPr": [{ "w:keepLines": xml_components_1.EMPTY_OBJECT }] }],
            });
        });
    });
    describe("#keepNext", () => {
        it("should set the paragraph keepNext sub-component", () => {
            const paragraph = new paragraph_1.Paragraph({
                keepNext: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [{ "w:pPr": [{ "w:keepNext": xml_components_1.EMPTY_OBJECT }] }],
            });
        });
    });
    describe("#bidirectional", () => {
        it("set paragraph right to left layout", () => {
            const paragraph = new paragraph_1.Paragraph({
                bidirectional: true,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [{ "w:pPr": [{ "w:bidi": xml_components_1.EMPTY_OBJECT }] }],
            });
        });
    });
    describe("#outlineLevel", () => {
        it("should set paragraph outline level to the given value", () => {
            const paragraph = new paragraph_1.Paragraph({
                outlineLevel: 0,
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [{ "w:outlineLvl": { _attr: { "w:val": 0 } } }],
                    },
                ],
            });
        });
    });
    describe("#shading", () => {
        it("should set shading to the given value", () => {
            const paragraph = new paragraph_1.Paragraph({
                shading: {
                    type: shading_1.ShadingType.REVERSE_DIAGONAL_STRIPE,
                    color: "00FFFF",
                    fill: "FF0000",
                },
            });
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:pPr": [
                            {
                                "w:shd": {
                                    _attr: {
                                        "w:color": "00FFFF",
                                        "w:fill": "FF0000",
                                        "w:val": "reverseDiagStripe",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#prepForXml", () => {
        it("should set Internal Hyperlink", () => {
            const paragraph = new paragraph_1.Paragraph({
                children: [
                    new links_1.ExternalHyperlink({
                        child: new run_1.TextRun("test"),
                        link: "http://www.google.com",
                    }),
                ],
            });
            const fileMock = {
                Relationships: {
                    createRelationship: () => ({}),
                },
            };
            paragraph.prepForXml(fileMock);
            const tree = new formatter_1.Formatter().format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:hyperlink": [
                            {
                                _attr: {
                                    "r:id": "rIdtest-unique-id",
                                    "w:history": 1,
                                },
                            },
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
            });
        });
    });
});
//# sourceMappingURL=paragraph.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = require("sinon");
const formatter_1 = require("export/formatter");
const file_1 = require("./file");
const header_1 = require("./header");
const paragraph_1 = require("./paragraph");
const table_1 = require("./table");
const table_of_contents_1 = require("./table-of-contents");
describe("File", () => {
    describe("#constructor", () => {
        it("should create with correct headers and footers by default", () => {
            const doc = new file_1.File();
            doc.addSection({
                children: [],
            });
            const tree = new formatter_1.Formatter().format(doc.Document.View.Body);
            chai_1.expect(tree["w:body"][0]["w:sectPr"][4]["w:headerReference"]._attr["w:type"]).to.equal("default");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][5]["w:footerReference"]._attr["w:type"]).to.equal("default");
        });
        it("should create with correct headers and footers", () => {
            const doc = new file_1.File();
            doc.addSection({
                headers: {
                    default: new header_1.Header(),
                },
                footers: {
                    default: new header_1.Footer(),
                },
                children: [],
            });
            const tree = new formatter_1.Formatter().format(doc.Document.View.Body);
            chai_1.expect(tree["w:body"][0]["w:sectPr"][4]["w:headerReference"]._attr["w:type"]).to.equal("default");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][5]["w:footerReference"]._attr["w:type"]).to.equal("default");
        });
        it("should create with first headers and footers", () => {
            const doc = new file_1.File();
            doc.addSection({
                headers: {
                    first: new header_1.Header(),
                },
                footers: {
                    first: new header_1.Footer(),
                },
                children: [],
            });
            const tree = new formatter_1.Formatter().format(doc.Document.View.Body);
            chai_1.expect(tree["w:body"][0]["w:sectPr"][5]["w:headerReference"]._attr["w:type"]).to.equal("first");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][7]["w:footerReference"]._attr["w:type"]).to.equal("first");
        });
        it("should create with correct headers", () => {
            const doc = new file_1.File();
            doc.addSection({
                headers: {
                    default: new header_1.Header(),
                    first: new header_1.Header(),
                    even: new header_1.Header(),
                },
                footers: {
                    default: new header_1.Footer(),
                    first: new header_1.Footer(),
                    even: new header_1.Footer(),
                },
                children: [],
            });
            const tree = new formatter_1.Formatter().format(doc.Document.View.Body);
            chai_1.expect(tree["w:body"][0]["w:sectPr"][4]["w:headerReference"]._attr["w:type"]).to.equal("default");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][5]["w:headerReference"]._attr["w:type"]).to.equal("first");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][6]["w:headerReference"]._attr["w:type"]).to.equal("even");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][7]["w:footerReference"]._attr["w:type"]).to.equal("default");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][8]["w:footerReference"]._attr["w:type"]).to.equal("first");
            chai_1.expect(tree["w:body"][0]["w:sectPr"][9]["w:footerReference"]._attr["w:type"]).to.equal("even");
        });
        it("should add child", () => {
            const doc = new file_1.File(undefined, undefined, [
                {
                    children: [new paragraph_1.Paragraph("test")],
                },
            ]);
            const tree = new formatter_1.Formatter().format(doc.Document.View.Body);
            chai_1.expect(tree).to.deep.equal({
                "w:body": [
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
                    {
                        "w:sectPr": [
                            {
                                "w:pgSz": {
                                    _attr: {
                                        "w:h": 16838,
                                        "w:orient": "portrait",
                                        "w:w": 11906,
                                    },
                                },
                            },
                            {
                                "w:pgMar": {
                                    _attr: {
                                        "w:bottom": 1440,
                                        "w:footer": 708,
                                        "w:gutter": 0,
                                        "w:header": 708,
                                        "w:left": 1440,
                                        "w:mirrorMargins": false,
                                        "w:right": 1440,
                                        "w:top": 1440,
                                    },
                                },
                            },
                            {
                                "w:cols": {
                                    _attr: {
                                        "w:num": 1,
                                        "w:sep": false,
                                        "w:space": 708,
                                    },
                                },
                            },
                            {
                                "w:docGrid": {
                                    _attr: {
                                        "w:linePitch": 360,
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#addSection", () => {
        it("should call the underlying document's add a Paragraph", () => {
            const file = new file_1.File();
            const spy = sinon.spy(file.Document.View, "add");
            file.addSection({
                children: [new paragraph_1.Paragraph({})],
            });
            chai_1.expect(spy.called).to.equal(true);
        });
        it("should call the underlying document's add when adding a Table", () => {
            const file = new file_1.File();
            const spy = sinon.spy(file.Document.View, "add");
            file.addSection({
                children: [
                    new table_1.Table({
                        rows: [
                            new table_1.TableRow({
                                children: [
                                    new table_1.TableCell({
                                        children: [new paragraph_1.Paragraph("hello")],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
            chai_1.expect(spy.called).to.equal(true);
        });
        it("should call the underlying document's add when adding an Image (paragraph)", () => {
            const file = new file_1.File();
            const spy = sinon.spy(file.Document.View, "add");
            file.addSection({
                children: [new paragraph_1.Paragraph("")],
            });
            chai_1.expect(spy.called).to.equal(true);
        });
    });
    describe("#addSection", () => {
        it("should call the underlying document's add", () => {
            const file = new file_1.File();
            const spy = sinon.spy(file.Document.View, "add");
            file.addSection({
                children: [new table_of_contents_1.TableOfContents()],
            });
            chai_1.expect(spy.called).to.equal(true);
        });
    });
    describe("#addTrackRevisionsFeature", () => {
        it("should call the underlying document's add", () => {
            const file = new file_1.File({
                features: {
                    trackRevisions: true,
                },
            });
            chai_1.expect(file.Settings["trackRevisions"]).to.exist;
        });
    });
    describe("#createFootnote", () => {
        it("should create footnote", () => {
            const wrapper = new file_1.File({
                footnotes: [new paragraph_1.Paragraph("hello")],
            });
            const tree = new formatter_1.Formatter().format(wrapper.FootNotes.View);
            chai_1.expect(tree).to.deep.equal({
                "w:footnotes": [
                    {
                        _attr: {
                            "mc:Ignorable": "w14 w15 wp14",
                            "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
                            "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
                            "xmlns:o": "urn:schemas-microsoft-com:office:office",
                            "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                            "xmlns:v": "urn:schemas-microsoft-com:vml",
                            "xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                            "xmlns:w10": "urn:schemas-microsoft-com:office:word",
                            "xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
                            "xmlns:w15": "http://schemas.microsoft.com/office/word/2012/wordml",
                            "xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
                            "xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                            "xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                            "xmlns:wpc": "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                            "xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                            "xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                            "xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                        },
                    },
                    {
                        "w:footnote": [
                            {
                                _attr: {
                                    "w:id": -1,
                                    "w:type": "separator",
                                },
                            },
                            {
                                "w:p": [
                                    {
                                        "w:pPr": [
                                            {
                                                "w:spacing": {
                                                    _attr: {
                                                        "w:after": 0,
                                                        "w:line": 240,
                                                        "w:lineRule": "auto",
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        "w:r": [
                                            {
                                                "w:rPr": [
                                                    {
                                                        "w:rStyle": {
                                                            _attr: {
                                                                "w:val": "FootnoteReference",
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                "w:footnoteRef": {},
                                            },
                                        ],
                                    },
                                    {
                                        "w:r": [
                                            {
                                                "w:separator": {},
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "w:footnote": [
                            {
                                _attr: {
                                    "w:id": 0,
                                    "w:type": "continuationSeparator",
                                },
                            },
                            {
                                "w:p": [
                                    {
                                        "w:pPr": [
                                            {
                                                "w:spacing": {
                                                    _attr: {
                                                        "w:after": 0,
                                                        "w:line": 240,
                                                        "w:lineRule": "auto",
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        "w:r": [
                                            {
                                                "w:rPr": [
                                                    {
                                                        "w:rStyle": {
                                                            _attr: {
                                                                "w:val": "FootnoteReference",
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                "w:footnoteRef": {},
                                            },
                                        ],
                                    },
                                    {
                                        "w:r": [
                                            {
                                                "w:continuationSeparator": {},
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "w:footnote": [
                            {
                                _attr: {
                                    "w:id": 1,
                                },
                            },
                            {
                                "w:p": [
                                    {
                                        "w:r": [
                                            {
                                                "w:rPr": [
                                                    {
                                                        "w:rStyle": {
                                                            _attr: {
                                                                "w:val": "FootnoteReference",
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                "w:footnoteRef": {},
                                            },
                                        ],
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
                                                    "hello",
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
});
//# sourceMappingURL=file.spec.js.map
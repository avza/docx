"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const index_1 = require("../../index");
const deleted_text_run_1 = require("./deleted-text-run");
describe("DeletedTextRun", () => {
    describe("#constructor", () => {
        it("should create a deleted text run", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({ text: "some text", id: 0, date: "123", author: "Author" });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "some text",
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#constructor with formatting", () => {
        it("should create a deleted text run", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({ text: "some text", bold: true, id: 0, date: "123", author: "Author" });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:rPr": [
                                    {
                                        "w:b": {
                                            _attr: {
                                                "w:val": true,
                                            },
                                        },
                                    },
                                    {
                                        "w:bCs": {
                                            _attr: {
                                                "w:val": true,
                                            },
                                        },
                                    },
                                ],
                            },
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "some text",
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("#break()", () => {
        it("should add a break", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({
                break: 1,
                children: ["some text"],
                id: 0,
                date: "123",
                author: "Author",
            });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:br": {},
                            },
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "some text",
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("page numbering", () => {
        it("should be able to delete the total pages", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({
                children: [" to ", index_1.PageNumber.TOTAL_PAGES],
                id: 0,
                date: "123",
                author: "Author",
            });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    " to ",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "begin",
                                    },
                                },
                            },
                            {
                                "w:delInstrText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "NUMPAGES",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "separate",
                                    },
                                },
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "end",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("should be able to delete the total pages in section", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({
                children: [" to ", index_1.PageNumber.TOTAL_PAGES_IN_SECTION],
                id: 0,
                date: "123",
                author: "Author",
            });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    " to ",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "begin",
                                    },
                                },
                            },
                            {
                                "w:delInstrText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "SECTIONPAGES",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "separate",
                                    },
                                },
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "end",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
        it("should be able to delete the current page", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({
                children: [" to ", index_1.PageNumber.CURRENT],
                id: 0,
                date: "123",
                author: "Author",
            });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    " to ",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "begin",
                                    },
                                },
                            },
                            {
                                "w:delInstrText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "PAGE",
                                ],
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "separate",
                                    },
                                },
                            },
                            {
                                "w:fldChar": {
                                    _attr: {
                                        "w:fldCharType": "end",
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    });
    describe("footnote references", () => {
        it("should add a valid footnote reference", () => {
            const deletedTextRun = new deleted_text_run_1.DeletedTextRun({
                children: ["some text", new index_1.FootnoteReferenceRun(1)],
                id: 0,
                date: "123",
                author: "Author",
            });
            const tree = new formatter_1.Formatter().format(deletedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:del": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:delText": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "some text",
                                ],
                            },
                            {
                                "w:r": [
                                    { "w:rPr": [{ "w:rStyle": { _attr: { "w:val": "FootnoteReference" } } }] },
                                    { "w:footnoteReference": { _attr: { "w:id": 1 } } },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=deleted-text-run.spec.js.map
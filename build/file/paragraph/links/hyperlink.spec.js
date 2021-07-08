"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const run_1 = require("../run");
const hyperlink_1 = require("./hyperlink");
describe("ConcreteHyperlink", () => {
    let hyperlink;
    beforeEach(() => {
        hyperlink = new hyperlink_1.ConcreteHyperlink(new run_1.TextRun({
            text: "https://example.com",
            style: "Hyperlink",
        }), "superid");
    });
    describe("#constructor()", () => {
        it("should create a hyperlink with correct root key", () => {
            const tree = new formatter_1.Formatter().format(hyperlink);
            chai_1.expect(tree).to.deep.equal({
                "w:hyperlink": [
                    {
                        _attr: {
                            "w:history": 1,
                            "r:id": "rIdsuperid",
                        },
                    },
                    {
                        "w:r": [
                            { "w:rPr": [{ "w:rStyle": { _attr: { "w:val": "Hyperlink" } } }] },
                            { "w:t": [{ _attr: { "xml:space": "preserve" } }, "https://example.com"] },
                        ],
                    },
                ],
            });
        });
        describe("with optional anchor parameter", () => {
            beforeEach(() => {
                hyperlink = new hyperlink_1.ConcreteHyperlink(new run_1.TextRun({
                    text: "Anchor Text",
                    style: "Hyperlink",
                }), "superid2", "anchor");
            });
            it("should create an internal link with anchor tag", () => {
                const tree = new formatter_1.Formatter().format(hyperlink);
                chai_1.expect(tree).to.deep.equal({
                    "w:hyperlink": [
                        {
                            _attr: {
                                "w:history": 1,
                                "w:anchor": "anchor",
                            },
                        },
                        {
                            "w:r": [
                                { "w:rPr": [{ "w:rStyle": { _attr: { "w:val": "Hyperlink" } } }] },
                                { "w:t": [{ _attr: { "xml:space": "preserve" } }, "Anchor Text"] },
                            ],
                        },
                    ],
                });
            });
        });
    });
});
describe("ExternalHyperlink", () => {
    describe("#constructor()", () => {
        it("should create", () => {
            const externalHyperlink = new hyperlink_1.ExternalHyperlink({
                child: new run_1.TextRun("test"),
                link: "http://www.google.com",
            });
            chai_1.expect(externalHyperlink.options.link).to.equal("http://www.google.com");
        });
    });
});
describe("InternalHyperlink", () => {
    describe("#constructor()", () => {
        it("should create", () => {
            const internalHyperlink = new hyperlink_1.InternalHyperlink({
                child: new run_1.TextRun("test"),
                anchor: "test-id",
            });
            const tree = new formatter_1.Formatter().format(internalHyperlink);
            chai_1.expect(tree).to.deep.equal({
                "w:hyperlink": [
                    {
                        _attr: {
                            "w:anchor": "test-id",
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
            });
        });
    });
});
//# sourceMappingURL=hyperlink.spec.js.map
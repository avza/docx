"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const content_types_1 = require("./content-types");
describe("ContentTypes", () => {
    let contentTypes;
    beforeEach(() => {
        contentTypes = new content_types_1.ContentTypes();
    });
    describe("#constructor()", () => {
        it("should create default content types", () => {
            const tree = new formatter_1.Formatter().format(contentTypes);
            chai_1.expect(tree["Types"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["Types"][0]).to.deep.equal({ _attr: { xmlns: "http://schemas.openxmlformats.org/package/2006/content-types" } });
            chai_1.expect(tree["Types"][1]).to.deep.equal({ Default: { _attr: { ContentType: "image/png", Extension: "png" } } });
            chai_1.expect(tree["Types"][2]).to.deep.equal({ Default: { _attr: { ContentType: "image/jpeg", Extension: "jpeg" } } });
            chai_1.expect(tree["Types"][3]).to.deep.equal({ Default: { _attr: { ContentType: "image/jpeg", Extension: "jpg" } } });
            chai_1.expect(tree["Types"][4]).to.deep.equal({ Default: { _attr: { ContentType: "image/bmp", Extension: "bmp" } } });
            chai_1.expect(tree["Types"][5]).to.deep.equal({ Default: { _attr: { ContentType: "image/gif", Extension: "gif" } } });
            chai_1.expect(tree["Types"][6]).to.deep.equal({
                Default: { _attr: { ContentType: "application/vnd.openxmlformats-package.relationships+xml", Extension: "rels" } },
            });
            chai_1.expect(tree["Types"][7]).to.deep.equal({ Default: { _attr: { ContentType: "application/xml", Extension: "xml" } } });
            chai_1.expect(tree["Types"][8]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
                        PartName: "/word/document.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][9]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
                        PartName: "/word/styles.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][10]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-package.core-properties+xml",
                        PartName: "/docProps/core.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][11]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.custom-properties+xml",
                        PartName: "/docProps/custom.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][12]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.extended-properties+xml",
                        PartName: "/docProps/app.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][13]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
                        PartName: "/word/numbering.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][14]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
                        PartName: "/word/footnotes.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][15]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
                        PartName: "/word/settings.xml",
                    },
                },
            });
        });
    });
    describe("#addFooter()", () => {
        it("should add footer", () => {
            contentTypes.addFooter(101);
            contentTypes.addFooter(102);
            const tree = new formatter_1.Formatter().format(contentTypes);
            chai_1.expect(tree["Types"][16]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
                        PartName: "/word/footer101.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][17]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
                        PartName: "/word/footer102.xml",
                    },
                },
            });
        });
    });
    describe("#addHeader()", () => {
        it("should add header", () => {
            contentTypes.addHeader(201);
            contentTypes.addHeader(202);
            const tree = new formatter_1.Formatter().format(contentTypes);
            chai_1.expect(tree["Types"][16]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml",
                        PartName: "/word/header201.xml",
                    },
                },
            });
            chai_1.expect(tree["Types"][17]).to.deep.equal({
                Override: {
                    _attr: {
                        ContentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml",
                        PartName: "/word/header202.xml",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=content-types.spec.js.map
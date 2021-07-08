"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const properties_1 = require("./properties");
describe("Properties", () => {
    describe("#constructor()", () => {
        it("sets the appropriate attributes on the top-level", () => {
            const properties = new properties_1.CoreProperties({});
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["cp:coreProperties"]);
            chai_1.expect(tree["cp:coreProperties"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["cp:coreProperties"][0]).to.deep.equal({
                _attr: {
                    "xmlns:cp": "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
                    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                    "xmlns:dcmitype": "http://purl.org/dc/dcmitype/",
                    "xmlns:dcterms": "http://purl.org/dc/terms/",
                    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                },
            });
        });
        it("should create properties with a title", () => {
            const properties = new properties_1.CoreProperties({ title: "test document" });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["cp:coreProperties"]);
            chai_1.expect(tree["cp:coreProperties"]).to.be.an.instanceof(Array);
            chai_1.expect(Object.keys(tree["cp:coreProperties"][0])).to.deep.equal(["_attr"]);
            chai_1.expect(tree["cp:coreProperties"][1]).to.deep.equal({ "dc:title": ["test document"] });
        });
        it("should create properties with all the attributes given", () => {
            const properties = new properties_1.CoreProperties({
                title: "test document",
                subject: "test subject",
                creator: "me",
                keywords: "test docx",
                description: "testing document",
                lastModifiedBy: "the author",
                revision: "123",
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["cp:coreProperties"]);
            chai_1.expect(tree["cp:coreProperties"]).to.be.an.instanceof(Array);
            const key = (obj) => Object.keys(obj)[0];
            const props = tree["cp:coreProperties"].map(key).sort();
            chai_1.expect(props).to.deep.equal([
                "_attr",
                "cp:keywords",
                "cp:lastModifiedBy",
                "cp:revision",
                "dc:creator",
                "dc:description",
                "dc:subject",
                "dc:title",
                "dcterms:created",
                "dcterms:modified",
            ]);
            chai_1.expect(tree["cp:coreProperties"].slice(1, -2).sort((a, b) => (key(a) < key(b) ? -1 : 1))).to.deep.equal([
                { "cp:keywords": ["test docx"] },
                { "cp:lastModifiedBy": ["the author"] },
                { "cp:revision": ["123"] },
                { "dc:creator": ["me"] },
                { "dc:description": ["testing document"] },
                { "dc:subject": ["test subject"] },
                { "dc:title": ["test document"] },
            ]);
        });
    });
});
//# sourceMappingURL=properties.spec.js.map
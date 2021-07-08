"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = require("sinon");
const formatter_1 = require("export/formatter");
const file_1 = require("file");
const core_properties_1 = require("file/core-properties");
const xml_components_1 = require("file/xml-components");
describe("Formatter", () => {
    let formatter;
    beforeEach(() => {
        formatter = new formatter_1.Formatter();
    });
    describe("#format()", () => {
        it("should format simple paragraph", () => {
            const paragraph = new file_1.Paragraph("");
            const newJson = formatter.format(paragraph);
            chai_1.assert.isDefined(newJson["w:p"]);
        });
        it("should remove xmlKeys", () => {
            const paragraph = new file_1.Paragraph("");
            const newJson = formatter.format(paragraph);
            const stringifiedJson = JSON.stringify(newJson);
            chai_1.assert(stringifiedJson.indexOf("xmlKeys") < 0);
        });
        it("should format simple paragraph with bold text", () => {
            const paragraph = new file_1.Paragraph({
                children: [
                    new file_1.TextRun({
                        text: "test",
                        bold: true,
                    }),
                ],
            });
            const tree = formatter.format(paragraph);
            chai_1.expect(tree).to.deep.equal({
                "w:p": [
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
        it("should format attributes (rsidSect)", () => {
            const attributes = new xml_components_1.Attributes({
                rsidSect: "test2",
            });
            const tree = formatter.format(attributes);
            chai_1.expect(tree).to.deep.equal({
                _attr: {
                    "w:rsidSect": "test2",
                },
            });
        });
        it("should format attributes (val)", () => {
            const attributes = new xml_components_1.Attributes({
                val: "test",
            });
            const tree = formatter.format(attributes);
            chai_1.expect(tree).to.deep.equal({
                _attr: {
                    "w:val": "test",
                },
            });
        });
        it("should should change 'p' tag into 'w:p' tag", () => {
            const paragraph = new file_1.Paragraph("");
            const newJson = formatter.format(paragraph);
            chai_1.assert.isDefined(newJson["w:p"]);
        });
        it("should format Properties object correctly", () => {
            const properties = new core_properties_1.CoreProperties({
                title: "test document",
                creator: "Dolan",
            });
            const newJson = formatter.format(properties);
            chai_1.assert.isDefined(newJson["cp:coreProperties"]);
        });
        it("should call the prep method only once", () => {
            const paragraph = new file_1.Paragraph("");
            const spy = sinon.spy(paragraph, "prepForXml");
            formatter.format(paragraph);
            chai_1.expect(spy.calledOnce).to.equal(true);
        });
    });
});
//# sourceMappingURL=formatter.spec.js.map
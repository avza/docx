"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const xml_js_1 = require("xml-js");
const _1 = require("./");
const imported_xml_component_1 = require("./imported-xml-component");
const xmlString = `
        <w:p w:one="value 1" w:two="value 2">
            <w:rPr>
                <w:noProof>some value</w:noProof>
            </w:rPr>
            <w:r active="true">
                <w:t>Text 1</w:t>
            </w:r>
            <w:r active="true">
                <w:t>Text 2</w:t>
            </w:r>
        </w:p>
    `;
const convertedXmlElement = {
    deleted: false,
    root: [
        {
            deleted: false,
            rootKey: "w:p",
            root: [
                { deleted: false, rootKey: "_attr", root: { "w:one": "value 1", "w:two": "value 2" } },
                { deleted: false, rootKey: "w:rPr", root: [{ deleted: false, rootKey: "w:noProof", root: ["some value"] }] },
                {
                    deleted: false,
                    rootKey: "w:r",
                    root: [
                        { deleted: false, rootKey: "_attr", root: { active: "true" } },
                        { deleted: false, rootKey: "w:t", root: ["Text 1"] },
                    ],
                },
                {
                    deleted: false,
                    rootKey: "w:r",
                    root: [
                        { deleted: false, rootKey: "_attr", root: { active: "true" } },
                        { deleted: false, rootKey: "w:t", root: ["Text 2"] },
                    ],
                },
            ],
        },
    ],
    rootKey: undefined,
};
describe("ImportedXmlComponent", () => {
    let importedXmlComponent;
    beforeEach(() => {
        const attributes = {
            someAttr: "1",
            otherAttr: "2",
        };
        importedXmlComponent = new _1.ImportedXmlComponent("w:test", attributes);
        importedXmlComponent.push(new _1.ImportedXmlComponent("w:child"));
    });
    describe("#prepForXml()", () => {
        it("should transform for xml", () => {
            const converted = importedXmlComponent.prepForXml();
            chai_1.expect(converted).to.deep.equal({
                "w:test": [
                    {
                        _attr: {
                            someAttr: "1",
                            otherAttr: "2",
                        },
                    },
                    {
                        "w:child": _1.EMPTY_OBJECT,
                    },
                ],
            });
        });
    });
    it("should create XmlComponent from xml string", () => {
        const converted = _1.ImportedXmlComponent.fromXmlString(xmlString);
        chai_1.expect(converted).to.deep.equal(convertedXmlElement);
    });
    describe("convertToXmlComponent", () => {
        it("should convert to xml component", () => {
            const xmlObj = xml_js_1.xml2js(xmlString, { compact: false });
            const converted = imported_xml_component_1.convertToXmlComponent(xmlObj);
            chai_1.expect(converted).to.deep.equal(convertedXmlElement);
        });
    });
});
//# sourceMappingURL=imported-xml-component.spec.js.map
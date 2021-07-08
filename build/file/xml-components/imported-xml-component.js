"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportedRootElementAttributes = exports.ImportedXmlComponent = exports.convertToXmlComponent = void 0;
const xml_js_1 = require("xml-js");
const _1 = require(".");
function convertToXmlComponent(element) {
    switch (element.type) {
        case undefined:
        case "element":
            const xmlComponent = new ImportedXmlComponent(element.name, element.attributes);
            const childElments = element.elements || [];
            for (const childElm of childElments) {
                const child = convertToXmlComponent(childElm);
                if (child !== undefined) {
                    xmlComponent.push(child);
                }
            }
            return xmlComponent;
        case "text":
            return element.text;
        default:
            return undefined;
    }
}
exports.convertToXmlComponent = convertToXmlComponent;
class ImportedXmlComponentAttributes extends _1.XmlAttributeComponent {
}
class ImportedXmlComponent extends _1.XmlComponent {
    static fromXmlString(importedContent) {
        const xmlObj = xml_js_1.xml2js(importedContent, { compact: false });
        return convertToXmlComponent(xmlObj);
    }
    constructor(rootKey, _attr) {
        super(rootKey);
        if (_attr) {
            this.root.push(new ImportedXmlComponentAttributes(_attr));
        }
    }
    push(xmlComponent) {
        this.root.push(xmlComponent);
    }
}
exports.ImportedXmlComponent = ImportedXmlComponent;
class ImportedRootElementAttributes extends _1.XmlComponent {
    constructor(_attr) {
        super("");
        this._attr = _attr;
    }
    prepForXml() {
        return {
            _attr: this._attr,
        };
    }
}
exports.ImportedRootElementAttributes = ImportedRootElementAttributes;
//# sourceMappingURL=imported-xml-component.js.map
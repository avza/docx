"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalStylesFactory = void 0;
const xml_components_1 = require("file/xml-components");
const xml_js_1 = require("xml-js");
const _1 = require("./");
class ExternalStylesFactory {
    newInstance(xmlData) {
        const xmlObj = xml_js_1.xml2js(xmlData, { compact: false });
        let stylesXmlElement;
        for (const xmlElm of xmlObj.elements || []) {
            if (xmlElm.name === "w:styles") {
                stylesXmlElement = xmlElm;
            }
        }
        if (stylesXmlElement === undefined) {
            throw new Error("can not find styles element");
        }
        const stylesElements = stylesXmlElement.elements || [];
        const importedStyle = new _1.Styles({
            initialStyles: new xml_components_1.ImportedRootElementAttributes(stylesXmlElement.attributes),
            importedStyles: stylesElements.map((childElm) => xml_components_1.convertToXmlComponent(childElm)),
        });
        return importedStyle;
    }
}
exports.ExternalStylesFactory = ExternalStylesFactory;
//# sourceMappingURL=external-styles-factory.js.map
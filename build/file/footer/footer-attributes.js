"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class FooterAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            wpc: "xmlns:wpc",
            mc: "xmlns:mc",
            o: "xmlns:o",
            r: "xmlns:r",
            m: "xmlns:m",
            v: "xmlns:v",
            wp14: "xmlns:wp14",
            wp: "xmlns:wp",
            w10: "xmlns:w10",
            w: "xmlns:w",
            w14: "xmlns:w14",
            w15: "xmlns:w15",
            wpg: "xmlns:wpg",
            wpi: "xmlns:wpi",
            wne: "xmlns:wne",
            wps: "xmlns:wps",
            cp: "xmlns:cp",
            dc: "xmlns:dc",
            dcterms: "xmlns:dcterms",
            dcmitype: "xmlns:dcmitype",
            xsi: "xmlns:xsi",
            type: "xsi:type",
        };
    }
}
exports.FooterAttributes = FooterAttributes;
//# sourceMappingURL=footer-attributes.js.map
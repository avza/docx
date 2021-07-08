"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class HeaderAttributes extends xml_components_1.XmlAttributeComponent {
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
            cx: "xmlns:cx",
            cx1: "xmlns:cx1",
            cx2: "xmlns:cx2",
            cx3: "xmlns:cx3",
            cx4: "xmlns:cx4",
            cx5: "xmlns:cx5",
            cx6: "xmlns:cx6",
            cx7: "xmlns:cx7",
            cx8: "xmlns:cx8",
            w16cid: "xmlns:w16cid",
            w16se: "xmlns:w16se",
        };
    }
}
exports.HeaderAttributes = HeaderAttributes;
//# sourceMappingURL=header-attributes.js.map
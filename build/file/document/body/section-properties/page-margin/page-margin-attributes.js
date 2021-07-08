"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMarginAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class PageMarginAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            top: "w:top",
            right: "w:right",
            bottom: "w:bottom",
            left: "w:left",
            header: "w:header",
            footer: "w:footer",
            gutter: "w:gutter",
            mirror: "w:mirrorMargins",
        };
    }
}
exports.PageMarginAttributes = PageMarginAttributes;
//# sourceMappingURL=page-margin-attributes.js.map
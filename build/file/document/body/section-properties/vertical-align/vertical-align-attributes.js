"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionVerticalAlignAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class SectionVerticalAlignAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            verticalAlign: "w:val",
        };
    }
}
exports.SectionVerticalAlignAttributes = SectionVerticalAlignAttributes;
//# sourceMappingURL=vertical-align-attributes.js.map
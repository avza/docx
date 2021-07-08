"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class BorderAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            val: "w:val",
            color: "w:color",
            space: "w:space",
            sz: "w:sz",
        };
    }
}
exports.BorderAttributes = BorderAttributes;
//# sourceMappingURL=border-attributes.js.map
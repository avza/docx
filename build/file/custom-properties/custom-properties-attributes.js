"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertiesAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class CustomPropertiesAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            xmlns: "xmlns",
            vt: "xmlns:vt",
        };
    }
}
exports.CustomPropertiesAttributes = CustomPropertiesAttributes;
//# sourceMappingURL=custom-properties-attributes.js.map
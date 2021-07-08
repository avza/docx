"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class CustomPropertyAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            fmtid: "fmtid",
            pid: "pid",
            name: "name",
        };
    }
}
exports.CustomPropertyAttributes = CustomPropertyAttributes;
//# sourceMappingURL=custom-property-attributes.js.map
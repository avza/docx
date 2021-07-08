"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGridAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class DocGridAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            linePitch: "w:linePitch",
        };
    }
}
exports.DocGridAttributes = DocGridAttributes;
//# sourceMappingURL=doc-grid-attributes.js.map
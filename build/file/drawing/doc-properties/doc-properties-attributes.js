"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocPropertiesAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class DocPropertiesAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "id",
            name: "name",
            descr: "descr",
        };
    }
}
exports.DocPropertiesAttributes = DocPropertiesAttributes;
//# sourceMappingURL=doc-properties-attributes.js.map
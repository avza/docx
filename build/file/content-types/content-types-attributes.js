"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class ContentTypeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            xmlns: "xmlns",
        };
    }
}
exports.ContentTypeAttributes = ContentTypeAttributes;
//# sourceMappingURL=content-types-attributes.js.map
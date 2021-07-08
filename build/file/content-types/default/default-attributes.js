"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class DefaultAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            contentType: "ContentType",
            extension: "Extension",
        };
    }
}
exports.DefaultAttributes = DefaultAttributes;
//# sourceMappingURL=default-attributes.js.map
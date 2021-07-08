"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class PicAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            xmlns: "xmlns:pic",
        };
    }
}
exports.PicAttributes = PicAttributes;
//# sourceMappingURL=pic-attributes.js.map
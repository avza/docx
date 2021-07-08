"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlePageAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class TitlePageAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            value: "w:val",
        };
    }
}
exports.TitlePageAttributes = TitlePageAttributes;
//# sourceMappingURL=title-page-attributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootnoteAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class FootnoteAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            type: "w:type",
            id: "w:id",
        };
    }
}
exports.FootnoteAttributes = FootnoteAttributes;
//# sourceMappingURL=footnote-attributes.js.map
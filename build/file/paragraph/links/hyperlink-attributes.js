"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperlinkAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class HyperlinkAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "r:id",
            history: "w:history",
            anchor: "w:anchor",
        };
    }
}
exports.HyperlinkAttributes = HyperlinkAttributes;
//# sourceMappingURL=hyperlink-attributes.js.map
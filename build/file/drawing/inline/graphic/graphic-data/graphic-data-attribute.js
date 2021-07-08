"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicDataAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class GraphicDataAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            uri: "uri",
        };
    }
}
exports.GraphicDataAttributes = GraphicDataAttributes;
//# sourceMappingURL=graphic-data-attribute.js.map
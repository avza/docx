"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffsetAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class OffsetAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            x: "x",
            y: "y",
        };
    }
}
exports.OffsetAttributes = OffsetAttributes;
//# sourceMappingURL=off-attributes.js.map
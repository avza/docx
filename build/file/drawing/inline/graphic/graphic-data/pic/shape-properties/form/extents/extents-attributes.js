"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtentsAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class ExtentsAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            cx: "cx",
            cy: "cy",
        };
    }
}
exports.ExtentsAttributes = ExtentsAttributes;
//# sourceMappingURL=extents-attributes.js.map
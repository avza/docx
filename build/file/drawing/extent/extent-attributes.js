"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtentAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class ExtentAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            cx: "cx",
            cy: "cy",
        };
    }
}
exports.ExtentAttributes = ExtentAttributes;
//# sourceMappingURL=extent-attributes.js.map
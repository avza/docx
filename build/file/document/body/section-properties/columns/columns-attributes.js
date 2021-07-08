"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class ColumnsAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            space: "w:space",
            num: "w:num",
            separate: "w:sep",
        };
    }
}
exports.ColumnsAttributes = ColumnsAttributes;
//# sourceMappingURL=columns-attributes.js.map
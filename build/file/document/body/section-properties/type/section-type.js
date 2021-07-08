"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
const xml_components_1 = require("file/xml-components");
const section_type_attributes_1 = require("./section-type-attributes");
class Type extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:type");
        this.root.push(new section_type_attributes_1.SectionTypeAttributes({ val: value }));
    }
}
exports.Type = Type;
//# sourceMappingURL=section-type.js.map
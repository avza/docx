"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionTypeAttributes = exports.SectionType = void 0;
const xml_components_1 = require("file/xml-components");
var SectionType;
(function (SectionType) {
    SectionType["CONTINUOUS"] = "continuous";
    SectionType["EVEN_PAGE"] = "evenPage";
    SectionType["NEXT_COLUMN"] = "nextColumn";
    SectionType["NEXT_PAGE"] = "nextPage";
    SectionType["ODD_PAGE"] = "oddPage";
})(SectionType = exports.SectionType || (exports.SectionType = {}));
class SectionTypeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            val: "w:val",
        };
    }
}
exports.SectionTypeAttributes = SectionTypeAttributes;
//# sourceMappingURL=section-type-attributes.js.map
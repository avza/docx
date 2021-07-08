"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterReferenceAttributes = exports.FooterReferenceType = void 0;
const xml_components_1 = require("file/xml-components");
var FooterReferenceType;
(function (FooterReferenceType) {
    FooterReferenceType["DEFAULT"] = "default";
    FooterReferenceType["FIRST"] = "first";
    FooterReferenceType["EVEN"] = "even";
})(FooterReferenceType = exports.FooterReferenceType || (exports.FooterReferenceType = {}));
class FooterReferenceAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            type: "w:type",
            id: "r:id",
        };
    }
}
exports.FooterReferenceAttributes = FooterReferenceAttributes;
//# sourceMappingURL=footer-reference-attributes.js.map
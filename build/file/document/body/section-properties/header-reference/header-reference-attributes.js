"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderReferenceAttributes = exports.HeaderReferenceType = void 0;
const xml_components_1 = require("file/xml-components");
var HeaderReferenceType;
(function (HeaderReferenceType) {
    HeaderReferenceType["DEFAULT"] = "default";
    HeaderReferenceType["FIRST"] = "first";
    HeaderReferenceType["EVEN"] = "even";
})(HeaderReferenceType = exports.HeaderReferenceType || (exports.HeaderReferenceType = {}));
class HeaderReferenceAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            type: "w:type",
            id: "r:id",
        };
    }
}
exports.HeaderReferenceAttributes = HeaderReferenceAttributes;
//# sourceMappingURL=header-reference-attributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class InlineAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            distT: "distT",
            distB: "distB",
            distL: "distL",
            distR: "distR",
        };
    }
}
exports.InlineAttributes = InlineAttributes;
//# sourceMappingURL=inline-attributes.js.map
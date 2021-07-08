"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverrideAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class OverrideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            contentType: "ContentType",
            partName: "PartName",
        };
    }
}
exports.OverrideAttributes = OverrideAttributes;
//# sourceMappingURL=override-attributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class RelationshipAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "Id",
            type: "Type",
            target: "Target",
            targetMode: "TargetMode",
        };
    }
}
exports.RelationshipAttributes = RelationshipAttributes;
//# sourceMappingURL=relationship-attributes.js.map
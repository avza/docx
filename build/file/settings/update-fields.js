"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFields = exports.UpdateFieldsAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class UpdateFieldsAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            enabled: "w:val",
        };
    }
}
exports.UpdateFieldsAttributes = UpdateFieldsAttributes;
class UpdateFields extends xml_components_1.XmlComponent {
    constructor(enabled = true) {
        super("w:updateFields");
        this.root.push(new UpdateFieldsAttributes({
            enabled,
        }));
    }
}
exports.UpdateFields = UpdateFields;
//# sourceMappingURL=update-fields.js.map
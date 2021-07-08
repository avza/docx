"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Override = void 0;
const xml_components_1 = require("file/xml-components");
const override_attributes_1 = require("./override-attributes");
class Override extends xml_components_1.XmlComponent {
    constructor(contentType, partName) {
        super("Override");
        this.root.push(new override_attributes_1.OverrideAttributes({
            contentType: contentType,
            partName: partName,
        }));
    }
}
exports.Override = Override;
//# sourceMappingURL=override.js.map
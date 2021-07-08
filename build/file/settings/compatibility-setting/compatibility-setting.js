"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompatibilitySetting = exports.CompatibilitySettingAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class CompatibilitySettingAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            version: "w:val",
            name: "w:name",
            uri: "w:uri",
        };
    }
}
exports.CompatibilitySettingAttributes = CompatibilitySettingAttributes;
class CompatibilitySetting extends xml_components_1.XmlComponent {
    constructor(version) {
        super("w:compatSetting");
        this.root.push(new CompatibilitySettingAttributes({
            version,
            uri: "http://schemas.microsoft.com/office/word",
            name: "compatibilityMode",
        }));
    }
}
exports.CompatibilitySetting = CompatibilitySetting;
//# sourceMappingURL=compatibility-setting.js.map
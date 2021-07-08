"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compatibility = void 0;
const xml_components_1 = require("file/xml-components");
const compatibility_setting_1 = require("./compatibility-setting/compatibility-setting");
class DoNotExpandShiftReturn extends xml_components_1.XmlComponent {
    constructor() {
        super("w:doNotExpandShiftReturn");
    }
}
class Compatibility extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:compat");
        if (options.doNotExpandShiftReturn) {
            this.root.push(new DoNotExpandShiftReturn());
        }
        if (options.version) {
            this.root.push(new compatibility_setting_1.CompatibilitySetting(options.version));
        }
    }
}
exports.Compatibility = Compatibility;
//# sourceMappingURL=compatibility.js.map
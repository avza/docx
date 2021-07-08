"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunPropertiesDefaults = void 0;
const properties_1 = require("file/paragraph/run/properties");
const xml_components_1 = require("file/xml-components");
class RunPropertiesDefaults extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:rPrDefault");
        this.properties = new properties_1.RunProperties(options);
        this.root.push(this.properties);
    }
}
exports.RunPropertiesDefaults = RunPropertiesDefaults;
//# sourceMappingURL=run-properties.js.map
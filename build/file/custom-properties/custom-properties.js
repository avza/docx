"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomProperties = void 0;
const xml_components_1 = require("file/xml-components");
const custom_properties_attributes_1 = require("./custom-properties-attributes");
const custom_property_1 = require("./custom-property");
class CustomProperties extends xml_components_1.XmlComponent {
    constructor(properties) {
        super("Properties");
        this.properties = [];
        this.root.push(new custom_properties_attributes_1.CustomPropertiesAttributes({
            xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
            vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        }));
        this.nextId = 2;
        for (const property of properties) {
            this.addCustomProperty(property);
        }
    }
    prepForXml() {
        this.properties.forEach((x) => this.root.push(x));
        return super.prepForXml();
    }
    addCustomProperty(property) {
        this.properties.push(new custom_property_1.CustomProperty(this.nextId++, property));
    }
}
exports.CustomProperties = CustomProperties;
//# sourceMappingURL=custom-properties.js.map
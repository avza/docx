"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyValue = exports.CustomProperty = void 0;
const xml_components_1 = require("file/xml-components");
const custom_property_attributes_1 = require("./custom-property-attributes");
class CustomProperty extends xml_components_1.XmlComponent {
    constructor(id, properties) {
        super("property");
        this.root.push(new custom_property_attributes_1.CustomPropertyAttributes({
            fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
            pid: id.toString(),
            name: properties.name,
        }));
        this.root.push(new CustomPropertyValue(properties.value));
    }
}
exports.CustomProperty = CustomProperty;
class CustomPropertyValue extends xml_components_1.XmlComponent {
    constructor(value) {
        super("vt:lpwstr");
        this.root.push(value);
    }
}
exports.CustomPropertyValue = CustomPropertyValue;
//# sourceMappingURL=custom-property.js.map
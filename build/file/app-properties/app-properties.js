"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProperties = void 0;
const xml_components_1 = require("file/xml-components");
const app_properties_attributes_1 = require("./app-properties-attributes");
class AppProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("Properties");
        this.root.push(new app_properties_attributes_1.AppPropertiesAttributes({
            xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
            vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        }));
    }
}
exports.AppProperties = AppProperties;
//# sourceMappingURL=app-properties.js.map
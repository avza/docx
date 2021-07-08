"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppPropertiesAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class AppPropertiesAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            xmlns: "xmlns",
            vt: "xmlns:vt",
        };
    }
}
exports.AppPropertiesAttributes = AppPropertiesAttributes;
//# sourceMappingURL=app-properties-attributes.js.map
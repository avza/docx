"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVisualPropertiesAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class NonVisualPropertiesAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "id",
            name: "name",
            descr: "desc",
        };
    }
}
exports.NonVisualPropertiesAttributes = NonVisualPropertiesAttributes;
//# sourceMappingURL=non-visual-properties-attributes.js.map
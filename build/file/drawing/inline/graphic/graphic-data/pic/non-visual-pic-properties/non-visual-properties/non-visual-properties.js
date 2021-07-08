"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVisualProperties = void 0;
const xml_components_1 = require("file/xml-components");
const non_visual_properties_attributes_1 = require("./non-visual-properties-attributes");
class NonVisualProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("pic:cNvPr");
        this.root.push(new non_visual_properties_attributes_1.NonVisualPropertiesAttributes({
            id: 0,
            name: "",
            descr: "",
        }));
    }
}
exports.NonVisualProperties = NonVisualProperties;
//# sourceMappingURL=non-visual-properties.js.map
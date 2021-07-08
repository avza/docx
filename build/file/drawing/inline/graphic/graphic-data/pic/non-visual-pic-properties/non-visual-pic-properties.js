"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonVisualPicProperties = void 0;
const xml_components_1 = require("file/xml-components");
const child_non_visual_pic_properties_1 = require("./child-non-visual-pic-properties/child-non-visual-pic-properties");
const non_visual_properties_1 = require("./non-visual-properties/non-visual-properties");
class NonVisualPicProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("pic:nvPicPr");
        this.root.push(new non_visual_properties_1.NonVisualProperties());
        this.root.push(new child_non_visual_pic_properties_1.ChildNonVisualProperties());
    }
}
exports.NonVisualPicProperties = NonVisualPicProperties;
//# sourceMappingURL=non-visual-pic-properties.js.map
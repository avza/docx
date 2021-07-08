"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const xml_components_1 = require("file/xml-components");
const components_1 = require("./components");
class StyleAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            type: "w:type",
            styleId: "w:styleId",
            default: "w:default",
            customStyle: "w:customStyle",
        };
    }
}
class Style extends xml_components_1.XmlComponent {
    constructor(attributes, name) {
        super("w:style");
        this.root.push(new StyleAttributes(attributes));
        if (name) {
            this.root.push(new components_1.Name(name));
        }
    }
}
exports.Style = Style;
//# sourceMappingURL=style.js.map
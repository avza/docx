"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const xml_components_1 = require("file/xml-components");
class StyleAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class Style extends xml_components_1.XmlComponent {
    constructor(styleId) {
        super("w:rStyle");
        this.root.push(new StyleAttributes({ val: styleId }));
    }
}
exports.Style = Style;
//# sourceMappingURL=style.js.map
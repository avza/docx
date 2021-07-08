"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParagraphPropertiesDefaults = void 0;
const properties_1 = require("file/paragraph/properties");
const xml_components_1 = require("file/xml-components");
class ParagraphPropertiesDefaults extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:pPrDefault");
        this.root.push(new properties_1.ParagraphProperties(options));
    }
}
exports.ParagraphPropertiesDefaults = ParagraphPropertiesDefaults;
//# sourceMappingURL=paragraph-properties.js.map
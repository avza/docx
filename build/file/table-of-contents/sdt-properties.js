"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredDocumentTagProperties = void 0;
const xml_components_1 = require("file/xml-components");
const alias_1 = require("./alias");
class StructuredDocumentTagProperties extends xml_components_1.XmlComponent {
    constructor(alias) {
        super("w:sdtPr");
        this.root.push(new alias_1.Alias(alias));
    }
}
exports.StructuredDocumentTagProperties = StructuredDocumentTagProperties;
//# sourceMappingURL=sdt-properties.js.map
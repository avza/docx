"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocProperties = void 0;
const xml_components_1 = require("file/xml-components");
const doc_properties_attributes_1 = require("./doc-properties-attributes");
class DocProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("wp:docPr");
        this.root.push(new doc_properties_attributes_1.DocPropertiesAttributes({
            id: 0,
            name: "",
            descr: "",
        }));
    }
}
exports.DocProperties = DocProperties;
//# sourceMappingURL=doc-properties.js.map
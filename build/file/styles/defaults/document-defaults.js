"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentDefaults = void 0;
const xml_components_1 = require("file/xml-components");
const paragraph_properties_1 = require("./paragraph-properties");
const run_properties_1 = require("./run-properties");
class DocumentDefaults extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:docDefaults");
        this.runPropertiesDefaults = new run_properties_1.RunPropertiesDefaults(options && options.run);
        this.paragraphPropertiesDefaults = new paragraph_properties_1.ParagraphPropertiesDefaults(options && options.paragraph);
        this.root.push(this.runPropertiesDefaults);
        this.root.push(this.paragraphPropertiesDefaults);
    }
}
exports.DocumentDefaults = DocumentDefaults;
//# sourceMappingURL=document-defaults.js.map
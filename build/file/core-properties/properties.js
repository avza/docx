"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreProperties = void 0;
const xml_components_1 = require("file/xml-components");
const document_attributes_1 = require("../document/document-attributes");
const components_1 = require("./components");
class CoreProperties extends xml_components_1.XmlComponent {
    constructor(options) {
        super("cp:coreProperties");
        this.root.push(new document_attributes_1.DocumentAttributes({
            cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
            dc: "http://purl.org/dc/elements/1.1/",
            dcterms: "http://purl.org/dc/terms/",
            dcmitype: "http://purl.org/dc/dcmitype/",
            xsi: "http://www.w3.org/2001/XMLSchema-instance",
        }));
        if (options.title) {
            this.root.push(new components_1.Title(options.title));
        }
        if (options.subject) {
            this.root.push(new components_1.Subject(options.subject));
        }
        if (options.creator) {
            this.root.push(new components_1.Creator(options.creator));
        }
        if (options.keywords) {
            this.root.push(new components_1.Keywords(options.keywords));
        }
        if (options.description) {
            this.root.push(new components_1.Description(options.description));
        }
        if (options.lastModifiedBy) {
            this.root.push(new components_1.LastModifiedBy(options.lastModifiedBy));
        }
        if (options.revision) {
            this.root.push(new components_1.Revision(options.revision));
        }
        this.root.push(new components_1.Created());
        this.root.push(new components_1.Modified());
    }
}
exports.CoreProperties = CoreProperties;
//# sourceMappingURL=properties.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const xml_components_1 = require("file/xml-components");
const body_1 = require("./body");
const document_attributes_1 = require("./document-attributes");
const document_background_1 = require("./document-background");
class Document extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:document");
        this.root.push(new document_attributes_1.DocumentAttributes({
            wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
            mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            o: "urn:schemas-microsoft-com:office:office",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
            v: "urn:schemas-microsoft-com:vml",
            wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
            wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            w10: "urn:schemas-microsoft-com:office:word",
            w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            w14: "http://schemas.microsoft.com/office/word/2010/wordml",
            w15: "http://schemas.microsoft.com/office/word/2012/wordml",
            wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
            wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
            wne: "http://schemas.microsoft.com/office/word/2006/wordml",
            wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
            Ignorable: "w14 w15 wp14",
        }));
        this.body = new body_1.Body();
        this.root.push(new document_background_1.DocumentBackground(options.background));
        this.root.push(this.body);
    }
    add(item) {
        this.body.push(item);
        return this;
    }
    get Body() {
        return this.body;
    }
    getTablesOfContents() {
        return this.body.getTablesOfContents();
    }
}
exports.Document = Document;
//# sourceMappingURL=document.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOfContents = void 0;
const paragraph_1 = require("file/paragraph");
const run_1 = require("file/paragraph/run");
const field_1 = require("file/paragraph/run/field");
const xml_components_1 = require("file/xml-components");
const field_instruction_1 = require("./field-instruction");
const sdt_content_1 = require("./sdt-content");
const sdt_properties_1 = require("./sdt-properties");
class TableOfContents extends xml_components_1.XmlComponent {
    constructor(alias = "Table of Contents", properties) {
        super("w:sdt");
        this.root.push(new sdt_properties_1.StructuredDocumentTagProperties(alias));
        const content = new sdt_content_1.StructuredDocumentTagContent();
        const beginParagraph = new paragraph_1.Paragraph({
            children: [
                new run_1.Run({
                    children: [new field_1.Begin(true), new field_instruction_1.FieldInstruction(properties), new field_1.Separate()],
                }),
            ],
        });
        content.addChildElement(beginParagraph);
        const endParagraph = new paragraph_1.Paragraph({
            children: [
                new run_1.Run({
                    children: [new field_1.End()],
                }),
            ],
        });
        content.addChildElement(endParagraph);
        this.root.push(content);
    }
}
exports.TableOfContents = TableOfContents;
//# sourceMappingURL=table-of-contents.js.map
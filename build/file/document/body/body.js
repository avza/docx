"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
const xml_components_1 = require("file/xml-components");
const __1 = require("../..");
const section_properties_1 = require("./section-properties/section-properties");
class Body extends xml_components_1.XmlComponent {
    constructor() {
        super("w:body");
        this.sections = [];
    }
    addSection(options) {
        const currentSection = this.sections.pop();
        this.root.push(this.createSectionParagraph(currentSection));
        this.sections.push(new section_properties_1.SectionProperties(options));
    }
    prepForXml(file) {
        if (this.sections.length === 1) {
            this.root.splice(0, 1);
            this.root.push(this.sections.pop());
        }
        return super.prepForXml(file);
    }
    push(component) {
        this.root.push(component);
    }
    getTablesOfContents() {
        return this.root.filter((child) => child instanceof __1.TableOfContents);
    }
    createSectionParagraph(section) {
        const paragraph = new __1.Paragraph({});
        const properties = new __1.ParagraphProperties({});
        properties.push(section);
        paragraph.addChildElement(properties);
        return paragraph;
    }
}
exports.Body = Body;
//# sourceMappingURL=body.js.map
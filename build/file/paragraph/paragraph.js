"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
const shortid = require("shortid");
const xml_components_1 = require("file/xml-components");
const relationship_1 = require("../relationships/relationship/relationship");
const links_1 = require("./links");
const properties_1 = require("./properties");
const run_1 = require("./run");
class Paragraph extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:p");
        if (typeof options === "string") {
            this.properties = new properties_1.ParagraphProperties({});
            this.root.push(this.properties);
            this.root.push(new run_1.TextRun(options));
            return;
        }
        if (options instanceof run_1.PictureRun) {
            this.properties = new properties_1.ParagraphProperties({});
            this.root.push(this.properties);
            this.root.push(options);
            return;
        }
        this.properties = new properties_1.ParagraphProperties(options);
        this.root.push(this.properties);
        if (options.text) {
            this.root.push(new run_1.TextRun(options.text));
        }
        if (options.children) {
            for (const child of options.children) {
                if (child instanceof links_1.Bookmark) {
                    this.root.push(child.start);
                    this.root.push(child.text);
                    this.root.push(child.end);
                    continue;
                }
                this.root.push(child);
            }
        }
    }
    prepForXml(file) {
        for (const element of this.root) {
            if (element instanceof links_1.ExternalHyperlink) {
                const index = this.root.indexOf(element);
                const concreteHyperlink = new links_1.ConcreteHyperlink(element.options.child, shortid.generate().toLowerCase());
                file.Relationships.createRelationship(concreteHyperlink.linkId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", element.options.link, relationship_1.TargetModeType.EXTERNAL);
                this.root[index] = concreteHyperlink;
            }
        }
        return super.prepForXml();
    }
    addRunToFront(run) {
        this.root.splice(1, 0, run);
        return this;
    }
}
exports.Paragraph = Paragraph;
//# sourceMappingURL=paragraph.js.map
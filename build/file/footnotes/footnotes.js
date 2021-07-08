"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootNotes = void 0;
const xml_components_1 = require("file/xml-components");
const paragraph_1 = require("../paragraph");
const footnote_1 = require("./footnote/footnote");
const continuation_seperator_run_1 = require("./footnote/run/continuation-seperator-run");
const seperator_run_1 = require("./footnote/run/seperator-run");
const footnotes_attributes_1 = require("./footnotes-attributes");
class FootNotes extends xml_components_1.XmlComponent {
    constructor() {
        super("w:footnotes");
        this.currentId = 1;
        this.root.push(new footnotes_attributes_1.FootnotesAttributes({
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
        const begin = new footnote_1.Footnote({
            id: -1,
            type: footnote_1.FootnoteType.SEPERATOR,
        });
        begin.add(new paragraph_1.Paragraph({
            spacing: {
                after: 0,
                line: 240,
                lineRule: "auto",
            },
            children: [new seperator_run_1.SeperatorRun()],
        }));
        this.root.push(begin);
        const spacing = new footnote_1.Footnote({
            id: 0,
            type: footnote_1.FootnoteType.CONTINUATION_SEPERATOR,
        });
        spacing.add(new paragraph_1.Paragraph({
            spacing: {
                after: 0,
                line: 240,
                lineRule: "auto",
            },
            children: [new continuation_seperator_run_1.ContinuationSeperatorRun()],
        }));
        this.root.push(spacing);
    }
    createFootNote(paragraph) {
        const footnote = new footnote_1.Footnote({ id: this.currentId });
        footnote.add(paragraph);
        this.root.push(footnote);
        this.currentId++;
    }
}
exports.FootNotes = FootNotes;
//# sourceMappingURL=footnotes.js.map
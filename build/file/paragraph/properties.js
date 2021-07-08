"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParagraphProperties = void 0;
const xml_components_1 = require("file/xml-components");
const alignment_1 = require("./formatting/alignment");
const bidirectional_1 = require("./formatting/bidirectional");
const border_1 = require("./formatting/border");
const indent_1 = require("./formatting/indent");
const keep_1 = require("./formatting/keep");
const page_break_1 = require("./formatting/page-break");
const spacing_1 = require("./formatting/spacing");
const style_1 = require("./formatting/style");
const tab_stop_1 = require("./formatting/tab-stop");
const unordered_list_1 = require("./formatting/unordered-list");
const links_1 = require("./links");
const formatting_1 = require("./run/formatting");
class ParagraphProperties extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor(options) {
        super("w:pPr");
        if (!options) {
            return;
        }
        if (options.border) {
            this.push(new border_1.Border(options.border));
        }
        if (options.spacing) {
            this.push(new spacing_1.Spacing(options.spacing));
        }
        if (options.outlineLevel !== undefined) {
            this.push(new links_1.OutlineLevel(options.outlineLevel));
        }
        if (options.alignment) {
            this.push(new alignment_1.Alignment(options.alignment));
        }
        if (options.heading) {
            this.push(new style_1.Style(options.heading));
        }
        if (options.bidirectional) {
            this.push(new bidirectional_1.Bidirectional());
        }
        if (options.thematicBreak) {
            this.push(new border_1.ThematicBreak());
        }
        if (options.pageBreakBefore) {
            this.push(new page_break_1.PageBreakBefore());
        }
        if (options.contextualSpacing) {
            this.push(new spacing_1.ContextualSpacing(options.contextualSpacing));
        }
        if (options.indent) {
            this.push(new indent_1.Indent(options.indent));
        }
        if (options.keepLines) {
            this.push(new keep_1.KeepLines());
        }
        if (options.keepNext) {
            this.push(new keep_1.KeepNext());
        }
        if (options.tabStops) {
            for (const tabStop of options.tabStops) {
                this.push(new tab_stop_1.TabStop(tabStop.type, tabStop.position, tabStop.leader));
            }
        }
        if (options.style) {
            this.push(new style_1.Style(options.style));
        }
        if (options.bullet) {
            this.push(new style_1.Style("ListParagraph"));
            this.push(new unordered_list_1.NumberProperties(1, options.bullet.level));
        }
        if (options.numbering) {
            if (!options.numbering.custom) {
                this.push(new style_1.Style("ListParagraph"));
            }
            this.push(new unordered_list_1.NumberProperties(options.numbering.reference, options.numbering.level));
        }
        if (options.rightTabStop) {
            this.push(new tab_stop_1.TabStop(tab_stop_1.TabStopType.RIGHT, options.rightTabStop));
        }
        if (options.leftTabStop) {
            this.push(new tab_stop_1.TabStop(tab_stop_1.TabStopType.LEFT, options.leftTabStop));
        }
        if (options.shading) {
            this.push(new formatting_1.Shading(options.shading.type, options.shading.fill, options.shading.color));
        }
    }
    push(item) {
        this.root.push(item);
    }
}
exports.ParagraphProperties = ParagraphProperties;
//# sourceMappingURL=properties.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footnote = exports.FootnoteType = void 0;
const xml_components_1 = require("file/xml-components");
const footnote_attributes_1 = require("./footnote-attributes");
const footnote_ref_run_1 = require("./run/footnote-ref-run");
var FootnoteType;
(function (FootnoteType) {
    FootnoteType["SEPERATOR"] = "separator";
    FootnoteType["CONTINUATION_SEPERATOR"] = "continuationSeparator";
})(FootnoteType = exports.FootnoteType || (exports.FootnoteType = {}));
class Footnote extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:footnote");
        this.root.push(new footnote_attributes_1.FootnoteAttributes({
            type: options.type,
            id: options.id,
        }));
    }
    add(paragraph) {
        paragraph.addRunToFront(new footnote_ref_run_1.FootnoteRefRun());
        this.root.push(paragraph);
    }
}
exports.Footnote = Footnote;
//# sourceMappingURL=footnote.js.map
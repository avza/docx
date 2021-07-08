"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootnoteReferenceRun = exports.FootnoteReference = exports.FootNoteReferenceRunAttributes = void 0;
const run_1 = require("file/paragraph/run");
const style_1 = require("file/paragraph/run/style");
const xml_components_1 = require("file/xml-components");
class FootNoteReferenceRunAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "w:id",
        };
    }
}
exports.FootNoteReferenceRunAttributes = FootNoteReferenceRunAttributes;
class FootnoteReference extends xml_components_1.XmlComponent {
    constructor(id) {
        super("w:footnoteReference");
        this.root.push(new FootNoteReferenceRunAttributes({
            id: id,
        }));
    }
}
exports.FootnoteReference = FootnoteReference;
class FootnoteReferenceRun extends run_1.Run {
    constructor(id) {
        super({});
        this.properties.push(new style_1.Style("FootnoteReference"));
        this.root.push(new FootnoteReference(id));
    }
}
exports.FootnoteReferenceRun = FootnoteReferenceRun;
//# sourceMappingURL=reference-run.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertedTextRun = void 0;
const xml_components_1 = require("file/xml-components");
const index_1 = require("../../index");
const track_revision_1 = require("../track-revision");
class InsertedTextRun extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:ins");
        this.root.push(new track_revision_1.ChangeAttributes({
            id: options.id,
            author: options.author,
            date: options.date,
        }));
        this.addChildElement(new index_1.TextRun(options));
    }
}
exports.InsertedTextRun = InsertedTextRun;
//# sourceMappingURL=inserted-text-run.js.map
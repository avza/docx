"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedTextRun = void 0;
const xml_components_1 = require("file/xml-components");
const index_1 = require("../../index");
const break_1 = require("../../paragraph/run/break");
const field_1 = require("../../paragraph/run/field");
const run_1 = require("../../paragraph/run/run");
const track_revision_1 = require("../track-revision");
const deleted_page_number_1 = require("./deleted-page-number");
const deleted_text_1 = require("./deleted-text");
class DeletedTextRun extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:del");
        this.root.push(new track_revision_1.ChangeAttributes({
            id: options.id,
            author: options.author,
            date: options.date,
        }));
        this.deletedTextRunWrapper = new DeletedTextRunWrapper(options);
        this.addChildElement(this.deletedTextRunWrapper);
    }
}
exports.DeletedTextRun = DeletedTextRun;
class DeletedTextRunWrapper extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:r");
        this.root.push(new index_1.RunProperties(options));
        if (options.children) {
            for (const child of options.children) {
                if (typeof child === "string") {
                    switch (child) {
                        case run_1.PageNumber.CURRENT:
                            this.root.push(new field_1.Begin());
                            this.root.push(new deleted_page_number_1.DeletedPage());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        case run_1.PageNumber.TOTAL_PAGES:
                            this.root.push(new field_1.Begin());
                            this.root.push(new deleted_page_number_1.DeletedNumberOfPages());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        case run_1.PageNumber.TOTAL_PAGES_IN_SECTION:
                            this.root.push(new field_1.Begin());
                            this.root.push(new deleted_page_number_1.DeletedNumberOfPagesSection());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        default:
                            this.root.push(new deleted_text_1.DeletedText(child));
                            break;
                    }
                    continue;
                }
                this.root.push(child);
            }
        }
        else if (options.text) {
            this.root.push(new deleted_text_1.DeletedText(options.text));
        }
        if (options.break) {
            for (let i = 0; i < options.break; i++) {
                this.root.splice(1, 0, new break_1.Break());
            }
        }
    }
}
//# sourceMappingURL=deleted-text-run.js.map
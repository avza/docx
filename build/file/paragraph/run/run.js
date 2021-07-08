"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Run = exports.PageNumber = void 0;
const xml_components_1 = require("file/xml-components");
const break_1 = require("./break");
const field_1 = require("./field");
const page_number_1 = require("./page-number");
const properties_1 = require("./properties");
const text_1 = require("./run-components/text");
var PageNumber;
(function (PageNumber) {
    PageNumber["CURRENT"] = "CURRENT";
    PageNumber["TOTAL_PAGES"] = "TOTAL_PAGES";
    PageNumber["TOTAL_PAGES_IN_SECTION"] = "TOTAL_PAGES_IN_SECTION";
})(PageNumber = exports.PageNumber || (exports.PageNumber = {}));
class Run extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:r");
        this.properties = new properties_1.RunProperties(options);
        this.root.push(this.properties);
        if (options.children) {
            for (const child of options.children) {
                if (typeof child === "string") {
                    switch (child) {
                        case PageNumber.CURRENT:
                            this.root.push(new field_1.Begin());
                            this.root.push(new page_number_1.Page());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        case PageNumber.TOTAL_PAGES:
                            this.root.push(new field_1.Begin());
                            this.root.push(new page_number_1.NumberOfPages());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        case PageNumber.TOTAL_PAGES_IN_SECTION:
                            this.root.push(new field_1.Begin());
                            this.root.push(new page_number_1.NumberOfPagesSection());
                            this.root.push(new field_1.Separate());
                            this.root.push(new field_1.End());
                            break;
                        default:
                            this.root.push(new text_1.Text(child));
                            break;
                    }
                    continue;
                }
                this.root.push(child);
            }
        }
        else if (options.text) {
            this.root.push(new text_1.Text(options.text));
        }
        if (options.break) {
            for (let i = 0; i < options.break; i++) {
                this.root.splice(1, 0, new break_1.Break());
            }
        }
    }
}
exports.Run = Run;
//# sourceMappingURL=run.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlePage = void 0;
const xml_components_1 = require("file/xml-components");
const title_page_attributes_1 = require("./title-page-attributes");
class TitlePage extends xml_components_1.XmlComponent {
    constructor() {
        super("w:titlePg");
        this.root.push(new title_page_attributes_1.TitlePageAttributes({
            value: "1",
        }));
    }
}
exports.TitlePage = TitlePage;
//# sourceMappingURL=title-page.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMargin = void 0;
const xml_components_1 = require("file/xml-components");
const page_margin_attributes_1 = require("./page-margin-attributes");
class PageMargin extends xml_components_1.XmlComponent {
    constructor(top, right, bottom, left, header, footer, gutter, mirror) {
        super("w:pgMar");
        this.root.push(new page_margin_attributes_1.PageMarginAttributes({
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            header: header,
            footer: footer,
            gutter: gutter,
            mirror: mirror,
        }));
    }
}
exports.PageMargin = PageMargin;
//# sourceMappingURL=page-margin.js.map
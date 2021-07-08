"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageSizeAttributes = exports.PageOrientation = void 0;
const xml_components_1 = require("file/xml-components");
var PageOrientation;
(function (PageOrientation) {
    PageOrientation["PORTRAIT"] = "portrait";
    PageOrientation["LANDSCAPE"] = "landscape";
})(PageOrientation = exports.PageOrientation || (exports.PageOrientation = {}));
class PageSizeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            width: "w:w",
            height: "w:h",
            orientation: "w:orient",
        };
    }
}
exports.PageSizeAttributes = PageSizeAttributes;
//# sourceMappingURL=page-size-attributes.js.map
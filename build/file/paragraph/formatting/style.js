"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = exports.HeadingLevel = void 0;
const xml_components_1 = require("file/xml-components");
var HeadingLevel;
(function (HeadingLevel) {
    HeadingLevel["HEADING_1"] = "Heading1";
    HeadingLevel["HEADING_2"] = "Heading2";
    HeadingLevel["HEADING_3"] = "Heading3";
    HeadingLevel["HEADING_4"] = "Heading4";
    HeadingLevel["HEADING_5"] = "Heading5";
    HeadingLevel["HEADING_6"] = "Heading6";
    HeadingLevel["TITLE"] = "Title";
})(HeadingLevel = exports.HeadingLevel || (exports.HeadingLevel = {}));
class Style extends xml_components_1.XmlComponent {
    constructor(styleId) {
        super("w:pStyle");
        this.root.push(new xml_components_1.Attributes({
            val: styleId,
        }));
    }
}
exports.Style = Style;
//# sourceMappingURL=style.js.map
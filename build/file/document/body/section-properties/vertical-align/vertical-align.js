"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionVerticalAlign = exports.SectionVerticalAlignValue = void 0;
const xml_components_1 = require("file/xml-components");
const vertical_align_attributes_1 = require("./vertical-align-attributes");
var SectionVerticalAlignValue;
(function (SectionVerticalAlignValue) {
    SectionVerticalAlignValue["BOTH"] = "both";
    SectionVerticalAlignValue["BOTTOM"] = "bottom";
    SectionVerticalAlignValue["CENTER"] = "center";
    SectionVerticalAlignValue["TOP"] = "top";
})(SectionVerticalAlignValue = exports.SectionVerticalAlignValue || (exports.SectionVerticalAlignValue = {}));
class SectionVerticalAlign extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:vAlign");
        this.root.push(new vertical_align_attributes_1.SectionVerticalAlignAttributes({ verticalAlign: value }));
    }
}
exports.SectionVerticalAlign = SectionVerticalAlign;
//# sourceMappingURL=vertical-align.js.map
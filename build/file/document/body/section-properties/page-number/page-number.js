"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNumberType = exports.PageNumberTypeAttributes = exports.PageNumberFormat = void 0;
const xml_components_1 = require("file/xml-components");
var PageNumberFormat;
(function (PageNumberFormat) {
    PageNumberFormat["CARDINAL_TEXT"] = "cardinalText";
    PageNumberFormat["DECIMAL"] = "decimal";
    PageNumberFormat["DECIMAL_ENCLOSED_CIRCLE"] = "decimalEnclosedCircle";
    PageNumberFormat["DECIMAL_ENCLOSED_FULL_STOP"] = "decimalEnclosedFullstop";
    PageNumberFormat["DECIMAL_ENCLOSED_PAREN"] = "decimalEnclosedParen";
    PageNumberFormat["DECIMAL_ZERO"] = "decimalZero";
    PageNumberFormat["LOWER_LETTER"] = "lowerLetter";
    PageNumberFormat["LOWER_ROMAN"] = "lowerRoman";
    PageNumberFormat["NONE"] = "none";
    PageNumberFormat["ORDINAL_TEXT"] = "ordinalText";
    PageNumberFormat["UPPER_LETTER"] = "upperLetter";
    PageNumberFormat["UPPER_ROMAN"] = "upperRoman";
    PageNumberFormat["DECIMAL_FULL_WIDTH"] = "decimalFullWidth";
})(PageNumberFormat = exports.PageNumberFormat || (exports.PageNumberFormat = {}));
class PageNumberTypeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            pageNumberStart: "w:start",
            pageNumberFormatType: "w:fmt",
        };
    }
}
exports.PageNumberTypeAttributes = PageNumberTypeAttributes;
class PageNumberType extends xml_components_1.XmlComponent {
    constructor(start, numberFormat) {
        super("w:pgNumType");
        this.root.push(new PageNumberTypeAttributes({
            pageNumberStart: start,
            pageNumberFormatType: numberFormat,
        }));
    }
}
exports.PageNumberType = PageNumberType;
//# sourceMappingURL=page-number.js.map
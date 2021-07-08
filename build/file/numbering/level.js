"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelForOverride = exports.Level = exports.LevelBase = exports.LevelSuffix = exports.LevelFormat = void 0;
const xml_components_1 = require("file/xml-components");
const formatting_1 = require("../paragraph/formatting");
const properties_1 = require("../paragraph/properties");
const properties_2 = require("../paragraph/run/properties");
var LevelFormat;
(function (LevelFormat) {
    LevelFormat["BULLET"] = "bullet";
    LevelFormat["CARDINAL_TEXT"] = "cardinalText";
    LevelFormat["CHICAGO"] = "chicago";
    LevelFormat["DECIMAL"] = "decimal";
    LevelFormat["DECIMAL_ENCLOSED_CIRCLE"] = "decimalEnclosedCircle";
    LevelFormat["DECIMAL_ENCLOSED_FULLSTOP"] = "decimalEnclosedFullstop";
    LevelFormat["DECIMAL_ENCLOSED_PARENTHESES"] = "decimalEnclosedParen";
    LevelFormat["DECIMAL_ZERO"] = "decimalZero";
    LevelFormat["LOWER_LETTER"] = "lowerLetter";
    LevelFormat["LOWER_ROMAN"] = "lowerRoman";
    LevelFormat["NONE"] = "none";
    LevelFormat["ORDINAL_TEXT"] = "ordinalText";
    LevelFormat["UPPER_LETTER"] = "upperLetter";
    LevelFormat["UPPER_ROMAN"] = "upperRoman";
})(LevelFormat = exports.LevelFormat || (exports.LevelFormat = {}));
class LevelAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            ilvl: "w:ilvl",
            tentative: "w15:tentative",
        };
    }
}
class Start extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:start");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
class NumberFormat extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:numFmt");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
class LevelText extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:lvlText");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
class LevelJc extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:lvlJc");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
var LevelSuffix;
(function (LevelSuffix) {
    LevelSuffix["NOTHING"] = "nothing";
    LevelSuffix["SPACE"] = "space";
    LevelSuffix["TAB"] = "tab";
})(LevelSuffix = exports.LevelSuffix || (exports.LevelSuffix = {}));
class Suffix extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:suff");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
class LevelBase extends xml_components_1.XmlComponent {
    constructor({ level, format, text, alignment = formatting_1.AlignmentType.START, start = 1, style, suffix }) {
        super("w:lvl");
        this.root.push(new LevelAttributes({
            ilvl: level,
            tentative: 1,
        }));
        this.root.push(new Start(start));
        this.root.push(new LevelJc(alignment));
        if (format) {
            this.root.push(new NumberFormat(format));
        }
        if (text) {
            this.root.push(new LevelText(text));
        }
        this.paragraphProperties = new properties_1.ParagraphProperties(style && style.paragraph);
        this.runProperties = new properties_2.RunProperties(style && style.run);
        this.root.push(this.paragraphProperties);
        this.root.push(this.runProperties);
        if (suffix) {
            this.root.push(new Suffix(suffix));
        }
    }
}
exports.LevelBase = LevelBase;
class Level extends LevelBase {
    constructor(options) {
        super(options);
    }
}
exports.Level = Level;
class LevelForOverride extends LevelBase {
}
exports.LevelForOverride = LevelForOverride;
//# sourceMappingURL=level.js.map
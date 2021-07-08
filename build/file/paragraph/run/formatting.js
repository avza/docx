"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowComplexScript = exports.Shading = exports.HighlightComplexScript = exports.Highlight = exports.RightToLeft = exports.SizeComplexScript = exports.Size = exports.Strike = exports.SmallCaps = exports.Imprint = exports.Emboss = exports.DoubleStrike = exports.Color = exports.Caps = exports.ItalicsComplexScript = exports.Italics = exports.CharacterSpacing = exports.BoldComplexScript = exports.Bold = exports.RunFonts = exports.SuperScript = exports.SubScript = exports.EmphasisMark = exports.Underline = void 0;
const xml_components_1 = require("file/xml-components");
var underline_1 = require("./underline");
Object.defineProperty(exports, "Underline", { enumerable: true, get: function () { return underline_1.Underline; } });
var emphasis_mark_1 = require("./emphasis-mark");
Object.defineProperty(exports, "EmphasisMark", { enumerable: true, get: function () { return emphasis_mark_1.EmphasisMark; } });
var script_1 = require("./script");
Object.defineProperty(exports, "SubScript", { enumerable: true, get: function () { return script_1.SubScript; } });
Object.defineProperty(exports, "SuperScript", { enumerable: true, get: function () { return script_1.SuperScript; } });
var run_fonts_1 = require("./run-fonts");
Object.defineProperty(exports, "RunFonts", { enumerable: true, get: function () { return run_fonts_1.RunFonts; } });
class Bold extends xml_components_1.XmlComponent {
    constructor() {
        super("w:b");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Bold = Bold;
class BoldComplexScript extends xml_components_1.XmlComponent {
    constructor() {
        super("w:bCs");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.BoldComplexScript = BoldComplexScript;
class CharacterSpacing extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:spacing");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
exports.CharacterSpacing = CharacterSpacing;
class Italics extends xml_components_1.XmlComponent {
    constructor() {
        super("w:i");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Italics = Italics;
class ItalicsComplexScript extends xml_components_1.XmlComponent {
    constructor() {
        super("w:iCs");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.ItalicsComplexScript = ItalicsComplexScript;
class Caps extends xml_components_1.XmlComponent {
    constructor() {
        super("w:caps");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Caps = Caps;
class Color extends xml_components_1.XmlComponent {
    constructor(color) {
        super("w:color");
        this.root.push(new xml_components_1.Attributes({
            val: color,
        }));
    }
}
exports.Color = Color;
class DoubleStrike extends xml_components_1.XmlComponent {
    constructor() {
        super("w:dstrike");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.DoubleStrike = DoubleStrike;
class Emboss extends xml_components_1.XmlComponent {
    constructor() {
        super("w:emboss");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Emboss = Emboss;
class Imprint extends xml_components_1.XmlComponent {
    constructor() {
        super("w:imprint");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Imprint = Imprint;
class SmallCaps extends xml_components_1.XmlComponent {
    constructor() {
        super("w:smallCaps");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.SmallCaps = SmallCaps;
class Strike extends xml_components_1.XmlComponent {
    constructor() {
        super("w:strike");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.Strike = Strike;
class Size extends xml_components_1.XmlComponent {
    constructor(size) {
        super("w:sz");
        this.root.push(new xml_components_1.Attributes({
            val: size,
        }));
    }
}
exports.Size = Size;
class SizeComplexScript extends xml_components_1.XmlComponent {
    constructor(size) {
        super("w:szCs");
        this.root.push(new xml_components_1.Attributes({
            val: size,
        }));
    }
}
exports.SizeComplexScript = SizeComplexScript;
class RightToLeft extends xml_components_1.XmlComponent {
    constructor() {
        super("w:rtl");
        this.root.push(new xml_components_1.Attributes({
            val: true,
        }));
    }
}
exports.RightToLeft = RightToLeft;
class Highlight extends xml_components_1.XmlComponent {
    constructor(color) {
        super("w:highlight");
        this.root.push(new xml_components_1.Attributes({
            val: color,
        }));
    }
}
exports.Highlight = Highlight;
class HighlightComplexScript extends xml_components_1.XmlComponent {
    constructor(color) {
        super("w:highlightCs");
        this.root.push(new xml_components_1.Attributes({
            val: color,
        }));
    }
}
exports.HighlightComplexScript = HighlightComplexScript;
class Shading extends xml_components_1.XmlComponent {
    constructor(value, fill, color) {
        super("w:shd");
        this.root.push(new xml_components_1.Attributes({
            val: value,
            fill: fill,
            color: color,
        }));
    }
}
exports.Shading = Shading;
class ShadowComplexScript extends xml_components_1.XmlComponent {
    constructor(value, fill, color) {
        super("w:shdCs");
        this.root.push(new xml_components_1.Attributes({
            val: value,
            fill: fill,
            color: color,
        }));
    }
}
exports.ShadowComplexScript = ShadowComplexScript;
//# sourceMappingURL=formatting.js.map
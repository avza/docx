"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunProperties = void 0;
const xml_components_1 = require("file/xml-components");
const emphasis_mark_1 = require("./emphasis-mark");
const formatting_1 = require("./formatting");
const run_fonts_1 = require("./run-fonts");
const script_1 = require("./script");
const style_1 = require("./style");
const underline_1 = require("./underline");
class RunProperties extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor(options) {
        super("w:rPr");
        if (!options) {
            return;
        }
        if (options.bold) {
            this.push(new formatting_1.Bold());
        }
        if ((options.boldComplexScript === undefined && options.bold) || options.boldComplexScript) {
            this.push(new formatting_1.BoldComplexScript());
        }
        if (options.italics) {
            this.push(new formatting_1.Italics());
        }
        if ((options.italicsComplexScript === undefined && options.italics) || options.italicsComplexScript) {
            this.push(new formatting_1.ItalicsComplexScript());
        }
        if (options.underline) {
            this.push(new underline_1.Underline(options.underline.type, options.underline.color));
        }
        if (options.emphasisMark) {
            this.push(new emphasis_mark_1.EmphasisMark(options.emphasisMark.type));
        }
        if (options.color) {
            this.push(new formatting_1.Color(options.color));
        }
        if (options.size) {
            this.push(new formatting_1.Size(options.size));
        }
        const szCs = options.sizeComplexScript === undefined || options.sizeComplexScript === true ? options.size : options.sizeComplexScript;
        if (szCs) {
            this.push(new formatting_1.SizeComplexScript(szCs));
        }
        if (options.rightToLeft) {
            this.push(new formatting_1.RightToLeft());
        }
        if (options.smallCaps) {
            this.push(new formatting_1.SmallCaps());
        }
        if (options.allCaps) {
            this.push(new formatting_1.Caps());
        }
        if (options.strike) {
            this.push(new formatting_1.Strike());
        }
        if (options.doubleStrike) {
            this.push(new formatting_1.DoubleStrike());
        }
        if (options.subScript) {
            this.push(new script_1.SubScript());
        }
        if (options.superScript) {
            this.push(new script_1.SuperScript());
        }
        if (options.style) {
            this.push(new style_1.Style(options.style));
        }
        if (options.font) {
            if (typeof options.font === "string") {
                this.push(new run_fonts_1.RunFonts(options.font));
            }
            else if ("name" in options.font) {
                this.push(new run_fonts_1.RunFonts(options.font.name, options.font.hint));
            }
            else {
                this.push(new run_fonts_1.RunFonts(options.font));
            }
        }
        if (options.highlight) {
            this.push(new formatting_1.Highlight(options.highlight));
        }
        const highlightCs = options.highlightComplexScript === undefined || options.highlightComplexScript === true
            ? options.highlight
            : options.highlightComplexScript;
        if (highlightCs) {
            this.push(new formatting_1.HighlightComplexScript(highlightCs));
        }
        if (options.characterSpacing) {
            this.push(new formatting_1.CharacterSpacing(options.characterSpacing));
        }
        const shading = options.shading || options.shadow;
        if (shading) {
            this.push(new formatting_1.Shading(shading.type, shading.fill, shading.color));
        }
        const shdCs = options.shadingComplexScript === undefined || options.shadingComplexScript === true ? shading : options.shadingComplexScript;
        if (shdCs) {
            this.push(new formatting_1.ShadowComplexScript(shdCs.type, shdCs.fill, shdCs.color));
        }
    }
    push(item) {
        this.root.push(item);
    }
}
exports.RunProperties = RunProperties;
//# sourceMappingURL=properties.js.map
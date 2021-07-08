"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles = void 0;
const xml_components_1 = require("file/xml-components");
const style_1 = require("./style");
__exportStar(require("./border"), exports);
class Styles extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:styles");
        if (options.initialStyles) {
            this.root.push(options.initialStyles);
        }
        if (options.importedStyles) {
            for (const style of options.importedStyles) {
                this.root.push(style);
            }
        }
        if (options.paragraphStyles) {
            for (const style of options.paragraphStyles) {
                this.root.push(new style_1.StyleForParagraph(style));
            }
        }
        if (options.characterStyles) {
            for (const style of options.characterStyles) {
                this.root.push(new style_1.StyleForCharacter(style));
            }
        }
    }
}
exports.Styles = Styles;
//# sourceMappingURL=styles.js.map
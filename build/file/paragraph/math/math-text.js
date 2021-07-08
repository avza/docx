"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathText = void 0;
const xml_components_1 = require("file/xml-components");
class MathText extends xml_components_1.XmlComponent {
    constructor(text) {
        super("m:t");
        this.root.push(text);
    }
}
exports.MathText = MathText;
//# sourceMappingURL=math-text.js.map
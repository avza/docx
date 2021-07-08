"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathRun = void 0;
const xml_components_1 = require("file/xml-components");
const math_text_1 = require("./math-text");
class MathRun extends xml_components_1.XmlComponent {
    constructor(text) {
        super("m:r");
        this.root.push(new math_text_1.MathText(text));
    }
}
exports.MathRun = MathRun;
//# sourceMappingURL=math-run.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathNumerator = void 0;
const xml_components_1 = require("file/xml-components");
class MathNumerator extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:num");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathNumerator = MathNumerator;
//# sourceMappingURL=math-numerator.js.map
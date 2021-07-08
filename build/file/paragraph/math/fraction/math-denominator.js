"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathDenominator = void 0;
const xml_components_1 = require("file/xml-components");
class MathDenominator extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:den");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathDenominator = MathDenominator;
//# sourceMappingURL=math-denominator.js.map
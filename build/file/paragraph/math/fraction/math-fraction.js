"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathFraction = void 0;
const xml_components_1 = require("file/xml-components");
const math_denominator_1 = require("./math-denominator");
const math_numerator_1 = require("./math-numerator");
class MathFraction extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:f");
        this.root.push(new math_numerator_1.MathNumerator(options.numerator));
        this.root.push(new math_denominator_1.MathDenominator(options.denominator));
    }
}
exports.MathFraction = MathFraction;
//# sourceMappingURL=math-fraction.js.map
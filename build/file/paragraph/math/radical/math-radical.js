"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathRadical = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../n-ary");
const math_degree_1 = require("./math-degree");
const math_radical_properties_1 = require("./math-radical-properties");
class MathRadical extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:rad");
        this.root.push(new math_radical_properties_1.MathRadicalProperties(!!options.degree));
        this.root.push(new math_degree_1.MathDegree(options.degree));
        this.root.push(new n_ary_1.MathBase(options.children));
    }
}
exports.MathRadical = MathRadical;
//# sourceMappingURL=math-radical.js.map
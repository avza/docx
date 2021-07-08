"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathRadicalProperties = void 0;
const xml_components_1 = require("file/xml-components");
const math_degree_hide_1 = require("./math-degree-hide");
class MathRadicalProperties extends xml_components_1.XmlComponent {
    constructor(hasDegree) {
        super("m:radPr");
        if (!hasDegree) {
            this.root.push(new math_degree_hide_1.MathDegreeHide());
        }
    }
}
exports.MathRadicalProperties = MathRadicalProperties;
//# sourceMappingURL=math-radical-properties.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSum = void 0;
const xml_components_1 = require("file/xml-components");
const math_base_1 = require("./math-base");
const math_naray_properties_1 = require("./math-naray-properties");
const math_sub_script_1 = require("./math-sub-script");
const math_super_script_1 = require("./math-super-script");
class MathSum extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:nary");
        this.root.push(new math_naray_properties_1.MathNArayProperties("∑", !!options.superScript, !!options.subScript));
        if (!!options.subScript) {
            this.root.push(new math_sub_script_1.MathSubScriptElement(options.subScript));
        }
        if (!!options.superScript) {
            this.root.push(new math_super_script_1.MathSuperScriptElement(options.superScript));
        }
        this.root.push(new math_base_1.MathBase(options.children));
    }
}
exports.MathSum = MathSum;
//# sourceMappingURL=math-sum.js.map
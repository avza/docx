"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSuperScript = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../../n-ary");
const math_super_script_function_properties_1 = require("./math-super-script-function-properties");
class MathSuperScript extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:sSup");
        this.root.push(new math_super_script_function_properties_1.MathSuperScriptProperties());
        this.root.push(new n_ary_1.MathBase(options.children));
        this.root.push(new n_ary_1.MathSuperScriptElement(options.superScript));
    }
}
exports.MathSuperScript = MathSuperScript;
//# sourceMappingURL=math-super-script-function.js.map
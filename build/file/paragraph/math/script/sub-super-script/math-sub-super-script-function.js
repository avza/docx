"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSubSuperScript = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../../n-ary");
const math_sub_super_script_function_properties_1 = require("./math-sub-super-script-function-properties");
class MathSubSuperScript extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:sSubSup");
        this.root.push(new math_sub_super_script_function_properties_1.MathSubSuperScriptProperties());
        this.root.push(new n_ary_1.MathBase(options.children));
        this.root.push(new n_ary_1.MathSubScriptElement(options.subScript));
        this.root.push(new n_ary_1.MathSuperScriptElement(options.superScript));
    }
}
exports.MathSubSuperScript = MathSubSuperScript;
//# sourceMappingURL=math-sub-super-script-function.js.map
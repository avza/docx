"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathPreSubSuperScript = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../../n-ary");
const math_pre_sub_super_script_function_properties_1 = require("./math-pre-sub-super-script-function-properties");
class MathPreSubSuperScript extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:sPre");
        this.root.push(new math_pre_sub_super_script_function_properties_1.MathPreSubSuperScriptProperties());
        this.root.push(new n_ary_1.MathBase(options.children));
        this.root.push(new n_ary_1.MathSubScriptElement(options.subScript));
        this.root.push(new n_ary_1.MathSuperScriptElement(options.superScript));
    }
}
exports.MathPreSubSuperScript = MathPreSubSuperScript;
//# sourceMappingURL=math-pre-sub-super-script-function.js.map
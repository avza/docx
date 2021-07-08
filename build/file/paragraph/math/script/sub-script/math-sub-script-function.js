"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSubScript = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../../n-ary");
const math_sub_script_function_properties_1 = require("./math-sub-script-function-properties");
class MathSubScript extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:sSub");
        this.root.push(new math_sub_script_function_properties_1.MathSubScriptProperties());
        this.root.push(new n_ary_1.MathBase(options.children));
        this.root.push(new n_ary_1.MathSubScriptElement(options.subScript));
    }
}
exports.MathSubScript = MathSubScript;
//# sourceMappingURL=math-sub-script-function.js.map
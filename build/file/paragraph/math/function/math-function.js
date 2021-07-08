"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathFunction = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../n-ary");
const math_function_name_1 = require("./math-function-name");
const math_function_properties_1 = require("./math-function-properties");
class MathFunction extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:func");
        this.root.push(new math_function_properties_1.MathFunctionProperties());
        this.root.push(new math_function_name_1.MathFunctionName(options.name));
        this.root.push(new n_ary_1.MathBase(options.children));
    }
}
exports.MathFunction = MathFunction;
//# sourceMappingURL=math-function.js.map
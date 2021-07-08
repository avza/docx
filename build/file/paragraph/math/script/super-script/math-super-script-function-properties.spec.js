"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_super_script_function_properties_1 = require("./math-super-script-function-properties");
describe("MathSuperScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScriptProperties with correct root key", () => {
            const mathSuperScriptProperties = new math_super_script_function_properties_1.MathSuperScriptProperties();
            const tree = new formatter_1.Formatter().format(mathSuperScriptProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:sSupPr": {},
            });
        });
    });
});
//# sourceMappingURL=math-super-script-function-properties.spec.js.map
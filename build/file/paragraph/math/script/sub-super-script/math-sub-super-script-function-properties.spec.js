"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_sub_super_script_function_properties_1 = require("./math-sub-super-script-function-properties");
describe("MathSubSuperScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathSubSuperScriptProperties with correct root key", () => {
            const mathSubSuperScriptProperties = new math_sub_super_script_function_properties_1.MathSubSuperScriptProperties();
            const tree = new formatter_1.Formatter().format(mathSubSuperScriptProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:sSubSupPr": {},
            });
        });
    });
});
//# sourceMappingURL=math-sub-super-script-function-properties.spec.js.map
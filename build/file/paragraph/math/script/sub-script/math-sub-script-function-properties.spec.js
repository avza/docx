"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_sub_script_function_properties_1 = require("./math-sub-script-function-properties");
describe("MathSubScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScriptProperties with correct root key", () => {
            const mathSubScriptProperties = new math_sub_script_function_properties_1.MathSubScriptProperties();
            const tree = new formatter_1.Formatter().format(mathSubScriptProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:sSubPr": {},
            });
        });
    });
});
//# sourceMappingURL=math-sub-script-function-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_pre_sub_super_script_function_properties_1 = require("./math-pre-sub-super-script-function-properties");
describe("MathPreSubSuperScriptProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathPreSubSuperScriptProperties with correct root key", () => {
            const mathPreSubSuperScriptProperties = new math_pre_sub_super_script_function_properties_1.MathPreSubSuperScriptProperties();
            const tree = new formatter_1.Formatter().format(mathPreSubSuperScriptProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:sPrePr": {},
            });
        });
    });
});
//# sourceMappingURL=math-pre-sub-super-script-function-properties.spec.js.map
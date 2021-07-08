"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_function_properties_1 = require("./math-function-properties");
describe("MathFunctionProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathFunctionProperties with correct root key", () => {
            const mathFunctionProperties = new math_function_properties_1.MathFunctionProperties();
            const tree = new formatter_1.Formatter().format(mathFunctionProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:funcPr": {},
            });
        });
    });
});
//# sourceMappingURL=math-function-properties.spec.js.map
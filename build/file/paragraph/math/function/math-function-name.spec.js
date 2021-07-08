"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_function_name_1 = require("./math-function-name");
describe("MathFunctionName", () => {
    describe("#constructor()", () => {
        it("should create a MathFunctionName with correct root key", () => {
            const mathFunctionName = new math_function_name_1.MathFunctionName([new math_run_1.MathRun("2")]);
            const tree = new formatter_1.Formatter().format(mathFunctionName);
            chai_1.expect(tree).to.deep.equal({
                "m:fName": [
                    {
                        "m:r": [
                            {
                                "m:t": ["2"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-function-name.spec.js.map
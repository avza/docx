"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_denominator_1 = require("./math-denominator");
describe("MathDenominator", () => {
    describe("#constructor()", () => {
        it("should create a MathDenominator with correct root key", () => {
            const mathDenominator = new math_denominator_1.MathDenominator([new math_run_1.MathRun("2+2")]);
            const tree = new formatter_1.Formatter().format(mathDenominator);
            chai_1.expect(tree).to.deep.equal({
                "m:den": [
                    {
                        "m:r": [
                            {
                                "m:t": ["2+2"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-denominator.spec.js.map
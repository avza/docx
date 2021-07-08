"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_numerator_1 = require("./math-numerator");
describe("MathNumerator", () => {
    describe("#constructor()", () => {
        it("should create a MathNumerator with correct root key", () => {
            const mathNumerator = new math_numerator_1.MathNumerator([new math_run_1.MathRun("2+2")]);
            const tree = new formatter_1.Formatter().format(mathNumerator);
            chai_1.expect(tree).to.deep.equal({
                "m:num": [
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
//# sourceMappingURL=math-numerator.spec.js.map
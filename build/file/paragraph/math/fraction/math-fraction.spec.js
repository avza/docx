"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_fraction_1 = require("./math-fraction");
describe("MathFraction", () => {
    describe("#constructor()", () => {
        it("should create a MathFraction with correct root key", () => {
            const mathFraction = new math_fraction_1.MathFraction({
                numerator: [new math_run_1.MathRun("2")],
                denominator: [new math_run_1.MathRun("2")],
            });
            const tree = new formatter_1.Formatter().format(mathFraction);
            chai_1.expect(tree).to.deep.equal({
                "m:f": [
                    {
                        "m:num": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["2"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:den": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["2"],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-fraction.spec.js.map
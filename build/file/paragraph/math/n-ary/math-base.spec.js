"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_base_1 = require("./math-base");
describe("MathBase", () => {
    describe("#constructor()", () => {
        it("should create a MathBase with correct root key", () => {
            const mathBase = new math_base_1.MathBase([new math_run_1.MathRun("2+2")]);
            const tree = new formatter_1.Formatter().format(mathBase);
            chai_1.expect(tree).to.deep.equal({
                "m:e": [
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
//# sourceMappingURL=math-base.spec.js.map
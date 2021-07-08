"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../../math-run");
const math_super_script_function_1 = require("./math-super-script-function");
describe("MathSuperScript", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScript with correct root key", () => {
            const mathSuperScript = new math_super_script_function_1.MathSuperScript({
                children: [new math_run_1.MathRun("e")],
                superScript: [new math_run_1.MathRun("2")],
            });
            const tree = new formatter_1.Formatter().format(mathSuperScript);
            chai_1.expect(tree).to.deep.equal({
                "m:sSup": [
                    {
                        "m:sSupPr": {},
                    },
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["e"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:sup": [
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
//# sourceMappingURL=math-super-script-function.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../../math-run");
const math_sub_super_script_function_1 = require("./math-sub-super-script-function");
describe("MathSubScript", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScript with correct root key", () => {
            const mathSubScript = new math_sub_super_script_function_1.MathSubSuperScript({
                children: [new math_run_1.MathRun("e")],
                subScript: [new math_run_1.MathRun("2")],
                superScript: [new math_run_1.MathRun("5")],
            });
            const tree = new formatter_1.Formatter().format(mathSubScript);
            chai_1.expect(tree).to.deep.equal({
                "m:sSubSup": [
                    {
                        "m:sSubSupPr": {},
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
                        "m:sub": [
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
                        "m:sup": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["5"],
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
//# sourceMappingURL=math-sub-super-script-function.spec.js.map
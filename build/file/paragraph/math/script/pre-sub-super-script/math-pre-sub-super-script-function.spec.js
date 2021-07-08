"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../../math-run");
const math_pre_sub_super_script_function_1 = require("./math-pre-sub-super-script-function");
describe("MathPreSubScript", () => {
    describe("#constructor()", () => {
        it("should create a MathPreSubScript with correct root key", () => {
            const mathPreSubScript = new math_pre_sub_super_script_function_1.MathPreSubSuperScript({
                children: [new math_run_1.MathRun("e")],
                subScript: [new math_run_1.MathRun("2")],
                superScript: [new math_run_1.MathRun("5")],
            });
            const tree = new formatter_1.Formatter().format(mathPreSubScript);
            chai_1.expect(tree).to.deep.equal({
                "m:sPre": [
                    {
                        "m:sPrePr": {},
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
//# sourceMappingURL=math-pre-sub-super-script-function.spec.js.map
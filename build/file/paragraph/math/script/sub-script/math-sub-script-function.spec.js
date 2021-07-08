"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../../math-run");
const math_sub_script_function_1 = require("./math-sub-script-function");
describe("MathSubScript", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScript with correct root key", () => {
            const mathSubScript = new math_sub_script_function_1.MathSubScript({
                children: [new math_run_1.MathRun("e")],
                subScript: [new math_run_1.MathRun("2")],
            });
            const tree = new formatter_1.Formatter().format(mathSubScript);
            chai_1.expect(tree).to.deep.equal({
                "m:sSub": [
                    {
                        "m:sSubPr": {},
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
                ],
            });
        });
    });
});
//# sourceMappingURL=math-sub-script-function.spec.js.map
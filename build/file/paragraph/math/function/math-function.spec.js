"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_function_1 = require("./math-function");
describe("MathFunction", () => {
    describe("#constructor()", () => {
        it("should create a MathFunction with correct root key", () => {
            const mathFunction = new math_function_1.MathFunction({
                name: [new math_run_1.MathRun("sin")],
                children: [new math_run_1.MathRun("60")],
            });
            const tree = new formatter_1.Formatter().format(mathFunction);
            chai_1.expect(tree).to.deep.equal({
                "m:func": [
                    {
                        "m:funcPr": {},
                    },
                    {
                        "m:fName": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["sin"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["60"],
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
//# sourceMappingURL=math-function.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_sum_1 = require("./math-sum");
describe("MathSum", () => {
    describe("#constructor()", () => {
        it("should create a MathSum with correct root key", () => {
            const mathSum = new math_sum_1.MathSum({
                children: [new math_run_1.MathRun("1")],
                subScript: [new math_run_1.MathRun("2")],
                superScript: [new math_run_1.MathRun("3")],
            });
            const tree = new formatter_1.Formatter().format(mathSum);
            chai_1.expect(tree).to.deep.equal({
                "m:nary": [
                    {
                        "m:naryPr": [
                            {
                                "m:chr": {
                                    _attr: {
                                        "m:val": "∑",
                                    },
                                },
                            },
                            {
                                "m:limLoc": {
                                    _attr: {
                                        "m:val": "undOvr",
                                    },
                                },
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
                                        "m:t": ["3"],
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
                                        "m:t": ["1"],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
        it("should add a hide when there is no subScript or superScript", () => {
            const mathSum = new math_sum_1.MathSum({
                children: [new math_run_1.MathRun("1")],
            });
            const tree = new formatter_1.Formatter().format(mathSum);
            chai_1.expect(tree).to.deep.equal({
                "m:nary": [
                    {
                        "m:naryPr": [
                            {
                                "m:chr": {
                                    _attr: {
                                        "m:val": "∑",
                                    },
                                },
                            },
                            {
                                "m:limLoc": {
                                    _attr: {
                                        "m:val": "undOvr",
                                    },
                                },
                            },
                            {
                                "m:supHide": {
                                    _attr: {
                                        "m:val": 1,
                                    },
                                },
                            },
                            {
                                "m:subHide": {
                                    _attr: {
                                        "m:val": 1,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["1"],
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
//# sourceMappingURL=math-sum.spec.js.map
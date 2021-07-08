"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_radical_1 = require("./math-radical");
describe("MathRadical", () => {
    describe("#constructor()", () => {
        it("should create a MathRadical with correct root key", () => {
            const mathRadical = new math_radical_1.MathRadical({
                children: [new math_run_1.MathRun("e")],
                degree: [new math_run_1.MathRun("2")],
            });
            const tree = new formatter_1.Formatter().format(mathRadical);
            chai_1.expect(tree).to.deep.equal({
                "m:rad": [
                    {
                        "m:radPr": {},
                    },
                    {
                        "m:deg": [
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
                ],
            });
        });
    });
});
//# sourceMappingURL=math-radical.spec.js.map
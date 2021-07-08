"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_round_brackets_1 = require("./math-round-brackets");
describe("MathRoundBrackets", () => {
    describe("#constructor()", () => {
        it("should create a MathRoundBrackets with correct root key", () => {
            const mathRoundBrackets = new math_round_brackets_1.MathRoundBrackets({
                children: [new math_run_1.MathRun("60")],
            });
            const tree = new formatter_1.Formatter().format(mathRoundBrackets);
            chai_1.expect(tree).to.deep.equal({
                "m:d": [
                    {
                        "m:dPr": {},
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
//# sourceMappingURL=math-round-brackets.spec.js.map
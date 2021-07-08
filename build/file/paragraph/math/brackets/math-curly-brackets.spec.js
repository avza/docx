"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_curly_brackets_1 = require("./math-curly-brackets");
describe("MathCurlyBrackets", () => {
    describe("#constructor()", () => {
        it("should create a MathCurlyBrackets with correct root key", () => {
            const mathCurlyBrackets = new math_curly_brackets_1.MathCurlyBrackets({
                children: [new math_run_1.MathRun("60")],
            });
            const tree = new formatter_1.Formatter().format(mathCurlyBrackets);
            chai_1.expect(tree).to.deep.equal({
                "m:d": [
                    {
                        "m:dPr": [
                            {
                                "m:begChr": {
                                    _attr: {
                                        "m:val": "{",
                                    },
                                },
                            },
                            {
                                "m:endChr": {
                                    _attr: {
                                        "m:val": "}",
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
//# sourceMappingURL=math-curly-brackets.spec.js.map
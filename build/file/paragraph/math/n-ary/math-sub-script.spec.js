"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_sub_script_1 = require("./math-sub-script");
describe("MathSubScriptElement", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScriptElement with correct root key", () => {
            const mathSubScriptElement = new math_sub_script_1.MathSubScriptElement([new math_run_1.MathRun("2+2")]);
            const tree = new formatter_1.Formatter().format(mathSubScriptElement);
            chai_1.expect(tree).to.deep.equal({
                "m:sub": [
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
//# sourceMappingURL=math-sub-script.spec.js.map
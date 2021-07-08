"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_super_script_1 = require("./math-super-script");
describe("MathSuperScriptElement", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScriptElement with correct root key", () => {
            const mathSuperScriptElement = new math_super_script_1.MathSuperScriptElement([new math_run_1.MathRun("2+2")]);
            const tree = new formatter_1.Formatter().format(mathSuperScriptElement);
            chai_1.expect(tree).to.deep.equal({
                "m:sup": [
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
//# sourceMappingURL=math-super-script.spec.js.map
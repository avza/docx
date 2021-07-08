"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("./math-run");
describe("MathRun", () => {
    describe("#constructor()", () => {
        it("should create a MathRun with correct root key", () => {
            const mathRun = new math_run_1.MathRun("2+2");
            const tree = new formatter_1.Formatter().format(mathRun);
            chai_1.expect(tree).to.deep.equal({
                "m:r": [
                    {
                        "m:t": ["2+2"],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-run.spec.js.map
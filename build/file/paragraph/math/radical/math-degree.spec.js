"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_run_1 = require("../math-run");
const math_degree_1 = require("./math-degree");
describe("MathDegree", () => {
    describe("#constructor()", () => {
        it("should create a MathDegree with correct root key", () => {
            const mathDegree = new math_degree_1.MathDegree();
            const tree = new formatter_1.Formatter().format(mathDegree);
            chai_1.expect(tree).to.deep.equal({
                "m:deg": {},
            });
        });
        it("should create a MathDegree with correct root key with child", () => {
            const mathDegree = new math_degree_1.MathDegree([new math_run_1.MathRun("2")]);
            const tree = new formatter_1.Formatter().format(mathDegree);
            chai_1.expect(tree).to.deep.equal({
                "m:deg": [
                    {
                        "m:r": [
                            {
                                "m:t": ["2"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-degree.spec.js.map
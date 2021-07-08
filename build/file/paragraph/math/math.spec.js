"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_1 = require("./math");
const math_run_1 = require("./math-run");
describe("Math", () => {
    describe("#constructor()", () => {
        it("should create a Math with correct root key", () => {
            const math = new math_1.Math({
                children: [],
            });
            const tree = new formatter_1.Formatter().format(math);
            chai_1.expect(tree).to.deep.equal({
                "m:oMath": {},
            });
        });
        it("should be able to add children", () => {
            const math = new math_1.Math({
                children: [new math_run_1.MathRun("2+2")],
            });
            const tree = new formatter_1.Formatter().format(math);
            chai_1.expect(tree).to.deep.equal({
                "m:oMath": [
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
//# sourceMappingURL=math.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_degree_hide_1 = require("./math-degree-hide");
describe("MathDegreeHide", () => {
    describe("#constructor()", () => {
        it("should create a MathDegreeHide with correct root key", () => {
            const mathDegreeHide = new math_degree_hide_1.MathDegreeHide();
            const tree = new formatter_1.Formatter().format(mathDegreeHide);
            chai_1.expect(tree).to.deep.equal({
                "m:degHide": {
                    _attr: {
                        "m:val": 1,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-degree-hide.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_sub_script_hide_1 = require("./math-sub-script-hide");
describe("MathSubScriptHide", () => {
    describe("#constructor()", () => {
        it("should create a MathSubScriptHide with correct root key", () => {
            const mathSubScriptHide = new math_sub_script_hide_1.MathSubScriptHide();
            const tree = new formatter_1.Formatter().format(mathSubScriptHide);
            chai_1.expect(tree).to.deep.equal({
                "m:subHide": {
                    _attr: {
                        "m:val": 1,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-sub-script-hide.spec.js.map
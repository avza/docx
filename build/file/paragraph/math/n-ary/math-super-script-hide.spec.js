"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_super_script_hide_1 = require("./math-super-script-hide");
describe("MathSuperScriptHide", () => {
    describe("#constructor()", () => {
        it("should create a MathSuperScriptHide with correct root key", () => {
            const mathSuperScriptHide = new math_super_script_hide_1.MathSuperScriptHide();
            const tree = new formatter_1.Formatter().format(mathSuperScriptHide);
            chai_1.expect(tree).to.deep.equal({
                "m:supHide": {
                    _attr: {
                        "m:val": 1,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-super-script-hide.spec.js.map
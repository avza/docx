"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_text_1 = require("./math-text");
describe("MathText", () => {
    describe("#constructor()", () => {
        it("should create a MathText with correct root key", () => {
            const mathText = new math_text_1.MathText("2+2");
            const tree = new formatter_1.Formatter().format(mathText);
            chai_1.expect(tree).to.deep.equal({
                "m:t": ["2+2"],
            });
        });
    });
});
//# sourceMappingURL=math-text.spec.js.map
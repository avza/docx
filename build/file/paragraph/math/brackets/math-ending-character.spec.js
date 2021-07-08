"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_ending_char_1 = require("./math-ending-char");
describe("MathEndingCharacter", () => {
    describe("#constructor()", () => {
        it("should create a MathEndingCharacter with correct root key", () => {
            const mathEndingCharacter = new math_ending_char_1.MathEndingCharacter("]");
            const tree = new formatter_1.Formatter().format(mathEndingCharacter);
            chai_1.expect(tree).to.deep.equal({
                "m:endChr": {
                    _attr: {
                        "m:val": "]",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-ending-character.spec.js.map
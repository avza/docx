"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_beginning_character_1 = require("./math-beginning-character");
describe("MathBeginningCharacter", () => {
    describe("#constructor()", () => {
        it("should create a MathBeginningCharacter with correct root key", () => {
            const mathBeginningCharacter = new math_beginning_character_1.MathBeginningCharacter("[");
            const tree = new formatter_1.Formatter().format(mathBeginningCharacter);
            chai_1.expect(tree).to.deep.equal({
                "m:begChr": {
                    _attr: {
                        "m:val": "[",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-beginning-character.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_accent_character_1 = require("./math-accent-character");
describe("MathAccentCharacter", () => {
    describe("#constructor()", () => {
        it("should create a MathAccentCharacter with correct root key", () => {
            const mathAccentCharacter = new math_accent_character_1.MathAccentCharacter("∑");
            const tree = new formatter_1.Formatter().format(mathAccentCharacter);
            chai_1.expect(tree).to.deep.equal({
                "m:chr": {
                    _attr: {
                        "m:val": "∑",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-accent-character.spec.js.map
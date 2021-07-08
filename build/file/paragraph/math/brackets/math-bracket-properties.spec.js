"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_bracket_properties_1 = require("./math-bracket-properties");
describe("MathBracketProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathBracketProperties with correct root key", () => {
            const mathBracketProperties = new math_bracket_properties_1.MathBracketProperties();
            const tree = new formatter_1.Formatter().format(mathBracketProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:dPr": {},
            });
        });
        it("should create a MathBracketProperties with correct root key and add brackets", () => {
            const mathBracketProperties = new math_bracket_properties_1.MathBracketProperties({
                beginningCharacter: "[",
                endingCharacter: "]",
            });
            const tree = new formatter_1.Formatter().format(mathBracketProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:dPr": [
                    {
                        "m:begChr": {
                            _attr: {
                                "m:val": "[",
                            },
                        },
                    },
                    {
                        "m:endChr": {
                            _attr: {
                                "m:val": "]",
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-bracket-properties.spec.js.map
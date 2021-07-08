"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_radical_properties_1 = require("./math-radical-properties");
describe("MathRadicalProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathRadicalProperties with correct root key", () => {
            const mathRadicalProperties = new math_radical_properties_1.MathRadicalProperties(true);
            const tree = new formatter_1.Formatter().format(mathRadicalProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:radPr": {},
            });
        });
        it("should create a MathRadicalProperties with correct root key with degree hide", () => {
            const mathRadicalProperties = new math_radical_properties_1.MathRadicalProperties(false);
            const tree = new formatter_1.Formatter().format(mathRadicalProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:radPr": [
                    {
                        "m:degHide": {
                            _attr: {
                                "m:val": 1,
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-radical-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_limit_location_1 = require("./math-limit-location");
describe("MathLimitLocation", () => {
    describe("#constructor()", () => {
        it("should create a MathLimitLocation with correct root key", () => {
            const mathLimitLocation = new math_limit_location_1.MathLimitLocation();
            const tree = new formatter_1.Formatter().format(mathLimitLocation);
            chai_1.expect(tree).to.deep.equal({
                "m:limLoc": {
                    _attr: {
                        "m:val": "undOvr",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=math-limit-location.spec.js.map
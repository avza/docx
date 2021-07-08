"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const convenience_functions_1 = require("./convenience-functions");
describe("Utility", () => {
    describe("#convertMillimetersToTwip", () => {
        it("should call the underlying header's addChildElement for Paragraph", () => {
            chai_1.expect(convenience_functions_1.convertMillimetersToTwip(1000)).to.equal(56692);
        });
    });
    describe("#convertInchesToTwip", () => {
        it("should call the underlying header's addChildElement", () => {
            chai_1.expect(convenience_functions_1.convertInchesToTwip(1)).to.equal(1440);
            chai_1.expect(convenience_functions_1.convertInchesToTwip(0.5)).to.equal(720);
            chai_1.expect(convenience_functions_1.convertInchesToTwip(0.25)).to.equal(360);
        });
    });
});
//# sourceMappingURL=convenience-functions.spec.js.map
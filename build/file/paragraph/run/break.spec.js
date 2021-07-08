"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const break_1 = require("./break");
describe("Break", () => {
    let currentBreak;
    beforeEach(() => {
        currentBreak = new break_1.Break();
    });
    describe("#constructor()", () => {
        it("should create a Break with correct root key", () => {
            const tree = new formatter_1.Formatter().format(currentBreak);
            chai_1.expect(tree).to.deep.equal({
                "w:br": {},
            });
        });
    });
});
//# sourceMappingURL=break.spec.js.map
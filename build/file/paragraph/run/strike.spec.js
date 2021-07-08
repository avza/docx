"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const formatting_1 = require("./formatting");
describe("Strike", () => {
    let strike;
    beforeEach(() => {
        strike = new formatting_1.Strike();
    });
    describe("#constructor()", () => {
        it("should create a Strike with correct root key", () => {
            const tree = new formatter_1.Formatter().format(strike);
            chai_1.expect(tree).to.deep.equal({
                "w:strike": {
                    _attr: {
                        "w:val": true,
                    },
                },
            });
        });
    });
});
describe("DoubleStrike", () => {
    let strike;
    beforeEach(() => {
        strike = new formatting_1.DoubleStrike();
    });
    describe("#constructor()", () => {
        it("should create a Double Strike with correct root key", () => {
            const tree = new formatter_1.Formatter().format(strike);
            chai_1.expect(tree).to.deep.equal({
                "w:dstrike": {
                    _attr: {
                        "w:val": true,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=strike.spec.js.map
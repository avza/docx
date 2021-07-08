"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const position_offset_1 = require("./position-offset");
describe("PositionOffset", () => {
    describe("#constructor()", () => {
        it("should create a element with correct root key", () => {
            const tree = new formatter_1.Formatter().format(new position_offset_1.PositionOffset(50));
            chai_1.expect(tree).to.deep.equal({
                "wp:posOffset": ["50"],
            });
        });
    });
});
//# sourceMappingURL=position-offset.spec.js.map
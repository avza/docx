"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const align_1 = require("./align");
const floating_position_1 = require("./floating-position");
describe("Align", () => {
    describe("#constructor()", () => {
        it("should create a element with correct root key", () => {
            const tree = new formatter_1.Formatter().format(new align_1.Align(floating_position_1.VerticalPositionAlign.CENTER));
            chai_1.expect(tree).to.deep.equal({
                "wp:align": ["center"],
            });
        });
    });
});
//# sourceMappingURL=align.spec.js.map
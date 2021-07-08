"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const visually_right_to_left_1 = require("./visually-right-to-left");
describe("VisuallyRightToLeft", () => {
    it("should create", () => {
        const visuallyRightToLeft = new visually_right_to_left_1.VisuallyRightToLeft();
        const tree = new formatter_1.Formatter().format(visuallyRightToLeft);
        chai_1.expect(tree).to.deep.equal({
            "w:bidiVisual": {},
        });
    });
});
//# sourceMappingURL=visually-right-to-left.spec.js.map
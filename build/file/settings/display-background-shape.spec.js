"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const display_background_shape_1 = require("./display-background-shape");
describe("DisplayBackgroundShape", () => {
    describe("#constructor()", () => {
        it("should create", () => {
            const displayBackgroundShape = new display_background_shape_1.DisplayBackgroundShape();
            const tree = new formatter_1.Formatter().format(displayBackgroundShape);
            chai_1.expect(tree).to.deep.equal({
                "w:displayBackgroundShape": {},
            });
        });
    });
});
//# sourceMappingURL=display-background-shape.spec.js.map
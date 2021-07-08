"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const outline_level_1 = require("./outline-level");
describe("ParagraphOutlineLevel", () => {
    let outlineLevel;
    describe("#constructor()", () => {
        it("should create an outlineLevel with given value", () => {
            outlineLevel = new outline_level_1.OutlineLevel(0);
            const tree = new formatter_1.Formatter().format(outlineLevel);
            chai_1.expect(tree).to.deep.equal({
                "w:outlineLvl": {
                    _attr: {
                        "w:val": 0,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=outline-level.spec.js.map
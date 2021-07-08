"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const floating_position_1 = require("./floating-position");
const vertical_position_1 = require("./vertical-position");
describe("VerticalPosition", () => {
    describe("#constructor()", () => {
        it("should create a element with position align", () => {
            const tree = new formatter_1.Formatter().format(new vertical_position_1.VerticalPosition({
                relative: floating_position_1.VerticalPositionRelativeFrom.MARGIN,
                align: floating_position_1.VerticalPositionAlign.INSIDE,
            }));
            chai_1.expect(tree).to.deep.equal({
                "wp:positionV": [
                    {
                        _attr: {
                            relativeFrom: "margin",
                        },
                    },
                    {
                        "wp:align": ["inside"],
                    },
                ],
            });
        });
        it("should create a element with offset", () => {
            const tree = new formatter_1.Formatter().format(new vertical_position_1.VerticalPosition({
                relative: floating_position_1.VerticalPositionRelativeFrom.MARGIN,
                offset: 40,
            }));
            chai_1.expect(tree).to.deep.equal({
                "wp:positionV": [
                    {
                        _attr: {
                            relativeFrom: "margin",
                        },
                    },
                    {
                        "wp:posOffset": ["40"],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=vertical-position.spec.js.map
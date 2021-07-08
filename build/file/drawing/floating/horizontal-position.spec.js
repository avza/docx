"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const floating_position_1 = require("./floating-position");
const horizontal_position_1 = require("./horizontal-position");
describe("HorizontalPosition", () => {
    describe("#constructor()", () => {
        it("should create a element with position align", () => {
            const tree = new formatter_1.Formatter().format(new horizontal_position_1.HorizontalPosition({
                relative: floating_position_1.HorizontalPositionRelativeFrom.MARGIN,
                align: floating_position_1.HorizontalPositionAlign.CENTER,
            }));
            chai_1.expect(tree).to.deep.equal({
                "wp:positionH": [
                    {
                        _attr: {
                            relativeFrom: "margin",
                        },
                    },
                    {
                        "wp:align": ["center"],
                    },
                ],
            });
        });
        it("should create a element with offset", () => {
            const tree = new formatter_1.Formatter().format(new horizontal_position_1.HorizontalPosition({
                relative: floating_position_1.HorizontalPositionRelativeFrom.MARGIN,
                offset: 40,
            }));
            chai_1.expect(tree).to.deep.equal({
                "wp:positionH": [
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
//# sourceMappingURL=horizontal-position.spec.js.map
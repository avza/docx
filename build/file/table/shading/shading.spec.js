"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const shading_1 = require("./shading");
describe("TableShading", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const shading = new shading_1.TableShading({});
            const tree = new formatter_1.Formatter().format(shading);
            chai_1.expect(tree).to.deep.equal({
                "w:shd": {
                    _attr: {},
                },
            });
        });
        it("should create with params", () => {
            const shading = new shading_1.TableShading({ val: shading_1.ShadingType.PERCENT_40, color: "FF0000", fill: "555555" });
            const tree = new formatter_1.Formatter().format(shading);
            chai_1.expect(tree).to.deep.equal({
                "w:shd": {
                    _attr: {
                        "w:color": "FF0000",
                        "w:fill": "555555",
                        "w:val": "pct40",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=shading.spec.js.map
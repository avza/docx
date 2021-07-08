"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const spacing_1 = require("./spacing");
describe("Spacing", () => {
    describe("#constructor", () => {
        it("should set the properties given", () => {
            const spacing = new spacing_1.Spacing({ before: 100, after: 120, line: 150 });
            const tree = new formatter_1.Formatter().format(spacing);
            chai_1.expect(tree).to.deep.equal({
                "w:spacing": { _attr: { "w:after": 120, "w:before": 100, "w:line": 150 } },
            });
        });
        it("should only set the given properties", () => {
            const spacing = new spacing_1.Spacing({ before: 100 });
            const tree = new formatter_1.Formatter().format(spacing);
            chai_1.expect(tree).to.deep.equal({
                "w:spacing": { _attr: { "w:before": 100 } },
            });
        });
    });
});
describe("ContextualSpacing", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const spacing = new spacing_1.ContextualSpacing(true);
            const tree = new formatter_1.Formatter().format(spacing);
            chai_1.expect(tree).to.deep.equal({
                "w:contextualSpacing": { _attr: { "w:val": 1 } },
            });
        });
        it("should create with value of 0 if param is false", () => {
            const spacing = new spacing_1.ContextualSpacing(false);
            const tree = new formatter_1.Formatter().format(spacing);
            chai_1.expect(tree).to.deep.equal({
                "w:contextualSpacing": { _attr: { "w:val": 0 } },
            });
        });
    });
});
//# sourceMappingURL=spacing.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const default_style_1 = require("./default-style");
describe("DefaultStyle", () => {
    it("creates an initially empty property object", () => {
        const style = default_style_1.DefaultStyle();
        chai_1.expect(style).to.have.property("w:styles");
        chai_1.expect(style["w:styles"].length).to.be.greaterThan(1);
        chai_1.expect(style["w:styles"][1]).to.have.property("w:docDefaults");
    });
});
//# sourceMappingURL=default-style.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const symbol_1 = require("./symbol");
describe("Symbol", () => {
    describe("#constructor", () => {
        it("creates an empty symbol run if no character is given", () => {
            const s = new symbol_1.Symbol();
            const f = new formatter_1.Formatter().format(s);
            chai_1.expect(f).to.deep.equal({ "w:sym": { _attr: { "w:char": "", "w:font": "Wingdings" } } });
        });
        it("creates the provided symbol with default font", () => {
            const s = new symbol_1.Symbol("F071");
            const f = new formatter_1.Formatter().format(s);
            chai_1.expect(f).to.deep.equal({ "w:sym": { _attr: { "w:char": "F071", "w:font": "Wingdings" } } });
        });
        it("creates the provided symbol with the provided font", () => {
            const s = new symbol_1.Symbol("F071", "Arial");
            const f = new formatter_1.Formatter().format(s);
            chai_1.expect(f).to.deep.equal({ "w:sym": { _attr: { "w:char": "F071", "w:font": "Arial" } } });
        });
    });
});
//# sourceMappingURL=symbol.spec.js.map
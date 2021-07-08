"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const run_fonts_1 = require("./run-fonts");
describe("RunFonts", () => {
    describe("#constructor()", () => {
        it("uses the font name for both ascii and hAnsi", () => {
            const tree = new formatter_1.Formatter().format(new run_fonts_1.RunFonts("Times"));
            chai_1.expect(tree).to.deep.equal({
                "w:rFonts": { _attr: { "w:ascii": "Times", "w:cs": "Times", "w:eastAsia": "Times", "w:hAnsi": "Times" } },
            });
        });
        it("uses hint if given", () => {
            const tree = new formatter_1.Formatter().format(new run_fonts_1.RunFonts("Times", "default"));
            chai_1.expect(tree).to.deep.equal({
                "w:rFonts": {
                    _attr: { "w:ascii": "Times", "w:cs": "Times", "w:eastAsia": "Times", "w:hAnsi": "Times", "w:hint": "default" },
                },
            });
        });
        it("uses the font attrs for ascii and eastAsia", () => {
            const tree = new formatter_1.Formatter().format(new run_fonts_1.RunFonts({ ascii: "Times", eastAsia: "KaiTi" }));
            chai_1.expect(tree).to.deep.equal({
                "w:rFonts": { _attr: { "w:ascii": "Times", "w:eastAsia": "KaiTi" } },
            });
        });
    });
});
//# sourceMappingURL=run-fonts.spec.js.map
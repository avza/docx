"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const deleted_text_1 = require("./deleted-text");
describe("Deleted Text", () => {
    describe("#constructor", () => {
        it("adds the passed in text to the component", () => {
            const t = new deleted_text_1.DeletedText(" this is\n text");
            const f = new formatter_1.Formatter().format(t);
            chai_1.expect(f).to.deep.equal({
                "w:delText": [{ _attr: { "xml:space": "preserve" } }, " this is\n text"],
            });
        });
    });
});
//# sourceMappingURL=deleted-text.spec.js.map
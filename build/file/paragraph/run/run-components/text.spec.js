"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const text_1 = require("./text");
describe("Text", () => {
    describe("#constructor", () => {
        it("adds the passed in text to the component", () => {
            const t = new text_1.Text(" this is\n text");
            const f = new formatter_1.Formatter().format(t);
            chai_1.expect(f).to.deep.equal({
                "w:t": [{ _attr: { "xml:space": "preserve" } }, " this is\n text"],
            });
        });
    });
});
//# sourceMappingURL=text.spec.js.map
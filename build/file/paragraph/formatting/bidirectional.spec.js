"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const bidirectional_1 = require("./bidirectional");
describe("Bidirectional", () => {
    it("should create", () => {
        const bidirectional = new bidirectional_1.Bidirectional();
        const tree = new formatter_1.Formatter().format(bidirectional);
        chai_1.expect(tree).to.deep.equal({
            "w:bidi": {},
        });
    });
});
//# sourceMappingURL=bidirectional.spec.js.map
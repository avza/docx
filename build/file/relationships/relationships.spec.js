"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const relationships_1 = require("./relationships");
describe("Relationships", () => {
    describe("#constructor()", () => {
        it("should create section properties with options", () => {
            const properties = new relationships_1.Relationships();
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["Relationships"]);
            chai_1.expect(tree["Relationships"]).to.deep.equal({
                _attr: { xmlns: "http://schemas.openxmlformats.org/package/2006/relationships" },
            });
        });
    });
});
//# sourceMappingURL=relationships.spec.js.map
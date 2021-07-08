"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const update_fields_1 = require("./update-fields");
const UF_TRUE = {
    "w:updateFields": {
        _attr: {
            "w:val": true,
        },
    },
};
const UF_FALSE = {
    "w:updateFields": {
        _attr: {
            "w:val": false,
        },
    },
};
describe("Update Fields", () => {
    describe("#constructor", () => {
        it("should construct a Update Fields with TRUE value by default", () => {
            const uf = new update_fields_1.UpdateFields();
            const tree = new formatter_1.Formatter().format(uf);
            chai_1.expect(tree).to.be.deep.equal(UF_TRUE);
        });
        it("should construct a Update Fields with TRUE value", () => {
            const uf = new update_fields_1.UpdateFields(true);
            const tree = new formatter_1.Formatter().format(uf);
            chai_1.expect(tree).to.be.deep.equal(UF_TRUE);
        });
        it("should construct a Update Fields with FALSE value", () => {
            const uf = new update_fields_1.UpdateFields(false);
            const tree = new formatter_1.Formatter().format(uf);
            chai_1.expect(tree).to.be.deep.equal(UF_FALSE);
        });
    });
});
//# sourceMappingURL=update-fields.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require("./");
describe("Attribute", () => {
    describe("#constructor()", () => {
        it("should have val as defined with populated constructor", () => {
            const newAttrs = new _1.Attributes({
                val: "test",
            });
            const stringifiedJson = JSON.stringify(newAttrs);
            const newJson = JSON.parse(stringifiedJson);
            chai_1.assert.equal(newJson.root.val, "test");
        });
        it("should have space value as defined with populated constructor", () => {
            const newAttrs = new _1.Attributes({
                space: "spaceTest",
            });
            const stringifiedJson = JSON.stringify(newAttrs);
            const newJson = JSON.parse(stringifiedJson);
            chai_1.assert.equal(newJson.root.space, "spaceTest");
        });
    });
});
//# sourceMappingURL=attribute.spec.js.map
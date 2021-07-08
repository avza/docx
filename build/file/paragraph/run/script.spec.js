"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const utility_1 = require("tests/utility");
const script_1 = require("./script");
describe("SubScript", () => {
    let subScript;
    beforeEach(() => {
        subScript = new script_1.SubScript();
    });
    describe("#constructor()", () => {
        it("should create a Sub Script with correct attributes", () => {
            const newJson = utility_1.Utility.jsonify(subScript);
            const attributes = {
                val: "subscript",
            };
            chai_1.assert.equal(JSON.stringify(newJson.root[0].root), JSON.stringify(attributes));
        });
        it("should create a Sub Script with correct root key", () => {
            const newJson = utility_1.Utility.jsonify(subScript);
            chai_1.assert.equal(newJson.rootKey, "w:vertAlign");
        });
    });
});
describe("SuperScript", () => {
    let superScript;
    beforeEach(() => {
        superScript = new script_1.SuperScript();
    });
    describe("#constructor()", () => {
        it("should create a Super Script with correct attributes", () => {
            const newJson = utility_1.Utility.jsonify(superScript);
            const attributes = {
                val: "superscript",
            };
            chai_1.assert.equal(JSON.stringify(newJson.root[0].root), JSON.stringify(attributes));
        });
        it("should create a Super Script with correct root key", () => {
            const newJson = utility_1.Utility.jsonify(superScript);
            chai_1.assert.equal(newJson.rootKey, "w:vertAlign");
        });
    });
});
//# sourceMappingURL=script.spec.js.map
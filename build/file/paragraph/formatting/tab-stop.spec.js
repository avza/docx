"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const utility_1 = require("tests/utility");
const tab_stop_1 = require("./tab-stop");
describe("LeftTabStop", () => {
    let tabStop;
    beforeEach(() => {
        tabStop = new tab_stop_1.TabStop(tab_stop_1.TabStopType.LEFT, 100);
    });
    describe("#constructor()", () => {
        it("should create a Tab Stop with correct attributes", () => {
            const newJson = utility_1.Utility.jsonify(tabStop);
            const attributes = {
                val: "left",
                pos: 100,
            };
            chai_1.assert.equal(JSON.stringify(newJson.root[0].root[0].root), JSON.stringify(attributes));
        });
        it("should create a Tab Stop with w:tab", () => {
            const newJson = utility_1.Utility.jsonify(tabStop);
            chai_1.assert.equal(newJson.root[0].rootKey, "w:tab");
        });
    });
});
describe("RightTabStop", () => {
    let tabStop;
    beforeEach(() => {
        tabStop = new tab_stop_1.TabStop(tab_stop_1.TabStopType.RIGHT, 100, tab_stop_1.LeaderType.DOT);
    });
    describe("#constructor()", () => {
        it("should create a Tab Stop with correct attributes", () => {
            const newJson = utility_1.Utility.jsonify(tabStop);
            const attributes = {
                val: "right",
                pos: 100,
                leader: "dot",
            };
            chai_1.assert.equal(JSON.stringify(newJson.root[0].root[0].root), JSON.stringify(attributes));
        });
        it("should create a Tab Stop with w:tab", () => {
            const newJson = utility_1.Utility.jsonify(tabStop);
            chai_1.assert.equal(newJson.root[0].rootKey, "w:tab");
        });
    });
});
//# sourceMappingURL=tab-stop.spec.js.map
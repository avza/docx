"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const simple_pos_1 = require("./simple-pos");
describe("SimplePos", () => {
    describe("#constructor()", () => {
        it("should create a element with correct root key", () => {
            const tree = new formatter_1.Formatter().format(new simple_pos_1.SimplePos());
            chai_1.expect(tree).to.deep.equal({
                "wp:simplePos": {
                    _attr: {
                        x: 0,
                        y: 0,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=simple-pos.spec.js.map
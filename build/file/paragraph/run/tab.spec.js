"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const tab_1 = require("./tab");
describe("Tab", () => {
    let tab;
    beforeEach(() => {
        tab = new tab_1.Tab();
    });
    describe("#constructor()", () => {
        it("should create a Tab with correct root key", () => {
            const tree = new formatter_1.Formatter().format(tab);
            chai_1.expect(tree).to.deep.equal({
                "w:tab": {},
            });
        });
    });
});
//# sourceMappingURL=tab.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const import_dotx_1 = require("./import-dotx");
describe("ImportDotx", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const file = new import_dotx_1.ImportDotx();
            chai_1.expect(file).to.deep.equal({});
        });
    });
});
//# sourceMappingURL=import-dotx.spec.js.map
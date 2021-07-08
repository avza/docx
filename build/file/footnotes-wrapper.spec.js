"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const footnotes_wrapper_1 = require("./footnotes-wrapper");
describe("FootnotesWrapper", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const file = new footnotes_wrapper_1.FootnotesWrapper();
            chai_1.expect(file.View).to.be.ok;
            chai_1.expect(file.Relationships).to.be.ok;
        });
    });
});
//# sourceMappingURL=footnotes-wrapper.spec.js.map
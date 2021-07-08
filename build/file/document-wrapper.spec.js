"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const document_wrapper_1 = require("./document-wrapper");
describe("DocumentWrapper", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const file = new document_wrapper_1.DocumentWrapper({ background: {} });
            chai_1.expect(file.View).to.be.ok;
            chai_1.expect(file.Relationships).to.be.ok;
        });
    });
});
//# sourceMappingURL=document-wrapper.spec.js.map
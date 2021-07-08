"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const header_reference_1 = require("./header-reference");
const header_reference_attributes_1 = require("./header-reference-attributes");
describe("HeaderReference", () => {
    it("should create", () => {
        const footer = new header_reference_1.HeaderReference({
            headerType: header_reference_attributes_1.HeaderReferenceType.DEFAULT,
            headerId: 1,
        });
        const tree = new formatter_1.Formatter().format(footer);
        chai_1.expect(tree).to.deep.equal({
            "w:headerReference": {
                _attr: {
                    "r:id": "rId1",
                    "w:type": "default",
                },
            },
        });
    });
    it("should create without a header type", () => {
        const footer = new header_reference_1.HeaderReference({
            headerId: 1,
        });
        const tree = new formatter_1.Formatter().format(footer);
        chai_1.expect(tree).to.deep.equal({
            "w:headerReference": {
                _attr: {
                    "r:id": "rId1",
                    "w:type": "default",
                },
            },
        });
    });
});
//# sourceMappingURL=header-reference.spec.js.map
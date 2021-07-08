"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const footer_reference_1 = require("./footer-reference");
const footer_reference_attributes_1 = require("./footer-reference-attributes");
describe("footerReference", () => {
    it("should create", () => {
        const footer = new footer_reference_1.FooterReference({
            footerType: footer_reference_attributes_1.FooterReferenceType.DEFAULT,
            footerId: 1,
        });
        const tree = new formatter_1.Formatter().format(footer);
        chai_1.expect(tree).to.deep.equal({
            "w:footerReference": {
                _attr: {
                    "r:id": "rId1",
                    "w:type": "default",
                },
            },
        });
    });
    it("should create without a footer type", () => {
        const footer = new footer_reference_1.FooterReference({
            footerId: 1,
        });
        const tree = new formatter_1.Formatter().format(footer);
        chai_1.expect(tree).to.deep.equal({
            "w:footerReference": {
                _attr: {
                    "r:id": "rId1",
                    "w:type": "default",
                },
            },
        });
    });
});
//# sourceMappingURL=footer-reference.spec.js.map
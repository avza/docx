"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const section_type_1 = require("./section-type");
const section_type_attributes_1 = require("./section-type-attributes");
describe("Type", () => {
    it("should create with even page section type", () => {
        const sectionType = new section_type_1.Type(section_type_attributes_1.SectionType.EVEN_PAGE);
        const tree = new formatter_1.Formatter().format(sectionType);
        chai_1.expect(tree).to.deep.equal({
            "w:type": {
                _attr: {
                    "w:val": "evenPage",
                },
            },
        });
    });
    it("should create with continuous section type", () => {
        const sectionType = new section_type_1.Type(section_type_attributes_1.SectionType.CONTINUOUS);
        const tree = new formatter_1.Formatter().format(sectionType);
        chai_1.expect(tree).to.deep.equal({
            "w:type": {
                _attr: {
                    "w:val": "continuous",
                },
            },
        });
    });
});
//# sourceMappingURL=section-type.spec.js.map
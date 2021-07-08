"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const paragraph_1 = require("../paragraph");
const footer_1 = require("./footer");
describe("Footer", () => {
    it("should create", () => {
        const footer = new footer_1.Footer(1);
        const tree = new formatter_1.Formatter().format(footer);
        chai_1.expect(tree).to.deep.equal({
            "w:ftr": {
                _attr: {
                    "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
                    "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
                    "xmlns:o": "urn:schemas-microsoft-com:office:office",
                    "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                    "xmlns:v": "urn:schemas-microsoft-com:vml",
                    "xmlns:w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
                    "xmlns:w10": "urn:schemas-microsoft-com:office:word",
                    "xmlns:w14": "http://schemas.microsoft.com/office/word/2010/wordml",
                    "xmlns:w15": "http://schemas.microsoft.com/office/word/2012/wordml",
                    "xmlns:wne": "http://schemas.microsoft.com/office/word/2006/wordml",
                    "xmlns:wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
                    "xmlns:wp14": "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
                    "xmlns:wpc": "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
                    "xmlns:wpg": "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
                    "xmlns:wpi": "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
                    "xmlns:wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
                },
            },
        });
    });
    it("should create with initContent", () => {
        const header = new footer_1.Footer(1, new paragraph_1.Paragraph({}));
        const tree = new formatter_1.Formatter().format(header);
        chai_1.expect(tree).to.deep.equal({
            "w:ftr": {},
        });
    });
});
//# sourceMappingURL=footer.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const document_background_1 = require("./document-background");
describe("DocumentBackground", () => {
    describe("#constructor()", () => {
        it("should create a DocumentBackground with no options and set color to auto", () => {
            const documentBackground = new document_background_1.DocumentBackground({});
            const tree = new formatter_1.Formatter().format(documentBackground);
            chai_1.expect(tree).to.deep.equal({
                "w:background": {
                    _attr: {
                        "w:color": "FFFFFF",
                    },
                },
            });
        });
        it("should create a DocumentBackground with no options and set color to value", () => {
            const documentBackground = new document_background_1.DocumentBackground({ color: "ffff00" });
            const tree = new formatter_1.Formatter().format(documentBackground);
            chai_1.expect(tree).to.deep.equal({
                "w:background": {
                    _attr: {
                        "w:color": "ffff00",
                    },
                },
            });
        });
        it("should create a DocumentBackground with no options and set other values", () => {
            const documentBackground = new document_background_1.DocumentBackground({
                color: "ffff00",
                themeColor: "test",
                themeShade: "test",
                themeTint: "test",
            });
            const tree = new formatter_1.Formatter().format(documentBackground);
            chai_1.expect(tree).to.deep.equal({
                "w:background": {
                    _attr: {
                        "w:color": "ffff00",
                        "w:themeColor": "test",
                        "w:themeShade": "test",
                        "w:themeTint": "test",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=document-background.spec.js.map
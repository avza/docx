"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const xml_components_1 = require("file/xml-components");
const styles_1 = require("./styles");
describe("Styles", () => {
    describe("#createParagraphStyle", () => {
        it("should create a new paragraph style and push it onto this collection", () => {
            const styles = new styles_1.Styles({
                paragraphStyles: [
                    {
                        id: "pStyleId",
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(styles)["w:styles"].filter((x) => !x._attr);
            chai_1.expect(tree).to.deep.equal([
                {
                    "w:style": { _attr: { "w:type": "paragraph", "w:styleId": "pStyleId" } },
                },
            ]);
        });
        it("should set the paragraph name if given", () => {
            const styles = new styles_1.Styles({
                paragraphStyles: [
                    {
                        id: "pStyleId",
                        name: "Paragraph Style",
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(styles)["w:styles"].filter((x) => !x._attr);
            chai_1.expect(tree).to.deep.equal([
                {
                    "w:style": [
                        { _attr: { "w:type": "paragraph", "w:styleId": "pStyleId" } },
                        { "w:name": { _attr: { "w:val": "Paragraph Style" } } },
                    ],
                },
            ]);
        });
    });
    describe("#createCharacterStyle", () => {
        it("should create a new character style and push it onto this collection", () => {
            const styles = new styles_1.Styles({
                characterStyles: [
                    {
                        id: "pStyleId",
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(styles)["w:styles"].filter((x) => !x._attr);
            chai_1.expect(tree).to.deep.equal([
                {
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "pStyleId" } },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                },
            ]);
        });
        it("should set the character name if given", () => {
            const styles = new styles_1.Styles({
                characterStyles: [
                    {
                        id: "pStyleId",
                        name: "Character Style",
                    },
                ],
            });
            const tree = new formatter_1.Formatter().format(styles)["w:styles"].filter((x) => !x._attr);
            chai_1.expect(tree).to.deep.equal([
                {
                    "w:style": [
                        { _attr: { "w:type": "character", "w:styleId": "pStyleId" } },
                        { "w:name": { _attr: { "w:val": "Character Style" } } },
                        {
                            "w:uiPriority": {
                                _attr: {
                                    "w:val": 99,
                                },
                            },
                        },
                        {
                            "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT,
                        },
                    ],
                },
            ]);
        });
    });
});
//# sourceMappingURL=styles.spec.js.map
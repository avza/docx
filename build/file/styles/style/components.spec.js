"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const components = require("./components");
const xml_components_1 = require("file/xml-components");
describe("Style components", () => {
    it("Name#constructor", () => {
        const style = new components.Name("Style Name");
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:name": { _attr: { "w:val": "Style Name" } } });
    });
    it("BasedOn#constructor", () => {
        const style = new components.BasedOn("otherId");
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:basedOn": { _attr: { "w:val": "otherId" } } });
    });
    it("Next#constructor", () => {
        const style = new components.Next("otherId");
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:next": { _attr: { "w:val": "otherId" } } });
    });
    it("Link#constructor", () => {
        const style = new components.Link("otherId");
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:link": { _attr: { "w:val": "otherId" } } });
    });
    it("UiPriority#constructor", () => {
        const style = new components.UiPriority(123);
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:uiPriority": { _attr: { "w:val": 123 } } });
    });
    it("UnhideWhenUsed#constructor", () => {
        const style = new components.UnhideWhenUsed();
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:unhideWhenUsed": xml_components_1.EMPTY_OBJECT });
    });
    it("QuickFormat#constructor", () => {
        const style = new components.QuickFormat();
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:qFormat": xml_components_1.EMPTY_OBJECT });
    });
    it("SemiHidden#constructor", () => {
        const style = new components.SemiHidden();
        const tree = new formatter_1.Formatter().format(style);
        chai_1.expect(tree).to.deep.equal({ "w:semiHidden": xml_components_1.EMPTY_OBJECT });
    });
});
//# sourceMappingURL=components.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const _1 = require("./");
class TestComponent extends _1.XmlComponent {
}
describe("XmlComponent", () => {
    let xmlComponent;
    beforeEach(() => {
        xmlComponent = new TestComponent("w:test");
    });
    describe("#constructor()", () => {
        it("should create an Xml Component which has the correct rootKey", () => {
            const tree = new formatter_1.Formatter().format(xmlComponent);
            chai_1.expect(tree).to.deep.equal({
                "w:test": {},
            });
        });
    });
    describe("#prepForXml()", () => {
        it("should skip deleted elements", () => {
            const child = new TestComponent("w:test1");
            child.delete();
            xmlComponent.addChildElement(child);
            const xml = xmlComponent.prepForXml();
            if (!xml) {
                return;
            }
            chai_1.expect(xml["w:test"]).to.deep.equal(_1.EMPTY_OBJECT);
        });
    });
});
//# sourceMappingURL=xml-component.spec.js.map
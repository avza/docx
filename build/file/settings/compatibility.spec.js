"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const xml_components_1 = require("file/xml-components");
const compatibility_1 = require("./compatibility");
describe("Compatibility", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const compatibility = new compatibility_1.Compatibility({});
            const tree = new formatter_1.Formatter().format(compatibility);
            chai_1.expect(tree).to.deep.equal({ "w:compat": xml_components_1.EMPTY_OBJECT });
        });
    });
    describe("#doNotExpandShiftReturn", () => {
        it("should create a setting for not justifying lines ending in soft line break", () => {
            const compatibility = new compatibility_1.Compatibility({
                doNotExpandShiftReturn: true,
            });
            const tree = new formatter_1.Formatter().format(compatibility);
            chai_1.expect(tree).to.deep.equal({ "w:compat": [{ "w:doNotExpandShiftReturn": xml_components_1.EMPTY_OBJECT }] });
        });
    });
});
//# sourceMappingURL=compatibility.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const custom_properties_1 = require("./custom-properties");
describe("CustomProperties", () => {
    describe("#constructor()", () => {
        it("sets the appropriate attributes on the top-level", () => {
            const properties = new custom_properties_1.CustomProperties([]);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({
                Properties: {
                    _attr: {
                        xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
                        "xmlns:vt": "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
                    },
                },
            });
        });
        it("should create custom properties with all the attributes given", () => {
            const properties = new custom_properties_1.CustomProperties([
                { name: "Address", value: "123" },
                { name: "Author", value: "456" },
            ]);
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({
                Properties: [
                    {
                        _attr: {
                            xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
                            "xmlns:vt": "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
                        },
                    },
                    {
                        property: [
                            {
                                _attr: {
                                    fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                                    pid: "2",
                                    name: "Address",
                                },
                            },
                            {
                                "vt:lpwstr": ["123"],
                            },
                        ],
                    },
                    {
                        property: [
                            {
                                _attr: {
                                    fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                                    pid: "3",
                                    name: "Author",
                                },
                            },
                            {
                                "vt:lpwstr": ["456"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=custom-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const document_defaults_1 = require("./document-defaults");
const formatter_1 = require("export/formatter");
describe("DocumentDefaults", () => {
    it("#constructor", () => {
        const defaults = new document_defaults_1.DocumentDefaults({
            paragraph: { spacing: { line: 240 } },
            run: { color: "808080" },
        });
        const tree = new formatter_1.Formatter().format(defaults);
        chai_1.expect(tree).to.deep.equal({
            "w:docDefaults": [
                {
                    "w:rPrDefault": [
                        {
                            "w:rPr": [
                                {
                                    "w:color": { _attr: { "w:val": "808080" } },
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:pPrDefault": [
                        {
                            "w:pPr": [
                                {
                                    "w:spacing": {
                                        _attr: {
                                            "w:line": 240,
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    });
});
//# sourceMappingURL=document-defaults.spec.js.map
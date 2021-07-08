"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const sequential_identifier_1 = require("./sequential-identifier");
describe("Sequential Identifier", () => {
    describe("#constructor", () => {
        it("should construct a SEQ without options", () => {
            const seq = new sequential_identifier_1.SequentialIdentifier("Figure");
            const tree = new formatter_1.Formatter().format(seq);
            chai_1.expect(tree).to.be.deep.equal(DEFAULT_SEQ);
        });
    });
});
const DEFAULT_SEQ = {
    "w:r": [
        {
            "w:fldChar": {
                _attr: {
                    "w:fldCharType": "begin",
                    "w:dirty": true,
                },
            },
        },
        {
            "w:instrText": [
                {
                    _attr: {
                        "xml:space": "preserve",
                    },
                },
                "SEQ Figure",
            ],
        },
        {
            "w:fldChar": {
                _attr: {
                    "w:fldCharType": "separate",
                },
            },
        },
        {
            "w:fldChar": {
                _attr: {
                    "w:fldCharType": "end",
                },
            },
        },
    ],
};
//# sourceMappingURL=sequential-identifier.spec.js.map
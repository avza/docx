"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const inserted_text_run_1 = require("./inserted-text-run");
describe("InsertedTextRun", () => {
    describe("#constructor", () => {
        it("should create a inserted text run", () => {
            const insertedTextRun = new inserted_text_run_1.InsertedTextRun({ text: "some text", id: 0, date: "123", author: "Author" });
            const tree = new formatter_1.Formatter().format(insertedTextRun);
            chai_1.expect(tree).to.deep.equal({
                "w:ins": [
                    {
                        _attr: {
                            "w:author": "Author",
                            "w:date": "123",
                            "w:id": 0,
                        },
                    },
                    {
                        "w:r": [
                            {
                                "w:t": [
                                    {
                                        _attr: {
                                            "xml:space": "preserve",
                                        },
                                    },
                                    "some text",
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=inserted-text-run.spec.js.map
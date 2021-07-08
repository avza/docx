"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const unordered_list_1 = require("./unordered-list");
describe("NumberProperties", () => {
    let numberProperties;
    beforeEach(() => {
        numberProperties = new unordered_list_1.NumberProperties(5, 10);
    });
    describe("#constructor()", () => {
        it("should create a Number Properties with correct root key", () => {
            const tree = new formatter_1.Formatter().format(numberProperties);
            chai_1.expect(tree).to.deep.equal({
                "w:numPr": [
                    {
                        "w:ilvl": {
                            _attr: {
                                "w:val": 10,
                            },
                        },
                    },
                    {
                        "w:numId": {
                            _attr: {
                                "w:val": 5,
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=unordered-list.spec.js.map
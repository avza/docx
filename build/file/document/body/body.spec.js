"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const body_1 = require("./body");
describe("Body", () => {
    let body;
    beforeEach(() => {
        body = new body_1.Body();
    });
    describe("#addSection", () => {
        it("should add section with default parameters", () => {
            body.addSection({
                width: 10000,
                height: 10000,
            });
            const tree = new formatter_1.Formatter().format(body);
            chai_1.expect(tree).to.deep.equal({
                "w:body": [
                    {
                        "w:sectPr": [
                            { "w:pgSz": { _attr: { "w:w": 10000, "w:h": 10000, "w:orient": "portrait" } } },
                            {
                                "w:pgMar": {
                                    _attr: {
                                        "w:top": 1440,
                                        "w:right": 1440,
                                        "w:bottom": 1440,
                                        "w:left": 1440,
                                        "w:header": 708,
                                        "w:footer": 708,
                                        "w:gutter": 0,
                                        "w:mirrorMargins": false,
                                    },
                                },
                            },
                            { "w:cols": { _attr: { "w:space": 708, "w:sep": false, "w:num": 1 } } },
                            { "w:docGrid": { _attr: { "w:linePitch": 360 } } },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=body.spec.js.map
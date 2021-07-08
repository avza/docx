"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const math_naray_properties_1 = require("./math-naray-properties");
describe("MathNArayProperties", () => {
    describe("#constructor()", () => {
        it("should create a MathNArayProperties with correct root key", () => {
            const mathNArayProperties = new math_naray_properties_1.MathNArayProperties("∑", true, true);
            const tree = new formatter_1.Formatter().format(mathNArayProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:naryPr": [
                    {
                        "m:chr": {
                            _attr: {
                                "m:val": "∑",
                            },
                        },
                    },
                    {
                        "m:limLoc": {
                            _attr: {
                                "m:val": "undOvr",
                            },
                        },
                    },
                ],
            });
        });
        it("should add super-script hide attributes", () => {
            const mathNArayProperties = new math_naray_properties_1.MathNArayProperties("∑", false, true);
            const tree = new formatter_1.Formatter().format(mathNArayProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:naryPr": [
                    {
                        "m:chr": {
                            _attr: {
                                "m:val": "∑",
                            },
                        },
                    },
                    {
                        "m:limLoc": {
                            _attr: {
                                "m:val": "undOvr",
                            },
                        },
                    },
                    {
                        "m:supHide": {
                            _attr: {
                                "m:val": 1,
                            },
                        },
                    },
                ],
            });
        });
        it("should add sub-script hide attributes", () => {
            const mathNArayProperties = new math_naray_properties_1.MathNArayProperties("∑", true, false);
            const tree = new formatter_1.Formatter().format(mathNArayProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:naryPr": [
                    {
                        "m:chr": {
                            _attr: {
                                "m:val": "∑",
                            },
                        },
                    },
                    {
                        "m:limLoc": {
                            _attr: {
                                "m:val": "undOvr",
                            },
                        },
                    },
                    {
                        "m:subHide": {
                            _attr: {
                                "m:val": 1,
                            },
                        },
                    },
                ],
            });
        });
        it("should add both super-script and sub-script hide attributes", () => {
            const mathNArayProperties = new math_naray_properties_1.MathNArayProperties("∑", false, false);
            const tree = new formatter_1.Formatter().format(mathNArayProperties);
            chai_1.expect(tree).to.deep.equal({
                "m:naryPr": [
                    {
                        "m:chr": {
                            _attr: {
                                "m:val": "∑",
                            },
                        },
                    },
                    {
                        "m:limLoc": {
                            _attr: {
                                "m:val": "undOvr",
                            },
                        },
                    },
                    {
                        "m:supHide": {
                            _attr: {
                                "m:val": 1,
                            },
                        },
                    },
                    {
                        "m:subHide": {
                            _attr: {
                                "m:val": 1,
                            },
                        },
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=math-naray-properties.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_float_properties_1 = require("./table-float-properties");
const table_overlap_1 = require("./table-overlap");
describe("Table Float Properties", () => {
    describe("#constructor", () => {
        it("should construct a TableFloatProperties with all options", () => {
            const properties = new table_float_properties_1.TableFloatProperties({
                horizontalAnchor: table_float_properties_1.TableAnchorType.MARGIN,
                verticalAnchor: table_float_properties_1.TableAnchorType.PAGE,
                absoluteHorizontalPosition: 10,
                relativeHorizontalPosition: table_float_properties_1.RelativeHorizontalPosition.CENTER,
                absoluteVerticalPosition: 20,
                relativeVerticalPosition: table_float_properties_1.RelativeVerticalPosition.BOTTOM,
                bottomFromText: 30,
                topFromText: 40,
                leftFromText: 50,
                rightFromText: 60,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal(DEFAULT_TFP);
        });
        it("should add overlap", () => {
            const properties = new table_float_properties_1.TableFloatProperties({
                overlap: table_overlap_1.OverlapType.NEVER,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(tree).to.deep.equal({
                "w:tblpPr": [
                    {
                        _attr: {
                            overlap: "never",
                        },
                    },
                    {
                        "w:tblOverlap": {
                            _attr: {
                                "w:val": "never",
                            },
                        },
                    },
                ],
            });
        });
    });
});
const DEFAULT_TFP = {
    "w:tblpPr": {
        _attr: {
            "w:horzAnchor": "margin",
            "w:vertAnchor": "page",
            "w:tblpX": 10,
            "w:tblpXSpec": "center",
            "w:tblpY": 20,
            "w:tblpYSpec": "bottom",
            "w:bottomFromText": 30,
            "w:topFromText": 40,
            "w:leftFromText": 50,
            "w:rightFromText": 60,
        },
    },
};
//# sourceMappingURL=table-float-properties.spec.js.map
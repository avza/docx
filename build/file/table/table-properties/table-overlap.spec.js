"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_overlap_1 = require("./table-overlap");
describe("TableOverlap", () => {
    describe("#constructor", () => {
        it("sets the width attribute to the value given", () => {
            const tableOverlap = new table_overlap_1.TableOverlap(table_overlap_1.OverlapType.OVERLAP);
            const tree = new formatter_1.Formatter().format(tableOverlap);
            chai_1.expect(tree).to.deep.equal({
                "w:tblOverlap": {
                    _attr: {
                        "w:val": "overlap",
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=table-overlap.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCellMargin = void 0;
const xml_components_1 = require("file/xml-components");
const cell_margin_1 = require("./cell-margin");
class TableCellMargin extends xml_components_1.XmlComponent {
    constructor({ top = 0, left = 0, right = 0, bottom = 0 }) {
        super("w:tcMar");
        this.root.push(new cell_margin_1.TopCellMargin(top));
        this.root.push(new cell_margin_1.BottomCellMargin(bottom));
        this.root.push(new cell_margin_1.RightCellMargin(right));
        this.root.push(new cell_margin_1.LeftCellMargin(left));
    }
}
exports.TableCellMargin = TableCellMargin;
//# sourceMappingURL=table-cell-margins.js.map
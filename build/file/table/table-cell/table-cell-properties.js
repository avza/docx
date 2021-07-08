"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCellProperties = void 0;
const xml_components_1 = require("file/xml-components");
const shading_1 = require("../shading");
const table_cell_margins_1 = require("./cell-margin/table-cell-margins");
const table_cell_components_1 = require("./table-cell-components");
class TableCellProperties extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor() {
        super("w:tcPr");
        this.cellBorder = new table_cell_components_1.TableCellBorders();
        this.root.push(this.cellBorder);
    }
    get Borders() {
        return this.cellBorder;
    }
    addGridSpan(cellSpan) {
        this.root.push(new table_cell_components_1.GridSpan(cellSpan));
        return this;
    }
    addVerticalMerge(type) {
        this.root.push(new table_cell_components_1.VerticalMerge(type));
        return this;
    }
    setVerticalAlign(type) {
        this.root.push(new table_cell_components_1.VAlign(type));
        return this;
    }
    setWidth(width, type = table_cell_components_1.WidthType.AUTO) {
        this.root.push(new table_cell_components_1.TableCellWidth(width, type));
        return this;
    }
    setShading(attrs) {
        this.root.push(new shading_1.TableShading(attrs));
        return this;
    }
    addMargins(options) {
        this.root.push(new table_cell_margins_1.TableCellMargin(options));
        return this;
    }
    setTextDirection(type) {
        this.root.push(new table_cell_components_1.TDirection(type));
        return this;
    }
}
exports.TableCellProperties = TableCellProperties;
//# sourceMappingURL=table-cell-properties.js.map
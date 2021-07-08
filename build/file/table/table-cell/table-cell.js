"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCell = void 0;
const paragraph_1 = require("file/paragraph");
const xml_components_1 = require("file/xml-components");
const table_cell_components_1 = require("./table-cell-components");
const table_cell_properties_1 = require("./table-cell-properties");
class TableCell extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:tc");
        this.options = options;
        this.properties = new table_cell_properties_1.TableCellProperties();
        this.root.push(this.properties);
        for (const child of options.children) {
            this.root.push(child);
        }
        if (options.verticalAlign) {
            this.properties.setVerticalAlign(options.verticalAlign);
        }
        if (options.textDirection) {
            this.properties.setTextDirection(options.textDirection);
        }
        if (options.verticalMerge) {
            this.properties.addVerticalMerge(options.verticalMerge);
        }
        else if (options.rowSpan && options.rowSpan > 1) {
            this.properties.addVerticalMerge(table_cell_components_1.VerticalMergeType.RESTART);
        }
        if (options.margins) {
            this.properties.addMargins(options.margins);
        }
        if (options.shading) {
            this.properties.setShading(options.shading);
        }
        if (options.columnSpan) {
            this.properties.addGridSpan(options.columnSpan);
        }
        if (options.width) {
            this.properties.setWidth(options.width.size, options.width.type);
        }
        if (options.borders) {
            if (options.borders.top) {
                this.properties.Borders.addTopBorder(options.borders.top.style, options.borders.top.size, options.borders.top.color);
            }
            if (options.borders.bottom) {
                this.properties.Borders.addBottomBorder(options.borders.bottom.style, options.borders.bottom.size, options.borders.bottom.color);
            }
            if (options.borders.left) {
                this.properties.Borders.addLeftBorder(options.borders.left.style, options.borders.left.size, options.borders.left.color);
            }
            if (options.borders.right) {
                this.properties.Borders.addRightBorder(options.borders.right.style, options.borders.right.size, options.borders.right.color);
            }
        }
    }
    prepForXml(file) {
        if (!(this.root[this.root.length - 1] instanceof paragraph_1.Paragraph)) {
            this.root.push(new paragraph_1.Paragraph({}));
        }
        return super.prepForXml(file);
    }
}
exports.TableCell = TableCell;
//# sourceMappingURL=table-cell.js.map
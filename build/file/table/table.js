"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const xml_components_1 = require("file/xml-components");
const grid_1 = require("./grid");
const table_cell_1 = require("./table-cell");
const table_properties_1 = require("./table-properties");
class Table extends xml_components_1.XmlComponent {
    constructor({ rows, width, columnWidths = Array(Math.max(...rows.map((row) => row.CellCount))).fill(100), margins: { marginUnitType, top, bottom, right, left } = { marginUnitType: table_cell_1.WidthType.AUTO, top: 0, bottom: 0, right: 0, left: 0 }, float, layout, borders, alignment, visuallyRightToLeft, }) {
        super("w:tbl");
        this.root.push(new table_properties_1.TableProperties({
            borders: borders !== null && borders !== void 0 ? borders : {},
            width: width !== null && width !== void 0 ? width : { size: 100 },
            float,
            layout,
            alignment,
            cellMargin: {
                bottom: {
                    value: bottom || 0,
                    type: marginUnitType,
                },
                top: {
                    value: top || 0,
                    type: marginUnitType,
                },
                left: {
                    value: left || 0,
                    type: marginUnitType,
                },
                right: {
                    value: right || 0,
                    type: marginUnitType,
                },
            },
            visuallyRightToLeft,
        }));
        this.root.push(new grid_1.TableGrid(columnWidths));
        for (const row of rows) {
            this.root.push(row);
        }
        rows.forEach((row, rowIndex) => {
            if (rowIndex === rows.length - 1) {
                return;
            }
            let columnIndex = 0;
            row.cells.forEach((cell) => {
                if (cell.options.rowSpan && cell.options.rowSpan > 1) {
                    const continueCell = new table_cell_1.TableCell({
                        rowSpan: cell.options.rowSpan - 1,
                        columnSpan: cell.options.columnSpan,
                        borders: cell.options.borders,
                        children: [],
                        verticalMerge: table_cell_1.VerticalMergeType.CONTINUE,
                    });
                    rows[rowIndex + 1].addCellToColumnIndex(continueCell, columnIndex);
                }
                columnIndex += cell.options.columnSpan || 1;
            });
        });
    }
}
exports.Table = Table;
//# sourceMappingURL=table.js.map
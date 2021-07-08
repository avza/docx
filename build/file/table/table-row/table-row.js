"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
const xml_components_1 = require("file/xml-components");
const table_cell_1 = require("../table-cell");
const table_row_properties_1 = require("./table-row-properties");
class TableRow extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:tr");
        this.options = options;
        this.properties = new table_row_properties_1.TableRowProperties();
        this.root.push(this.properties);
        for (const child of options.children) {
            this.root.push(child);
        }
        if (options.cantSplit) {
            this.properties.setCantSplit();
        }
        if (options.tableHeader) {
            this.properties.setTableHeader();
        }
        if (options.height) {
            this.properties.setHeight(options.height.value, options.height.rule);
        }
    }
    get CellCount() {
        return this.options.children.length;
    }
    get Children() {
        return this.options.children;
    }
    get cells() {
        return this.root.filter((xmlComponent) => xmlComponent instanceof table_cell_1.TableCell);
    }
    addCellToIndex(cell, index) {
        this.root.splice(index + 1, 0, cell);
    }
    addCellToColumnIndex(cell, columnIndex) {
        const rootIndex = this.columnIndexToRootIndex(columnIndex, true);
        this.addCellToIndex(cell, rootIndex - 1);
    }
    rootIndexToColumnIndex(rootIndex) {
        if (rootIndex < 1 || rootIndex >= this.root.length) {
            throw new Error(`cell 'rootIndex' should between 1 to ${this.root.length - 1}`);
        }
        let colIdx = 0;
        for (let rootIdx = 1; rootIdx < rootIndex; rootIdx++) {
            const cell = this.root[rootIdx];
            colIdx += cell.options.columnSpan || 1;
        }
        return colIdx;
    }
    columnIndexToRootIndex(columnIndex, allowEndNewCell = false) {
        if (columnIndex < 0) {
            throw new Error(`cell 'columnIndex' should not less than zero`);
        }
        let colIdx = 0;
        let rootIdx = 1;
        while (colIdx <= columnIndex) {
            if (rootIdx >= this.root.length) {
                if (allowEndNewCell) {
                    return this.root.length;
                }
                else {
                    throw new Error(`cell 'columnIndex' should not great than ${colIdx - 1}`);
                }
            }
            const cell = this.root[rootIdx];
            rootIdx += 1;
            colIdx += (cell && cell.options.columnSpan) || 1;
        }
        return rootIdx - 1;
    }
}
exports.TableRow = TableRow;
//# sourceMappingURL=table-row.js.map
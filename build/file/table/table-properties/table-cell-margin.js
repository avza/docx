"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCellMargin = void 0;
const xml_components_1 = require("file/xml-components");
const table_cell_1 = require("../table-cell");
class TableCellMarginAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { value: "w:w", type: "w:type" };
    }
}
class BaseTableCellMargin extends xml_components_1.XmlComponent {
    constructor(rootKey, options) {
        var _a;
        super(rootKey);
        this.root.push(new TableCellMarginAttributes({
            type: (_a = options.type) !== null && _a !== void 0 ? _a : table_cell_1.WidthType.DXA,
            value: options.value,
        }));
    }
    setProperties(value, type = table_cell_1.WidthType.DXA) {
        this.root.push(new TableCellMarginAttributes({
            type: type,
            value: value,
        }));
    }
}
class TableCellMargin extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor(options) {
        super("w:tblCellMar");
        if (options.bottom) {
            this.root.push(new BaseTableCellMargin("w:bottom", options.bottom));
        }
        if (options.top) {
            this.root.push(new BaseTableCellMargin("w:top", options.top));
        }
        if (options.left) {
            this.root.push(new BaseTableCellMargin("w:left", options.left));
        }
        if (options.right) {
            this.root.push(new BaseTableCellMargin("w:right", options.right));
        }
    }
}
exports.TableCellMargin = TableCellMargin;
//# sourceMappingURL=table-cell-margin.js.map
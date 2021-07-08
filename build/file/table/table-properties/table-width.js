"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferredTableWidth = void 0;
const xml_components_1 = require("file/xml-components");
const table_cell_1 = require("../table-cell");
class TableWidthAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { type: "w:type", w: "w:w" };
    }
}
class PreferredTableWidth extends xml_components_1.XmlComponent {
    constructor(type = table_cell_1.WidthType.AUTO, w) {
        super("w:tblW");
        const width = type === table_cell_1.WidthType.PERCENTAGE ? `${w}%` : w;
        this.root.push(new TableWidthAttributes({ type: type, w: width }));
    }
}
exports.PreferredTableWidth = PreferredTableWidth;
//# sourceMappingURL=table-width.js.map
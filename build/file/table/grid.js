"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridCol = exports.TableGrid = void 0;
const xml_components_1 = require("file/xml-components");
class TableGrid extends xml_components_1.XmlComponent {
    constructor(widths) {
        super("w:tblGrid");
        for (const width of widths) {
            this.root.push(new GridCol(width));
        }
    }
}
exports.TableGrid = TableGrid;
class GridColAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { w: "w:w" };
    }
}
class GridCol extends xml_components_1.XmlComponent {
    constructor(width) {
        super("w:gridCol");
        if (width !== undefined) {
            this.root.push(new GridColAttributes({ w: width }));
        }
    }
}
exports.GridCol = GridCol;
//# sourceMappingURL=grid.js.map
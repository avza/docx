"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const xml_components_1 = require("file/xml-components");
const columns_attributes_1 = require("./columns-attributes");
class Columns extends xml_components_1.XmlComponent {
    constructor(space, num, separate) {
        super("w:cols");
        this.root.push(new columns_attributes_1.ColumnsAttributes({
            space: space,
            num: num,
            separate: separate,
        }));
    }
}
exports.Columns = Columns;
//# sourceMappingURL=columns.js.map
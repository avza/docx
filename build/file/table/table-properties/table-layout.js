"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableLayout = exports.TableLayoutType = void 0;
const xml_components_1 = require("file/xml-components");
var TableLayoutType;
(function (TableLayoutType) {
    TableLayoutType["AUTOFIT"] = "autofit";
    TableLayoutType["FIXED"] = "fixed";
})(TableLayoutType = exports.TableLayoutType || (exports.TableLayoutType = {}));
class TableLayoutAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { type: "w:type" };
    }
}
class TableLayout extends xml_components_1.XmlComponent {
    constructor(type) {
        super("w:tblLayout");
        this.root.push(new TableLayoutAttributes({ type }));
    }
}
exports.TableLayout = TableLayout;
//# sourceMappingURL=table-layout.js.map
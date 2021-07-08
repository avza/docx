"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOverlap = exports.OverlapType = void 0;
const xml_components_1 = require("file/xml-components");
var OverlapType;
(function (OverlapType) {
    OverlapType["NEVER"] = "never";
    OverlapType["OVERLAP"] = "overlap";
})(OverlapType = exports.OverlapType || (exports.OverlapType = {}));
class TableOverlapAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class TableOverlap extends xml_components_1.XmlComponent {
    constructor(type) {
        super("w:tblOverlap");
        this.root.push(new TableOverlapAttributes({ val: type }));
    }
}
exports.TableOverlap = TableOverlap;
//# sourceMappingURL=table-overlap.js.map
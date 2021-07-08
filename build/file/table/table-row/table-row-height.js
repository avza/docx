"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowHeight = exports.TableRowHeightAttributes = exports.HeightRule = void 0;
const xml_components_1 = require("file/xml-components");
var HeightRule;
(function (HeightRule) {
    HeightRule["AUTO"] = "auto";
    HeightRule["ATLEAST"] = "atLeast";
    HeightRule["EXACT"] = "exact";
})(HeightRule = exports.HeightRule || (exports.HeightRule = {}));
class TableRowHeightAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { value: "w:val", rule: "w:hRule" };
    }
}
exports.TableRowHeightAttributes = TableRowHeightAttributes;
class TableRowHeight extends xml_components_1.XmlComponent {
    constructor(value, rule) {
        super("w:trHeight");
        this.root.push(new TableRowHeightAttributes({
            value: value,
            rule: rule,
        }));
    }
}
exports.TableRowHeight = TableRowHeight;
//# sourceMappingURL=table-row-height.js.map
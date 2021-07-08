"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = exports.CantSplit = exports.TableRowProperties = void 0;
const xml_components_1 = require("file/xml-components");
const table_row_height_1 = require("./table-row-height");
class TableRowProperties extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor() {
        super("w:trPr");
    }
    setCantSplit() {
        this.root.push(new CantSplit());
        return this;
    }
    setTableHeader() {
        this.root.push(new TableHeader());
        return this;
    }
    setHeight(value, rule) {
        this.root.push(new table_row_height_1.TableRowHeight(value, rule));
        return this;
    }
}
exports.TableRowProperties = TableRowProperties;
class CantSplitAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class CantSplit extends xml_components_1.XmlComponent {
    constructor() {
        super("w:cantSplit");
        this.root.push(new CantSplitAttributes({ val: true }));
    }
}
exports.CantSplit = CantSplit;
class TableHeaderAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class TableHeader extends xml_components_1.XmlComponent {
    constructor() {
        super("w:tblHeader");
        this.root.push(new TableHeaderAttributes({ val: true }));
    }
}
exports.TableHeader = TableHeader;
//# sourceMappingURL=table-row-properties.js.map
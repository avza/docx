"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCellWidth = exports.WidthType = exports.TDirection = exports.TextDirection = exports.VAlign = exports.VerticalAlign = exports.VerticalMerge = exports.VerticalMergeType = exports.GridSpan = exports.TableCellBorders = void 0;
const xml_components_1 = require("file/xml-components");
class CellBorderAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { style: "w:val", size: "w:sz", color: "w:color" };
    }
}
class BaseTableCellBorder extends xml_components_1.XmlComponent {
    setProperties(style, size, color) {
        const attrs = new CellBorderAttributes({
            style: style,
            size: size,
            color: color,
        });
        this.root.push(attrs);
        return this;
    }
}
class TableCellBorders extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor() {
        super("w:tcBorders");
    }
    addTopBorder(style, size, color) {
        const top = new BaseTableCellBorder("w:top");
        top.setProperties(style, size, color);
        this.root.push(top);
        return this;
    }
    addStartBorder(style, size, color) {
        const start = new BaseTableCellBorder("w:start");
        start.setProperties(style, size, color);
        this.root.push(start);
        return this;
    }
    addBottomBorder(style, size, color) {
        const bottom = new BaseTableCellBorder("w:bottom");
        bottom.setProperties(style, size, color);
        this.root.push(bottom);
        return this;
    }
    addEndBorder(style, size, color) {
        const end = new BaseTableCellBorder("w:end");
        end.setProperties(style, size, color);
        this.root.push(end);
        return this;
    }
    addLeftBorder(style, size, color) {
        const left = new BaseTableCellBorder("w:left");
        left.setProperties(style, size, color);
        this.root.push(left);
        return this;
    }
    addRightBorder(style, size, color) {
        const right = new BaseTableCellBorder("w:right");
        right.setProperties(style, size, color);
        this.root.push(right);
        return this;
    }
}
exports.TableCellBorders = TableCellBorders;
class GridSpanAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class GridSpan extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:gridSpan");
        this.root.push(new GridSpanAttributes({
            val: value,
        }));
    }
}
exports.GridSpan = GridSpan;
var VerticalMergeType;
(function (VerticalMergeType) {
    VerticalMergeType["CONTINUE"] = "continue";
    VerticalMergeType["RESTART"] = "restart";
})(VerticalMergeType = exports.VerticalMergeType || (exports.VerticalMergeType = {}));
class VerticalMergeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class VerticalMerge extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:vMerge");
        this.root.push(new VerticalMergeAttributes({
            val: value,
        }));
    }
}
exports.VerticalMerge = VerticalMerge;
var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign["BOTTOM"] = "bottom";
    VerticalAlign["CENTER"] = "center";
    VerticalAlign["TOP"] = "top";
})(VerticalAlign = exports.VerticalAlign || (exports.VerticalAlign = {}));
class VAlignAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class VAlign extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:vAlign");
        this.root.push(new VAlignAttributes({
            val: value,
        }));
    }
}
exports.VAlign = VAlign;
var TextDirection;
(function (TextDirection) {
    TextDirection["BOTTOM_TO_TOP_LEFT_TO_RIGHT"] = "btLr";
    TextDirection["LEFT_TO_RIGHT_TOP_TO_BOTTOM"] = "lrTb";
    TextDirection["TOP_TO_BOTTOM_RIGHT_TO_LEFT"] = "tbRl";
})(TextDirection = exports.TextDirection || (exports.TextDirection = {}));
class TDirectionAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class TDirection extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:textDirection");
        this.root.push(new TDirectionAttributes({
            val: value,
        }));
    }
}
exports.TDirection = TDirection;
var WidthType;
(function (WidthType) {
    WidthType["AUTO"] = "auto";
    WidthType["DXA"] = "dxa";
    WidthType["NIL"] = "nil";
    WidthType["PERCENTAGE"] = "pct";
})(WidthType = exports.WidthType || (exports.WidthType = {}));
class TableCellWidthAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { width: "w:w", type: "w:type" };
    }
}
class TableCellWidth extends xml_components_1.XmlComponent {
    constructor(value, type) {
        super("w:tcW");
        this.root.push(new TableCellWidthAttributes({
            width: value,
            type: type,
        }));
    }
}
exports.TableCellWidth = TableCellWidth;
//# sourceMappingURL=table-cell-components.js.map
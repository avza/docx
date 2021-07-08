"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightCellMargin = exports.LeftCellMargin = exports.BottomCellMargin = exports.TopCellMargin = void 0;
const xml_components_1 = require("file/xml-components");
class CellMarginAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { width: "w:w", type: "w:type" };
    }
}
class TopCellMargin extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:top");
        this.root.push(new CellMarginAttributes({
            width: value,
            type: "dxa",
        }));
    }
}
exports.TopCellMargin = TopCellMargin;
class BottomCellMargin extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:bottom");
        this.root.push(new CellMarginAttributes({
            width: value,
            type: "dxa",
        }));
    }
}
exports.BottomCellMargin = BottomCellMargin;
class LeftCellMargin extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:start");
        this.root.push(new CellMarginAttributes({
            width: value,
            type: "dxa",
        }));
    }
}
exports.LeftCellMargin = LeftCellMargin;
class RightCellMargin extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:end");
        this.root.push(new CellMarginAttributes({
            width: value,
            type: "dxa",
        }));
    }
}
exports.RightCellMargin = RightCellMargin;
//# sourceMappingURL=cell-margin.js.map
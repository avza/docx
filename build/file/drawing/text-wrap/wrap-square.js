"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapSquare = void 0;
const xml_components_1 = require("file/xml-components");
const _1 = require(".");
class WrapSquareAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            distT: "distT",
            distB: "distB",
            distL: "distL",
            distR: "distR",
            wrapText: "wrapText",
        };
    }
}
class WrapSquare extends xml_components_1.XmlComponent {
    constructor(textWrapping, margins = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }) {
        super("wp:wrapSquare");
        this.root.push(new WrapSquareAttributes({
            wrapText: textWrapping.side || _1.TextWrappingSide.BOTH_SIDES,
            distT: margins.top,
            distB: margins.bottom,
            distL: margins.left,
            distR: margins.right,
        }));
    }
}
exports.WrapSquare = WrapSquare;
//# sourceMappingURL=wrap-square.js.map
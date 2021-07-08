"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extents = void 0;
const xml_components_1 = require("file/xml-components");
const extents_attributes_1 = require("./extents-attributes");
class Extents extends xml_components_1.XmlComponent {
    constructor(x, y) {
        super("a:ext");
        this.attributes = new extents_attributes_1.ExtentsAttributes({
            cx: x,
            cy: y,
        });
        this.root.push(this.attributes);
    }
    setXY(x, y) {
        this.attributes.set({
            cx: x,
            cy: y,
        });
    }
}
exports.Extents = Extents;
//# sourceMappingURL=extents.js.map
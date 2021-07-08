"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extent = void 0;
const xml_components_1 = require("file/xml-components");
const extent_attributes_1 = require("./extent-attributes");
class Extent extends xml_components_1.XmlComponent {
    constructor(x, y) {
        super("wp:extent");
        this.attributes = new extent_attributes_1.ExtentAttributes({
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
exports.Extent = Extent;
//# sourceMappingURL=extent.js.map
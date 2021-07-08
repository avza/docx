"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offset = void 0;
const xml_components_1 = require("file/xml-components");
const off_attributes_1 = require("./off-attributes");
class Offset extends xml_components_1.XmlComponent {
    constructor() {
        super("a:off");
        this.root.push(new off_attributes_1.OffsetAttributes({
            x: 0,
            y: 0,
        }));
    }
}
exports.Offset = Offset;
//# sourceMappingURL=off.js.map
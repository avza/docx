"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionOffset = void 0;
const xml_components_1 = require("file/xml-components");
class PositionOffset extends xml_components_1.XmlComponent {
    constructor(offsetValue) {
        super("wp:posOffset");
        this.root.push(offsetValue.toString());
    }
}
exports.PositionOffset = PositionOffset;
//# sourceMappingURL=position-offset.js.map
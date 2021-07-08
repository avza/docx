"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Align = void 0;
const xml_components_1 = require("file/xml-components");
class Align extends xml_components_1.XmlComponent {
    constructor(value) {
        super("wp:align");
        this.root.push(value);
    }
}
exports.Align = Align;
//# sourceMappingURL=align.js.map
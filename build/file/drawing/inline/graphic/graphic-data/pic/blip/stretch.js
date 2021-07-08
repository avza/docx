"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stretch = void 0;
const xml_components_1 = require("file/xml-components");
class FillRectangle extends xml_components_1.XmlComponent {
    constructor() {
        super("a:fillRect");
    }
}
class Stretch extends xml_components_1.XmlComponent {
    constructor() {
        super("a:stretch");
        this.root.push(new FillRectangle());
    }
}
exports.Stretch = Stretch;
//# sourceMappingURL=stretch.js.map
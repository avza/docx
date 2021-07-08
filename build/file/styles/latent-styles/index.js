"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatentStyles = void 0;
const xml_components_1 = require("file/xml-components");
class LatentStyles extends xml_components_1.XmlComponent {
    constructor() {
        super("w:latentStyles");
    }
    push(latentException) {
        this.root.push(latentException);
    }
}
exports.LatentStyles = LatentStyles;
//# sourceMappingURL=index.js.map
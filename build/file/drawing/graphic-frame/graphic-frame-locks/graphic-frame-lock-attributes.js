"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicFrameLockAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class GraphicFrameLockAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            xmlns: "xmlns:a",
            noChangeAspect: "noChangeAspect",
        };
    }
}
exports.GraphicFrameLockAttributes = GraphicFrameLockAttributes;
//# sourceMappingURL=graphic-frame-lock-attributes.js.map
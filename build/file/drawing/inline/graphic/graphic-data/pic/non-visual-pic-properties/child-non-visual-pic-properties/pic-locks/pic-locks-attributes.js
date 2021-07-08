"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicLocksAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class PicLocksAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            noChangeAspect: "noChangeAspect",
            noChangeArrowheads: "noChangeArrowheads",
        };
    }
}
exports.PicLocksAttributes = PicLocksAttributes;
//# sourceMappingURL=pic-locks-attributes.js.map
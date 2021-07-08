"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectExtentAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class EffectExtentAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            b: "b",
            l: "l",
            r: "r",
            t: "t",
        };
    }
}
exports.EffectExtentAttributes = EffectExtentAttributes;
//# sourceMappingURL=effect-extent-attributes.js.map
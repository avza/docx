"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectExtent = void 0;
const xml_components_1 = require("file/xml-components");
const effect_extent_attributes_1 = require("./effect-extent-attributes");
class EffectExtent extends xml_components_1.XmlComponent {
    constructor() {
        super("wp:effectExtent");
        this.root.push(new effect_extent_attributes_1.EffectExtentAttributes({
            b: 0,
            l: 0,
            r: 0,
            t: 0,
        }));
    }
}
exports.EffectExtent = EffectExtent;
//# sourceMappingURL=effect-extent.js.map
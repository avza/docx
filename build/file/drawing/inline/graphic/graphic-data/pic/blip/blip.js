"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blip = void 0;
const xml_components_1 = require("file/xml-components");
class BlipAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            embed: "r:embed",
            cstate: "cstate",
        };
    }
}
class Blip extends xml_components_1.XmlComponent {
    constructor(mediaData) {
        super("a:blip");
        this.root.push(new BlipAttributes({
            embed: `rId{${mediaData.fileName}}`,
            cstate: "none",
        }));
    }
}
exports.Blip = Blip;
//# sourceMappingURL=blip.js.map
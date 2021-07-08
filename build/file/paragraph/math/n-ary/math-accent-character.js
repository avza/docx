"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathAccentCharacter = void 0;
const xml_components_1 = require("file/xml-components");
class MathAccentCharacterAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { accent: "m:val" };
    }
}
class MathAccentCharacter extends xml_components_1.XmlComponent {
    constructor(accent) {
        super("m:chr");
        this.root.push(new MathAccentCharacterAttributes({ accent }));
    }
}
exports.MathAccentCharacter = MathAccentCharacter;
//# sourceMappingURL=math-accent-character.js.map
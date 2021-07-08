"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathEndingCharacter = void 0;
const xml_components_1 = require("file/xml-components");
class MathEndingCharacterAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { character: "m:val" };
    }
}
class MathEndingCharacter extends xml_components_1.XmlComponent {
    constructor(character) {
        super("m:endChr");
        this.root.push(new MathEndingCharacterAttributes({ character }));
    }
}
exports.MathEndingCharacter = MathEndingCharacter;
//# sourceMappingURL=math-ending-char.js.map
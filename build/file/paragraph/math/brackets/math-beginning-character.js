"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathBeginningCharacter = void 0;
const xml_components_1 = require("file/xml-components");
class MathBeginningCharacterAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { character: "m:val" };
    }
}
class MathBeginningCharacter extends xml_components_1.XmlComponent {
    constructor(character) {
        super("m:begChr");
        this.root.push(new MathBeginningCharacterAttributes({ character }));
    }
}
exports.MathBeginningCharacter = MathBeginningCharacter;
//# sourceMappingURL=math-beginning-character.js.map
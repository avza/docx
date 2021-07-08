"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathBracketProperties = void 0;
const xml_components_1 = require("file/xml-components");
const math_beginning_character_1 = require("./math-beginning-character");
const math_ending_char_1 = require("./math-ending-char");
class MathBracketProperties extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:dPr");
        if (!!options) {
            this.root.push(new math_beginning_character_1.MathBeginningCharacter(options.beginningCharacter));
            this.root.push(new math_ending_char_1.MathEndingCharacter(options.endingCharacter));
        }
    }
}
exports.MathBracketProperties = MathBracketProperties;
//# sourceMappingURL=math-bracket-properties.js.map
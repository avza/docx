"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCurlyBrackets = void 0;
const xml_components_1 = require("file/xml-components");
const n_ary_1 = require("../n-ary");
const math_bracket_properties_1 = require("./math-bracket-properties");
class MathCurlyBrackets extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:d");
        this.root.push(new math_bracket_properties_1.MathBracketProperties({
            beginningCharacter: "{",
            endingCharacter: "}",
        }));
        this.root.push(new n_ary_1.MathBase(options.children));
    }
}
exports.MathCurlyBrackets = MathCurlyBrackets;
//# sourceMappingURL=math-curly-brackets.js.map
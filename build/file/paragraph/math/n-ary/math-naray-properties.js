"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathNArayProperties = void 0;
const xml_components_1 = require("file/xml-components");
const math_accent_character_1 = require("./math-accent-character");
const math_limit_location_1 = require("./math-limit-location");
const math_sub_script_hide_1 = require("./math-sub-script-hide");
const math_super_script_hide_1 = require("./math-super-script-hide");
class MathNArayProperties extends xml_components_1.XmlComponent {
    constructor(accent, hasSuperScript, hasSubScript) {
        super("m:naryPr");
        this.root.push(new math_accent_character_1.MathAccentCharacter(accent));
        this.root.push(new math_limit_location_1.MathLimitLocation());
        if (!hasSuperScript) {
            this.root.push(new math_super_script_hide_1.MathSuperScriptHide());
        }
        if (!hasSubScript) {
            this.root.push(new math_sub_script_hide_1.MathSubScriptHide());
        }
    }
}
exports.MathNArayProperties = MathNArayProperties;
//# sourceMappingURL=math-naray-properties.js.map
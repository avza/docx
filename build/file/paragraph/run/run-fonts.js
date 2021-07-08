"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunFonts = void 0;
const xml_components_1 = require("file/xml-components");
class RunFontAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            ascii: "w:ascii",
            cs: "w:cs",
            eastAsia: "w:eastAsia",
            hAnsi: "w:hAnsi",
            hint: "w:hint",
        };
    }
}
class RunFonts extends xml_components_1.XmlComponent {
    constructor(nameOrAttrs, hint) {
        super("w:rFonts");
        if (typeof nameOrAttrs === "string") {
            const name = nameOrAttrs;
            this.root.push(new RunFontAttributes({
                ascii: name,
                cs: name,
                eastAsia: name,
                hAnsi: name,
                hint: hint,
            }));
        }
        else {
            const attrs = nameOrAttrs;
            this.root.push(new RunFontAttributes(attrs));
        }
    }
}
exports.RunFonts = RunFonts;
//# sourceMappingURL=run-fonts.js.map
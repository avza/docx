"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
const xml_components_1 = require("file/xml-components");
class SymbolAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            char: "w:char",
            symbolfont: "w:font",
        };
    }
}
class Symbol extends xml_components_1.XmlComponent {
    constructor(char = "", symbolfont = "Wingdings") {
        super("w:sym");
        this.root.push(new SymbolAttributes({ char: char, symbolfont: symbolfont }));
    }
}
exports.Symbol = Symbol;
//# sourceMappingURL=symbol.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = void 0;
const xml_components_1 = require("file/xml-components");
class AliasAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { alias: "w:val" };
    }
}
class Alias extends xml_components_1.XmlComponent {
    constructor(alias) {
        super("w:alias");
        this.root.push(new AliasAttributes({ alias }));
    }
}
exports.Alias = Alias;
//# sourceMappingURL=alias.js.map
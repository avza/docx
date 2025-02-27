"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlAttributeComponent = void 0;
const base_1 = require("./base");
class XmlAttributeComponent extends base_1.BaseXmlComponent {
    constructor(properties) {
        super("_attr");
        this.root = properties;
    }
    prepForXml() {
        const attrs = {};
        Object.keys(this.root).forEach((key) => {
            const value = this.root[key];
            if (value !== undefined) {
                const newKey = (this.xmlKeys && this.xmlKeys[key]) || key;
                attrs[newKey] = value;
            }
        });
        return { _attr: attrs };
    }
    set(properties) {
        this.root = properties;
    }
}
exports.XmlAttributeComponent = XmlAttributeComponent;
//# sourceMappingURL=default-attributes.js.map
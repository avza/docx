"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapTight = void 0;
const xml_components_1 = require("file/xml-components");
class WrapTightAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            distT: "distT",
            distB: "distB",
        };
    }
}
class WrapTight extends xml_components_1.XmlComponent {
    constructor(margins = {
        top: 0,
        bottom: 0,
    }) {
        super("wp:wrapTight");
        this.root.push(new WrapTightAttributes({
            distT: margins.top,
            distB: margins.bottom,
        }));
    }
}
exports.WrapTight = WrapTight;
//# sourceMappingURL=wrap-tight.js.map
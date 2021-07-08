"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapTopAndBottom = void 0;
const xml_components_1 = require("file/xml-components");
class WrapTopAndBottomAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            distT: "distT",
            distB: "distB",
        };
    }
}
class WrapTopAndBottom extends xml_components_1.XmlComponent {
    constructor(margins = {
        top: 0,
        bottom: 0,
    }) {
        super("wp:wrapTopAndBottom");
        this.root.push(new WrapTopAndBottomAttributes({
            distT: margins.top,
            distB: margins.bottom,
        }));
    }
}
exports.WrapTopAndBottom = WrapTopAndBottom;
//# sourceMappingURL=wrap-top-and-bottom.js.map
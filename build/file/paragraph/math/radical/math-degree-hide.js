"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathDegreeHide = void 0;
const xml_components_1 = require("file/xml-components");
class MathDegreeHideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { hide: "m:val" };
    }
}
class MathDegreeHide extends xml_components_1.XmlComponent {
    constructor() {
        super("m:degHide");
        this.root.push(new MathDegreeHideAttributes({ hide: 1 }));
    }
}
exports.MathDegreeHide = MathDegreeHide;
//# sourceMappingURL=math-degree-hide.js.map
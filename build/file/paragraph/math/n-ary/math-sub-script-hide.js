"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSubScriptHide = void 0;
const xml_components_1 = require("file/xml-components");
class MathSubScriptHideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { hide: "m:val" };
    }
}
class MathSubScriptHide extends xml_components_1.XmlComponent {
    constructor() {
        super("m:subHide");
        this.root.push(new MathSubScriptHideAttributes({ hide: 1 }));
    }
}
exports.MathSubScriptHide = MathSubScriptHide;
//# sourceMappingURL=math-sub-script-hide.js.map
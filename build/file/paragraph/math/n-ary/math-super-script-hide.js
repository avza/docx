"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSuperScriptHide = void 0;
const xml_components_1 = require("file/xml-components");
class MathSuperScriptHideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { hide: "m:val" };
    }
}
class MathSuperScriptHide extends xml_components_1.XmlComponent {
    constructor() {
        super("m:supHide");
        this.root.push(new MathSuperScriptHideAttributes({ hide: 1 }));
    }
}
exports.MathSuperScriptHide = MathSuperScriptHide;
//# sourceMappingURL=math-super-script-hide.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSuperScriptElement = void 0;
const xml_components_1 = require("file/xml-components");
class MathSuperScriptElement extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:sup");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathSuperScriptElement = MathSuperScriptElement;
//# sourceMappingURL=math-super-script.js.map
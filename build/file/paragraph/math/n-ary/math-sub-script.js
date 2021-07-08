"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSubScriptElement = void 0;
const xml_components_1 = require("file/xml-components");
class MathSubScriptElement extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:sub");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathSubScriptElement = MathSubScriptElement;
//# sourceMappingURL=math-sub-script.js.map
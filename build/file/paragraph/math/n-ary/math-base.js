"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathBase = void 0;
const xml_components_1 = require("file/xml-components");
class MathBase extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:e");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathBase = MathBase;
//# sourceMappingURL=math-base.js.map
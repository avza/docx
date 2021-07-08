"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathFunctionName = void 0;
const xml_components_1 = require("file/xml-components");
class MathFunctionName extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:fName");
        for (const child of children) {
            this.root.push(child);
        }
    }
}
exports.MathFunctionName = MathFunctionName;
//# sourceMappingURL=math-function-name.js.map
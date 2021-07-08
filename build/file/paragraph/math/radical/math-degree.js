"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathDegree = void 0;
const xml_components_1 = require("file/xml-components");
class MathDegree extends xml_components_1.XmlComponent {
    constructor(children) {
        super("m:deg");
        if (!!children) {
            for (const child of children) {
                this.root.push(child);
            }
        }
    }
}
exports.MathDegree = MathDegree;
//# sourceMappingURL=math-degree.js.map
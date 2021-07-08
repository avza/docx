"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math = void 0;
const xml_components_1 = require("file/xml-components");
class Math extends xml_components_1.XmlComponent {
    constructor(options) {
        super("m:oMath");
        for (const child of options.children) {
            this.root.push(child);
        }
    }
}
exports.Math = Math;
//# sourceMappingURL=math.js.map
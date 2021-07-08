"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlineLevel = void 0;
const xml_components_1 = require("file/xml-components");
class OutlineLevel extends xml_components_1.XmlComponent {
    constructor(level) {
        super("w:outlineLvl");
        this.level = level;
        this.root.push(new xml_components_1.Attributes({
            val: level,
        }));
    }
}
exports.OutlineLevel = OutlineLevel;
//# sourceMappingURL=outline-level.js.map
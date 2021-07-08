"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLevelType = void 0;
const xml_components_1 = require("file/xml-components");
class MultiLevelType extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:multiLevelType");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
exports.MultiLevelType = MultiLevelType;
//# sourceMappingURL=multi-level-type.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberProperties = void 0;
const xml_components_1 = require("file/xml-components");
class NumberProperties extends xml_components_1.XmlComponent {
    constructor(numberId, indentLevel) {
        super("w:numPr");
        this.root.push(new IndentLevel(indentLevel));
        this.root.push(new NumberId(numberId));
    }
}
exports.NumberProperties = NumberProperties;
class IndentLevel extends xml_components_1.XmlComponent {
    constructor(level) {
        super("w:ilvl");
        this.root.push(new xml_components_1.Attributes({
            val: level,
        }));
    }
}
class NumberId extends xml_components_1.XmlComponent {
    constructor(id) {
        super("w:numId");
        this.root.push(new xml_components_1.Attributes({
            val: typeof id === "string" ? `{${id}}` : id,
        }));
    }
}
//# sourceMappingURL=unordered-list.js.map
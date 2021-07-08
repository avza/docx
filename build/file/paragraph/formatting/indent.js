"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indent = void 0;
const xml_components_1 = require("file/xml-components");
class IndentAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            left: "w:left",
            hanging: "w:hanging",
            firstLine: "w:firstLine",
            start: "w:start",
            end: "w:end",
            right: "w:end",
        };
    }
}
class Indent extends xml_components_1.XmlComponent {
    constructor(attrs) {
        super("w:ind");
        this.root.push(new IndentAttributes(attrs));
    }
}
exports.Indent = Indent;
//# sourceMappingURL=indent.js.map
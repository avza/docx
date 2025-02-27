"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubScript = exports.SuperScript = exports.VerticalAlign = void 0;
const xml_components_1 = require("file/xml-components");
class VerticalAlign extends xml_components_1.XmlComponent {
    constructor(type) {
        super("w:vertAlign");
        this.root.push(new xml_components_1.Attributes({
            val: type,
        }));
    }
}
exports.VerticalAlign = VerticalAlign;
class SuperScript extends VerticalAlign {
    constructor() {
        super("superscript");
    }
}
exports.SuperScript = SuperScript;
class SubScript extends VerticalAlign {
    constructor() {
        super("subscript");
    }
}
exports.SubScript = SubScript;
//# sourceMappingURL=script.js.map
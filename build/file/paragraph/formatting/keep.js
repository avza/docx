"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeepNext = exports.KeepLines = void 0;
const xml_components_1 = require("file/xml-components");
class KeepLines extends xml_components_1.XmlComponent {
    constructor() {
        super("w:keepLines");
    }
}
exports.KeepLines = KeepLines;
class KeepNext extends xml_components_1.XmlComponent {
    constructor() {
        super("w:keepNext");
    }
}
exports.KeepNext = KeepNext;
//# sourceMappingURL=keep.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outline = void 0;
const xml_components_1 = require("file/xml-components");
const no_fill_1 = require("./no-fill");
class Outline extends xml_components_1.XmlComponent {
    constructor() {
        super("a:ln");
        this.root.push(new no_fill_1.NoFill());
    }
}
exports.Outline = Outline;
//# sourceMappingURL=outline.js.map
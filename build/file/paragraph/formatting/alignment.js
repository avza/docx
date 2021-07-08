"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alignment = exports.AlignmentAttributes = exports.AlignmentType = void 0;
const xml_components_1 = require("file/xml-components");
var AlignmentType;
(function (AlignmentType) {
    AlignmentType["START"] = "start";
    AlignmentType["END"] = "end";
    AlignmentType["CENTER"] = "center";
    AlignmentType["BOTH"] = "both";
    AlignmentType["JUSTIFIED"] = "both";
    AlignmentType["DISTRIBUTE"] = "distribute";
    AlignmentType["LEFT"] = "left";
    AlignmentType["RIGHT"] = "right";
})(AlignmentType = exports.AlignmentType || (exports.AlignmentType = {}));
class AlignmentAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
exports.AlignmentAttributes = AlignmentAttributes;
class Alignment extends xml_components_1.XmlComponent {
    constructor(type) {
        super("w:jc");
        this.root.push(new AlignmentAttributes({ val: type }));
    }
}
exports.Alignment = Alignment;
//# sourceMappingURL=alignment.js.map
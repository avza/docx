"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.End = exports.Separate = exports.Begin = void 0;
const xml_components_1 = require("file/xml-components");
var FieldCharacterType;
(function (FieldCharacterType) {
    FieldCharacterType["BEGIN"] = "begin";
    FieldCharacterType["END"] = "end";
    FieldCharacterType["SEPARATE"] = "separate";
})(FieldCharacterType || (FieldCharacterType = {}));
class FidCharAttrs extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { type: "w:fldCharType", dirty: "w:dirty" };
    }
}
class Begin extends xml_components_1.XmlComponent {
    constructor(dirty) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.BEGIN, dirty }));
    }
}
exports.Begin = Begin;
class Separate extends xml_components_1.XmlComponent {
    constructor(dirty) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.SEPARATE, dirty }));
    }
}
exports.Separate = Separate;
class End extends xml_components_1.XmlComponent {
    constructor(dirty) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.END, dirty }));
    }
}
exports.End = End;
//# sourceMappingURL=field.js.map
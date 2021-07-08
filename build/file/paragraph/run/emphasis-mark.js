"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotEmphasisMark = exports.EmphasisMark = exports.BaseEmphasisMark = exports.EmphasisMarkType = void 0;
const xml_components_1 = require("file/xml-components");
var EmphasisMarkType;
(function (EmphasisMarkType) {
    EmphasisMarkType["DOT"] = "dot";
})(EmphasisMarkType = exports.EmphasisMarkType || (exports.EmphasisMarkType = {}));
class BaseEmphasisMark extends xml_components_1.XmlComponent {
    constructor(emphasisMarkType) {
        super("w:em");
        this.root.push(new xml_components_1.Attributes({
            val: emphasisMarkType,
        }));
    }
}
exports.BaseEmphasisMark = BaseEmphasisMark;
class EmphasisMark extends BaseEmphasisMark {
    constructor(emphasisMarkType = EmphasisMarkType.DOT) {
        super(emphasisMarkType);
    }
}
exports.EmphasisMark = EmphasisMark;
class DotEmphasisMark extends BaseEmphasisMark {
    constructor() {
        super(EmphasisMarkType.DOT);
    }
}
exports.DotEmphasisMark = DotEmphasisMark;
//# sourceMappingURL=emphasis-mark.js.map
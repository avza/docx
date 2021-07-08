"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineNumberType = exports.LineNumberAttributes = exports.LineNumberRestartFormat = void 0;
const xml_components_1 = require("file/xml-components");
var LineNumberRestartFormat;
(function (LineNumberRestartFormat) {
    LineNumberRestartFormat["CONTINUOUS"] = "continuous";
    LineNumberRestartFormat["NEW_SECTION"] = "newSection";
    LineNumberRestartFormat["NEW_PAGE"] = "newPage";
})(LineNumberRestartFormat = exports.LineNumberRestartFormat || (exports.LineNumberRestartFormat = {}));
class LineNumberAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            lineNumberCountBy: "w:countBy",
            lineNumberStart: "w:start",
            lineNumberRestart: "w:restart",
            lineNumberDistance: "w:distance",
        };
    }
}
exports.LineNumberAttributes = LineNumberAttributes;
class LineNumberType extends xml_components_1.XmlComponent {
    constructor(countBy, start, restart, dist) {
        super("w:lnNumType");
        this.root.push(new LineNumberAttributes({
            lineNumberCountBy: countBy,
            lineNumberStart: start,
            lineNumberRestart: restart,
            lineNumberDistance: dist,
        }));
    }
}
exports.LineNumberType = LineNumberType;
//# sourceMappingURL=line-number.js.map
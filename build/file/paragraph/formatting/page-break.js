"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBreakBefore = exports.PageBreak = void 0;
const xml_components_1 = require("file/xml-components");
const run_1 = require("../run");
class Break extends xml_components_1.XmlComponent {
    constructor() {
        super("w:br");
        this.root.push(new xml_components_1.Attributes({
            type: "page",
        }));
    }
}
class PageBreak extends run_1.Run {
    constructor() {
        super({});
        this.root.push(new Break());
    }
}
exports.PageBreak = PageBreak;
class PageBreakBefore extends xml_components_1.XmlComponent {
    constructor() {
        super("w:pageBreakBefore");
    }
}
exports.PageBreakBefore = PageBreakBefore;
//# sourceMappingURL=page-break.js.map
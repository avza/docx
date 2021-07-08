"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathLimitLocation = void 0;
const xml_components_1 = require("file/xml-components");
class MathLimitLocationAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { value: "m:val" };
    }
}
class MathLimitLocation extends xml_components_1.XmlComponent {
    constructor() {
        super("m:limLoc");
        this.root.push(new MathLimitLocationAttributes({ value: "undOvr" }));
    }
}
exports.MathLimitLocation = MathLimitLocation;
//# sourceMappingURL=math-limit-location.js.map
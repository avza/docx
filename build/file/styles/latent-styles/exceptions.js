"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatentStyleException = exports.LatentStyleExceptionAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class LatentStyleExceptionAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            name: "w:name",
            uiPriority: "w:uiPriority",
            qFormat: "w:qFormat",
            semiHidden: "w:semiHidden",
            unhideWhenUsed: "w:unhideWhenUsed",
        };
    }
}
exports.LatentStyleExceptionAttributes = LatentStyleExceptionAttributes;
class LatentStyleException extends xml_components_1.XmlComponent {
    constructor(attributes) {
        super("w:lsdException");
        this.root.push(new LatentStyleExceptionAttributes(attributes));
    }
}
exports.LatentStyleException = LatentStyleException;
//# sourceMappingURL=exceptions.js.map
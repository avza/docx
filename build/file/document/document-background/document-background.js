"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentBackground = exports.DocumentBackgroundAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class DocumentBackgroundAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            color: "w:color",
            themeColor: "w:themeColor",
            themeShade: "w:themeShade",
            themeTint: "w:themeTint",
        };
    }
}
exports.DocumentBackgroundAttributes = DocumentBackgroundAttributes;
class DocumentBackground extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:background");
        this.root.push(new DocumentBackgroundAttributes({
            color: options.color ? options.color : "FFFFFF",
            themeColor: options.themeColor,
            themeShade: options.themeShade,
            themeTint: options.themeTint,
        }));
    }
}
exports.DocumentBackground = DocumentBackground;
//# sourceMappingURL=document-background.js.map
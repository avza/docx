"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextualSpacing = exports.Spacing = void 0;
const xml_components_1 = require("file/xml-components");
class SpacingAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            after: "w:after",
            before: "w:before",
            line: "w:line",
            lineRule: "w:lineRule",
        };
    }
}
class Spacing extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:spacing");
        this.root.push(new SpacingAttributes(options));
    }
}
exports.Spacing = Spacing;
class ContextualSpacing extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:contextualSpacing");
        this.root.push(new xml_components_1.Attributes({
            val: value === false ? 0 : 1,
        }));
    }
}
exports.ContextualSpacing = ContextualSpacing;
//# sourceMappingURL=spacing.js.map
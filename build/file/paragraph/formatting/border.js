"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThematicBreak = exports.Border = void 0;
const xml_components_1 = require("file/xml-components");
const border_attributes_1 = require("./border-attributes");
class BorderProperty extends xml_components_1.XmlComponent {
    constructor(rootKey, options = { color: "auto", space: 1, value: "single", size: 6 }) {
        super(rootKey);
        const attrs = new border_attributes_1.BorderAttributes({
            color: options.color,
            space: options.space,
            val: options.value,
            sz: options.size,
        });
        this.root.push(attrs);
    }
}
class Border extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:pBdr");
        if (options.top !== undefined) {
            const borderProperty = new BorderProperty("w:top", options.top);
            this.root.push(borderProperty);
        }
        if (options.bottom !== undefined) {
            const borderProperty = new BorderProperty("w:bottom", options.bottom);
            this.root.push(borderProperty);
        }
        if (options.left !== undefined) {
            const borderProperty = new BorderProperty("w:left", options.left);
            this.root.push(borderProperty);
        }
        if (options.right !== undefined) {
            const borderProperty = new BorderProperty("w:right", options.right);
            this.root.push(borderProperty);
        }
    }
}
exports.Border = Border;
class ThematicBreak extends xml_components_1.XmlComponent {
    constructor() {
        super("w:pBdr");
        const bottom = new BorderProperty("w:bottom", {
            color: "auto",
            space: 1,
            value: "single",
            size: 6,
        });
        this.root.push(bottom);
    }
}
exports.ThematicBreak = ThematicBreak;
//# sourceMappingURL=border.js.map
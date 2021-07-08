"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawing = void 0;
const xml_components_1 = require("file/xml-components");
const anchor_1 = require("./anchor");
const inline_1 = require("./inline");
class Drawing extends xml_components_1.XmlComponent {
    constructor(imageData, drawingOptions = {}) {
        super("w:drawing");
        if (!drawingOptions.floating) {
            this.inline = new inline_1.Inline(imageData, imageData.dimensions);
            this.root.push(this.inline);
        }
        else {
            this.root.push(new anchor_1.Anchor(imageData, imageData.dimensions, drawingOptions));
        }
    }
    scale(factorX, factorY) {
        this.inline.scale(factorX, factorY);
    }
}
exports.Drawing = Drawing;
//# sourceMappingURL=drawing.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlipFill = void 0;
const xml_components_1 = require("file/xml-components");
const blip_1 = require("./blip");
const source_rectangle_1 = require("./source-rectangle");
const stretch_1 = require("./stretch");
class BlipFill extends xml_components_1.XmlComponent {
    constructor(mediaData) {
        super("pic:blipFill");
        this.root.push(new blip_1.Blip(mediaData));
        this.root.push(new source_rectangle_1.SourceRectangle());
        this.root.push(new stretch_1.Stretch());
    }
}
exports.BlipFill = BlipFill;
//# sourceMappingURL=blip-fill.js.map
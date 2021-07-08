"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
const xml_components_1 = require("file/xml-components");
const doc_properties_1 = require("./../doc-properties/doc-properties");
const effect_extent_1 = require("./../effect-extent/effect-extent");
const extent_1 = require("./../extent/extent");
const graphic_frame_properties_1 = require("./../graphic-frame/graphic-frame-properties");
const graphic_1 = require("./../inline/graphic");
const inline_attributes_1 = require("./inline-attributes");
class Inline extends xml_components_1.XmlComponent {
    constructor(mediaData, dimensions) {
        super("wp:inline");
        this.dimensions = dimensions;
        this.root.push(new inline_attributes_1.InlineAttributes({
            distT: 0,
            distB: 0,
            distL: 0,
            distR: 0,
        }));
        this.extent = new extent_1.Extent(dimensions.emus.x, dimensions.emus.y);
        this.graphic = new graphic_1.Graphic(mediaData, dimensions.emus.x, dimensions.emus.y);
        this.root.push(this.extent);
        this.root.push(new effect_extent_1.EffectExtent());
        this.root.push(new doc_properties_1.DocProperties());
        this.root.push(new graphic_frame_properties_1.GraphicFrameProperties());
        this.root.push(this.graphic);
    }
    scale(factorX, factorY) {
        const newX = Math.round(this.dimensions.emus.x * factorX);
        const newY = Math.round(this.dimensions.emus.y * factorY);
        this.extent.setXY(newX, newY);
        this.graphic.setXY(newX, newY);
    }
}
exports.Inline = Inline;
//# sourceMappingURL=inline.js.map
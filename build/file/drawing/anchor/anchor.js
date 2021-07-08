"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
const xml_components_1 = require("file/xml-components");
const floating_1 = require("../floating");
const graphic_1 = require("../inline/graphic");
const text_wrap_1 = require("../text-wrap");
const doc_properties_1 = require("./../doc-properties/doc-properties");
const effect_extent_1 = require("./../effect-extent/effect-extent");
const extent_1 = require("./../extent/extent");
const graphic_frame_properties_1 = require("./../graphic-frame/graphic-frame-properties");
const anchor_attributes_1 = require("./anchor-attributes");
class Anchor extends xml_components_1.XmlComponent {
    constructor(mediaData, dimensions, drawingOptions) {
        super("wp:anchor");
        const floating = Object.assign({ allowOverlap: true, behindDocument: false, lockAnchor: false, layoutInCell: true, verticalPosition: {}, horizontalPosition: {} }, drawingOptions.floating);
        this.root.push(new anchor_attributes_1.AnchorAttributes({
            distT: floating.margins ? floating.margins.top || 0 : 0,
            distB: floating.margins ? floating.margins.bottom || 0 : 0,
            distL: floating.margins ? floating.margins.left || 0 : 0,
            distR: floating.margins ? floating.margins.right || 0 : 0,
            simplePos: "0",
            allowOverlap: floating.allowOverlap === true ? "1" : "0",
            behindDoc: floating.behindDocument === true ? "1" : "0",
            locked: floating.lockAnchor === true ? "1" : "0",
            layoutInCell: floating.layoutInCell === true ? "1" : "0",
            relativeHeight: floating.zIndex ? floating.zIndex : dimensions.emus.y,
        }));
        this.root.push(new floating_1.SimplePos());
        this.root.push(new floating_1.HorizontalPosition(floating.horizontalPosition));
        this.root.push(new floating_1.VerticalPosition(floating.verticalPosition));
        this.root.push(new extent_1.Extent(dimensions.emus.x, dimensions.emus.y));
        this.root.push(new effect_extent_1.EffectExtent());
        if (drawingOptions.floating !== undefined && drawingOptions.floating.wrap !== undefined) {
            switch (drawingOptions.floating.wrap.type) {
                case text_wrap_1.TextWrappingType.SQUARE:
                    this.root.push(new text_wrap_1.WrapSquare(drawingOptions.floating.wrap, drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.TIGHT:
                    this.root.push(new text_wrap_1.WrapTight(drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.TOP_AND_BOTTOM:
                    this.root.push(new text_wrap_1.WrapTopAndBottom(drawingOptions.floating.margins));
                    break;
                case text_wrap_1.TextWrappingType.NONE:
                default:
                    this.root.push(new text_wrap_1.WrapNone());
            }
        }
        else {
            this.root.push(new text_wrap_1.WrapNone());
        }
        this.root.push(new doc_properties_1.DocProperties());
        this.root.push(new graphic_frame_properties_1.GraphicFrameProperties());
        this.root.push(new graphic_1.Graphic(mediaData, dimensions.emus.x, dimensions.emus.y));
    }
}
exports.Anchor = Anchor;
//# sourceMappingURL=anchor.js.map
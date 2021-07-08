"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pic = void 0;
const xml_components_1 = require("file/xml-components");
const blip_fill_1 = require("./blip/blip-fill");
const non_visual_pic_properties_1 = require("./non-visual-pic-properties/non-visual-pic-properties");
const pic_attributes_1 = require("./pic-attributes");
const shape_properties_1 = require("./shape-properties/shape-properties");
class Pic extends xml_components_1.XmlComponent {
    constructor(mediaData, x, y) {
        super("pic:pic");
        this.root.push(new pic_attributes_1.PicAttributes({
            xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        this.shapeProperties = new shape_properties_1.ShapeProperties(x, y);
        this.root.push(new non_visual_pic_properties_1.NonVisualPicProperties());
        this.root.push(new blip_fill_1.BlipFill(mediaData));
        this.root.push(new shape_properties_1.ShapeProperties(x, y));
    }
    setXY(x, y) {
        this.shapeProperties.setXY(x, y);
    }
}
exports.Pic = Pic;
//# sourceMappingURL=pic.js.map
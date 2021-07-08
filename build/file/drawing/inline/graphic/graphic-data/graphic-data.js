"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicData = void 0;
const xml_components_1 = require("file/xml-components");
const graphic_data_attribute_1 = require("./graphic-data-attribute");
const pic_1 = require("./pic");
class GraphicData extends xml_components_1.XmlComponent {
    constructor(mediaData, x, y) {
        super("a:graphicData");
        this.root.push(new graphic_data_attribute_1.GraphicDataAttributes({
            uri: "http://schemas.openxmlformats.org/drawingml/2006/picture",
        }));
        this.pic = new pic_1.Pic(mediaData, x, y);
        this.root.push(this.pic);
    }
    setXY(x, y) {
        this.pic.setXY(x, y);
    }
}
exports.GraphicData = GraphicData;
//# sourceMappingURL=graphic-data.js.map
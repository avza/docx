"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphic = void 0;
const xml_components_1 = require("file/xml-components");
const graphic_data_1 = require("./graphic-data");
class GraphicAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            a: "xmlns:a",
        };
    }
}
class Graphic extends xml_components_1.XmlComponent {
    constructor(mediaData, x, y) {
        super("a:graphic");
        this.root.push(new GraphicAttributes({
            a: "http://schemas.openxmlformats.org/drawingml/2006/main",
        }));
        this.data = new graphic_data_1.GraphicData(mediaData, x, y);
        this.root.push(this.data);
    }
    setXY(x, y) {
        this.data.setXY(x, y);
    }
}
exports.Graphic = Graphic;
//# sourceMappingURL=graphic.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeProperties = void 0;
const xml_components_1 = require("file/xml-components");
const form_1 = require("./form");
const preset_geometry_1 = require("./preset-geometry/preset-geometry");
const shape_properties_attributes_1 = require("./shape-properties-attributes");
class ShapeProperties extends xml_components_1.XmlComponent {
    constructor(x, y) {
        super("pic:spPr");
        this.root.push(new shape_properties_attributes_1.ShapePropertiesAttributes({
            bwMode: "auto",
        }));
        this.form = new form_1.Form(x, y);
        this.root.push(this.form);
        this.root.push(new preset_geometry_1.PresetGeometry());
    }
    setXY(x, y) {
        this.form.setXY(x, y);
    }
}
exports.ShapeProperties = ShapeProperties;
//# sourceMappingURL=shape-properties.js.map
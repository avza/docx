"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresetGeometry = void 0;
const xml_components_1 = require("file/xml-components");
const adjustment_values_1 = require("./adjustment-values/adjustment-values");
const preset_geometry_attributes_1 = require("./preset-geometry-attributes");
class PresetGeometry extends xml_components_1.XmlComponent {
    constructor() {
        super("a:prstGeom");
        this.root.push(new preset_geometry_attributes_1.PresetGeometryAttributes({
            prst: "rect",
        }));
        this.root.push(new adjustment_values_1.AdjustmentValues());
    }
}
exports.PresetGeometry = PresetGeometry;
//# sourceMappingURL=preset-geometry.js.map
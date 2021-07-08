"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableProperties = void 0;
const xml_components_1 = require("file/xml-components");
const paragraph_1 = require("../../paragraph");
const shading_1 = require("../shading");
const table_borders_1 = require("./table-borders");
const table_cell_margin_1 = require("./table-cell-margin");
const table_float_properties_1 = require("./table-float-properties");
const table_layout_1 = require("./table-layout");
const table_width_1 = require("./table-width");
const visually_right_to_left_1 = require("./visually-right-to-left");
class TableProperties extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor(options) {
        super("w:tblPr");
        this.root.push(new table_cell_margin_1.TableCellMargin(options.cellMargin || {}));
        if (options.borders) {
            this.root.push(new table_borders_1.TableBorders(options.borders));
        }
        if (options.width) {
            this.root.push(new table_width_1.PreferredTableWidth(options.width.type, options.width.size));
        }
        if (options.float) {
            this.root.push(new table_float_properties_1.TableFloatProperties(options.float));
        }
        if (options.layout) {
            this.root.push(new table_layout_1.TableLayout(options.layout));
        }
        if (options.alignment) {
            this.root.push(new paragraph_1.Alignment(options.alignment));
        }
        if (options.shading) {
            this.root.push(new shading_1.TableShading(options.shading));
        }
        if (options.visuallyRightToLeft) {
            this.root.push(new visually_right_to_left_1.VisuallyRightToLeft());
        }
    }
}
exports.TableProperties = TableProperties;
//# sourceMappingURL=table-properties.js.map
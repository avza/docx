"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentGrid = void 0;
const xml_components_1 = require("file/xml-components");
const doc_grid_attributes_1 = require("./doc-grid-attributes");
class DocumentGrid extends xml_components_1.XmlComponent {
    constructor(linePitch) {
        super("w:docGrid");
        this.root.push(new doc_grid_attributes_1.DocGridAttributes({
            linePitch: linePitch,
        }));
    }
}
exports.DocumentGrid = DocumentGrid;
//# sourceMappingURL=doc-grid.js.map
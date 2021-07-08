"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicFrameLocks = void 0;
const xml_components_1 = require("file/xml-components");
const graphic_frame_lock_attributes_1 = require("./graphic-frame-lock-attributes");
class GraphicFrameLocks extends xml_components_1.XmlComponent {
    constructor() {
        super("a:graphicFrameLocks");
        this.root.push(new graphic_frame_lock_attributes_1.GraphicFrameLockAttributes({
            xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main",
            noChangeAspect: 1,
        }));
    }
}
exports.GraphicFrameLocks = GraphicFrameLocks;
//# sourceMappingURL=graphic-frame-locks.js.map
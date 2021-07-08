"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicFrameProperties = void 0;
const xml_components_1 = require("file/xml-components");
const graphic_frame_locks_1 = require("./graphic-frame-locks/graphic-frame-locks");
class GraphicFrameProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("wp:cNvGraphicFramePr");
        this.root.push(new graphic_frame_locks_1.GraphicFrameLocks());
    }
}
exports.GraphicFrameProperties = GraphicFrameProperties;
//# sourceMappingURL=graphic-frame-properties.js.map
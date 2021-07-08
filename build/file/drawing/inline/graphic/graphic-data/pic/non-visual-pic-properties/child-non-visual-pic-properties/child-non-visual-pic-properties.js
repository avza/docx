"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildNonVisualProperties = void 0;
const xml_components_1 = require("file/xml-components");
const pic_locks_1 = require("./pic-locks/pic-locks");
class ChildNonVisualProperties extends xml_components_1.XmlComponent {
    constructor() {
        super("pic:cNvPicPr");
        this.root.push(new pic_locks_1.PicLocks());
    }
}
exports.ChildNonVisualProperties = ChildNonVisualProperties;
//# sourceMappingURL=child-non-visual-pic-properties.js.map
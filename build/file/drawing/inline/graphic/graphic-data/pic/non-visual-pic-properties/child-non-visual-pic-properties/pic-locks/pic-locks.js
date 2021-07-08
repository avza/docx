"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicLocks = void 0;
const xml_components_1 = require("file/xml-components");
const pic_locks_attributes_1 = require("./pic-locks-attributes");
class PicLocks extends xml_components_1.XmlComponent {
    constructor() {
        super("a:picLocks");
        this.root.push(new pic_locks_attributes_1.PicLocksAttributes({
            noChangeAspect: 1,
            noChangeArrowheads: 1,
        }));
    }
}
exports.PicLocks = PicLocks;
//# sourceMappingURL=pic-locks.js.map
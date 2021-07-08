"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const xml_components_1 = require("file/xml-components");
const extents_1 = require("./extents/extents");
const off_1 = require("./offset/off");
class Form extends xml_components_1.XmlComponent {
    constructor(x, y) {
        super("a:xfrm");
        this.extents = new extents_1.Extents(x, y);
        this.root.push(this.extents);
        this.root.push(new off_1.Offset());
    }
    setXY(x, y) {
        this.extents.setXY(x, y);
    }
}
exports.Form = Form;
//# sourceMappingURL=form.js.map
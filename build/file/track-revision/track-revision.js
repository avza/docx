"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class ChangeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "w:id",
            author: "w:author",
            date: "w:date",
        };
    }
}
exports.ChangeAttributes = ChangeAttributes;
//# sourceMappingURL=track-revision.js.map
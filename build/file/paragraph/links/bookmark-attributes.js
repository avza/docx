"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkEndAttributes = exports.BookmarkStartAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class BookmarkStartAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "w:id",
            name: "w:name",
        };
    }
}
exports.BookmarkStartAttributes = BookmarkStartAttributes;
class BookmarkEndAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            id: "w:id",
        };
    }
}
exports.BookmarkEndAttributes = BookmarkEndAttributes;
//# sourceMappingURL=bookmark-attributes.js.map
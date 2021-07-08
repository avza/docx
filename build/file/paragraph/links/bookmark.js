"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkEnd = exports.BookmarkStart = exports.Bookmark = void 0;
const xml_components_1 = require("file/xml-components");
const shortid = require("shortid");
const run_1 = require("../run");
const bookmark_attributes_1 = require("./bookmark-attributes");
class Bookmark {
    constructor(name, text) {
        const linkId = shortid.generate().toLowerCase();
        this.start = new BookmarkStart(name, linkId);
        this.text = new run_1.TextRun(text);
        this.end = new BookmarkEnd(linkId);
    }
}
exports.Bookmark = Bookmark;
class BookmarkStart extends xml_components_1.XmlComponent {
    constructor(name, linkId) {
        super("w:bookmarkStart");
        const attributes = new bookmark_attributes_1.BookmarkStartAttributes({
            name,
            id: linkId,
        });
        this.root.push(attributes);
    }
}
exports.BookmarkStart = BookmarkStart;
class BookmarkEnd extends xml_components_1.XmlComponent {
    constructor(linkId) {
        super("w:bookmarkEnd");
        const attributes = new bookmark_attributes_1.BookmarkEndAttributes({
            id: linkId,
        });
        this.root.push(attributes);
    }
}
exports.BookmarkEnd = BookmarkEnd;
//# sourceMappingURL=bookmark.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const utility_1 = require("tests/utility");
const bookmark_1 = require("./bookmark");
describe("Bookmark", () => {
    let bookmark;
    beforeEach(() => {
        bookmark = new bookmark_1.Bookmark("anchor", "Internal Link");
    });
    it("should create a bookmark with three root elements", () => {
        const newJson = utility_1.Utility.jsonify(bookmark);
        chai_1.assert.equal(newJson.rootKey, undefined);
        chai_1.assert.equal(newJson.start.rootKey, "w:bookmarkStart");
        chai_1.assert.equal(newJson.text.rootKey, "w:r");
        chai_1.assert.equal(newJson.end.rootKey, "w:bookmarkEnd");
    });
    it("should create a bookmark with the correct attributes on the bookmark start element", () => {
        const newJson = utility_1.Utility.jsonify(bookmark);
        chai_1.assert.equal(newJson.start.root[0].root.name, "anchor");
    });
    it("should create a bookmark with the correct attributes on the text element", () => {
        const newJson = utility_1.Utility.jsonify(bookmark);
        chai_1.assert.equal(JSON.stringify(newJson.text.root[1].root[1]), JSON.stringify("Internal Link"));
    });
    it("should create a bookmark with the correct attributes on the bookmark end element", () => {
        const newJson = utility_1.Utility.jsonify(bookmark);
        chai_1.expect(newJson.end.root[0].root.id).to.be.a("string");
    });
});
//# sourceMappingURL=bookmark.spec.js.map
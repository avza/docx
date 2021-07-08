"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const track_revisions_1 = require("file/settings/track-revisions");
const xml_components_1 = require("file/xml-components");
describe("TrackRevisions", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const trackRevisions = new track_revisions_1.TrackRevisions();
            const tree = new formatter_1.Formatter().format(trackRevisions);
            chai_1.expect(tree).to.deep.equal({ "w:trackRevisions": xml_components_1.EMPTY_OBJECT });
        });
    });
});
//# sourceMappingURL=track-revisions.spec.js.map
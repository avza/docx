"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const settings_1 = require("./settings");
describe("Settings", () => {
    describe("#constructor", () => {
        it("should create a empty Settings with correct rootKey", () => {
            const settings = new settings_1.Settings({});
            const tree = new formatter_1.Formatter().format(settings);
            let keys = Object.keys(tree);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:settings");
            keys = Object.keys(tree["w:settings"]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(3);
        });
    });
    describe("#addUpdateFields", () => {
        const assertSettingsWithUpdateFields = (settings) => {
            const tree = new formatter_1.Formatter().format(settings);
            let keys = Object.keys(tree);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:settings");
            const rootArray = tree["w:settings"];
            chai_1.expect(rootArray).is.an.instanceof(Array);
            chai_1.expect(rootArray).has.length(4);
            keys = Object.keys(rootArray[0]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("_attr");
            keys = Object.keys(rootArray[3]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:updateFields");
            const updateFields = rootArray[3]["w:updateFields"];
            keys = Object.keys(updateFields);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("_attr");
            const updateFieldsAttr = updateFields._attr;
            chai_1.expect(updateFieldsAttr["w:val"]).to.be.equal(true);
        };
        it("should add a UpdateFields with value true", () => {
            const settings = new settings_1.Settings({});
            settings.addUpdateFields();
            assertSettingsWithUpdateFields(settings);
        });
        it("should add a UpdateFields with value true only once", () => {
            const settings = new settings_1.Settings({});
            settings.addUpdateFields();
            assertSettingsWithUpdateFields(settings);
            settings.addUpdateFields();
            assertSettingsWithUpdateFields(settings);
        });
    });
    describe("#addCompatibility", () => {
        it("should add an empty Compatibility by default", () => {
            const settings = new settings_1.Settings({});
            const tree = new formatter_1.Formatter().format(settings);
            let keys = Object.keys(tree);
            chai_1.expect(keys[0]).to.be.equal("w:settings");
            const rootArray = tree["w:settings"];
            chai_1.expect(rootArray).is.an.instanceof(Array);
            chai_1.expect(rootArray).has.length(3);
            keys = Object.keys(rootArray[0]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("_attr");
            keys = Object.keys(rootArray[1]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:compat");
            chai_1.expect(rootArray[1]["w:compat"][0]).to.deep.equal({
                "w:compatSetting": {
                    _attr: {
                        "w:val": 15,
                        "w:uri": "http://schemas.microsoft.com/office/word",
                        "w:name": "compatibilityMode",
                    },
                },
            });
        });
    });
    describe("#addTrackRevisions", () => {
        it("should add an empty Track Revisions", () => {
            const settings = new settings_1.Settings({});
            settings.addTrackRevisions();
            const tree = new formatter_1.Formatter().format(settings);
            let keys = Object.keys(tree);
            chai_1.expect(keys[0]).to.be.equal("w:settings");
            const rootArray = tree["w:settings"];
            chai_1.expect(rootArray).is.an.instanceof(Array);
            chai_1.expect(rootArray).has.length(4);
            keys = Object.keys(rootArray[0]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("_attr");
            keys = Object.keys(rootArray[3]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:trackRevisions");
        });
    });
    describe("#addTrackRevisionsTwice", () => {
        it("should add an empty Track Revisions if called twice", () => {
            const settings = new settings_1.Settings({});
            settings.addTrackRevisions();
            settings.addTrackRevisions();
            const tree = new formatter_1.Formatter().format(settings);
            let keys = Object.keys(tree);
            chai_1.expect(keys[0]).to.be.equal("w:settings");
            const rootArray = tree["w:settings"];
            chai_1.expect(rootArray).is.an.instanceof(Array);
            chai_1.expect(rootArray).has.length(4);
            keys = Object.keys(rootArray[0]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("_attr");
            keys = Object.keys(rootArray[3]);
            chai_1.expect(keys).is.an.instanceof(Array);
            chai_1.expect(keys).has.length(1);
            chai_1.expect(keys[0]).to.be.equal("w:trackRevisions");
        });
    });
});
//# sourceMappingURL=settings.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const utility_1 = require("tests/utility");
const text_wrap_1 = require("../text-wrap");
const anchor_1 = require("./anchor");
function createAnchor(drawingOptions) {
    return new anchor_1.Anchor({
        fileName: "test.png",
        stream: new Buffer(""),
        dimensions: {
            pixels: {
                x: 0,
                y: 0,
            },
            emus: {
                x: 0,
                y: 0,
            },
        },
    }, {
        pixels: {
            x: 100,
            y: 100,
        },
        emus: {
            x: 100 * 9525,
            y: 100 * 9525,
        },
    }, drawingOptions);
}
describe("Anchor", () => {
    let anchor;
    describe("#constructor()", () => {
        it("should create a Drawing with correct root key", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.rootKey, "wp:anchor");
            chai_1.assert.equal(newJson.root.length, 10);
        });
        it("should create a Drawing with all default options", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.root.length, 10);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                distT: 0,
                distB: 0,
                distL: 0,
                distR: 0,
                simplePos: "0",
                allowOverlap: "1",
                behindDoc: "0",
                locked: "0",
                layoutInCell: "1",
                relativeHeight: 952500,
            });
            chai_1.assert.equal(newJson.root[1].rootKey, "wp:simplePos");
            const horizontalPosition = newJson.root[2];
            chai_1.assert.equal(horizontalPosition.rootKey, "wp:positionH");
            chai_1.assert.include(horizontalPosition.root[0].root, {
                relativeFrom: "page",
            });
            chai_1.assert.equal(horizontalPosition.root[1].rootKey, "wp:posOffset");
            chai_1.assert.include(horizontalPosition.root[1].root[0], 0);
            const verticalPosition = newJson.root[3];
            chai_1.assert.equal(verticalPosition.rootKey, "wp:positionV");
            chai_1.assert.include(verticalPosition.root[0].root, {
                relativeFrom: "page",
            });
            chai_1.assert.equal(verticalPosition.root[1].rootKey, "wp:posOffset");
            chai_1.assert.include(verticalPosition.root[1].root[0], 0);
            const extent = newJson.root[4];
            chai_1.assert.equal(extent.rootKey, "wp:extent");
            chai_1.assert.include(extent.root[0].root, {
                cx: 952500,
                cy: 952500,
            });
            const effectExtent = newJson.root[5];
            chai_1.assert.equal(effectExtent.rootKey, "wp:effectExtent");
            const textWrap = newJson.root[6];
            chai_1.assert.equal(textWrap.rootKey, "wp:wrapNone");
            const docProperties = newJson.root[7];
            chai_1.assert.equal(docProperties.rootKey, "wp:docPr");
            const graphicFrame = newJson.root[8];
            chai_1.assert.equal(graphicFrame.rootKey, "wp:cNvGraphicFramePr");
            const graphic = newJson.root[9];
            chai_1.assert.equal(graphic.rootKey, "a:graphic");
        });
        it("should create a Drawing with square text wrapping", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    wrap: {
                        type: text_wrap_1.TextWrappingType.SQUARE,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.root.length, 10);
            const textWrap = newJson.root[6];
            chai_1.assert.equal(textWrap.rootKey, "wp:wrapSquare");
        });
        it("should create a Drawing with no text wrapping", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    wrap: {
                        type: text_wrap_1.TextWrappingType.NONE,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.root.length, 10);
            const textWrap = newJson.root[6];
            chai_1.assert.equal(textWrap.rootKey, "wp:wrapNone");
        });
        it("should create a Drawing with tight text wrapping", () => {
            anchor = createAnchor({
                floating: {
                    horizontalPosition: {
                        offset: 0,
                    },
                    verticalPosition: {
                        offset: 0,
                    },
                    wrap: {
                        type: text_wrap_1.TextWrappingType.TIGHT,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.root.length, 10);
            const textWrap = newJson.root[6];
            chai_1.assert.equal(textWrap.rootKey, "wp:wrapTight");
        });
        it("should create a Drawing with tight text wrapping", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    wrap: {
                        type: text_wrap_1.TextWrappingType.TOP_AND_BOTTOM,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            chai_1.assert.equal(newJson.root.length, 10);
            const textWrap = newJson.root[6];
            chai_1.assert.equal(textWrap.rootKey, "wp:wrapTopAndBottom");
        });
        it("should create a Drawing with a margin", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    margins: {
                        top: 10,
                        left: 10,
                        bottom: 10,
                        right: 10,
                    },
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                distT: 10,
                distB: 10,
                distL: 10,
                distR: 10,
            });
        });
        it("should create a Drawing with a default margin", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    margins: {},
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                distT: 0,
                distB: 0,
                distL: 0,
                distR: 0,
            });
        });
        it("should create a Drawing with allowOverlap being false", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    allowOverlap: false,
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                allowOverlap: "0",
            });
        });
        it("should create a Drawing with behindDocument being true", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    behindDocument: true,
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                behindDoc: "1",
            });
        });
        it("should create a Drawing with locked being true", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    lockAnchor: true,
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                locked: "1",
            });
        });
        it("should create a Drawing with locked being false", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    layoutInCell: false,
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                layoutInCell: "0",
            });
        });
        it("should create a Drawing with a certain z-index", () => {
            anchor = createAnchor({
                floating: {
                    verticalPosition: {
                        offset: 0,
                    },
                    horizontalPosition: {
                        offset: 0,
                    },
                    zIndex: 120,
                },
            });
            const newJson = utility_1.Utility.jsonify(anchor);
            const anchorAttributes = newJson.root[0].root;
            chai_1.assert.include(anchorAttributes, {
                relativeHeight: 120,
            });
        });
    });
});
//# sourceMappingURL=anchor.spec.js.map
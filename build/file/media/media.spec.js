"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const formatter_1 = require("export/formatter");
const file_1 = require("../file");
const paragraph_1 = require("../paragraph");
const media_1 = require("./media");
describe("Media", () => {
    describe("#addImage", () => {
        it("should add image", () => {
            const file = new file_1.File();
            const image = media_1.Media.addImage(file, "");
            let tree = new formatter_1.Formatter().format(new paragraph_1.Paragraph(image));
            chai_1.expect(tree["w:p"]).to.be.an.instanceof(Array);
            tree = new formatter_1.Formatter().format(image);
            chai_1.expect(tree["w:r"]).to.be.an.instanceof(Array);
        });
        it("should ensure the correct relationship id is used when adding image", () => {
            sinon_1.stub(media_1.Media, "generateId").callsFake(() => "testId");
            const file = new file_1.File();
            const image1 = media_1.Media.addImage(file, "test");
            const tree = new formatter_1.Formatter().format(new paragraph_1.Paragraph(image1));
            const inlineElements = tree["w:p"][0]["w:r"][0]["w:drawing"][0]["wp:inline"];
            const graphicData = inlineElements.find((x) => x["a:graphic"]);
            chai_1.expect(graphicData["a:graphic"][1]["a:graphicData"][1]["pic:pic"][2]["pic:blipFill"][0]["a:blip"]).to.deep.equal({
                _attr: {
                    "r:embed": `rId{testId.png}`,
                    cstate: "none",
                },
            });
            const image2 = media_1.Media.addImage(file, "test");
            const tree2 = new formatter_1.Formatter().format(new paragraph_1.Paragraph(image2));
            const inlineElements2 = tree2["w:p"][0]["w:r"][0]["w:drawing"][0]["wp:inline"];
            const graphicData2 = inlineElements2.find((x) => x["a:graphic"]);
            chai_1.expect(graphicData2["a:graphic"][1]["a:graphicData"][1]["pic:pic"][2]["pic:blipFill"][0]["a:blip"]).to.deep.equal({
                _attr: {
                    "r:embed": `rId{testId.png}`,
                    cstate: "none",
                },
            });
        });
    });
    describe("#addMedia", () => {
        it("should add media", () => {
            media_1.Media.generateId = () => "test";
            const image = new media_1.Media().addMedia("");
            chai_1.expect(image.fileName).to.equal("test.png");
            chai_1.expect(image.dimensions).to.deep.equal({
                pixels: {
                    x: 100,
                    y: 100,
                },
                emus: {
                    x: 952500,
                    y: 952500,
                },
            });
        });
        it("should return UInt8Array if atob is present", () => {
            process.atob = () => "atob result";
            media_1.Media.generateId = () => "test";
            const image = new media_1.Media().addMedia("");
            chai_1.expect(image.stream).to.be.an.instanceof(Uint8Array);
        });
        it("should use data as is if its not a string", () => {
            process.atob = () => "atob result";
            media_1.Media.generateId = () => "test";
            const image = new media_1.Media().addMedia(new Buffer(""));
            chai_1.expect(image.stream).to.be.an.instanceof(Uint8Array);
        });
    });
    describe("#getMedia", () => {
        it("should get media", () => {
            media_1.Media.generateId = () => "test";
            const media = new media_1.Media();
            media.addMedia("");
            const image = media.getMedia("test.png");
            chai_1.expect(image.fileName).to.equal("test.png");
            chai_1.expect(image.dimensions).to.deep.equal({
                pixels: {
                    x: 100,
                    y: 100,
                },
                emus: {
                    x: 952500,
                    y: 952500,
                },
            });
        });
        it("Get media", () => {
            const media = new media_1.Media();
            chai_1.expect(() => media.getMedia("test.png")).to.throw();
        });
    });
    describe("#Array", () => {
        it("Get images as array", () => {
            media_1.Media.generateId = () => "test";
            const media = new media_1.Media();
            media.addMedia("");
            const array = media.Array;
            chai_1.expect(array).to.be.an.instanceof(Array);
            chai_1.expect(array.length).to.equal(1);
            const image = array[0];
            chai_1.expect(image.fileName).to.equal("test.png");
            chai_1.expect(image.dimensions).to.deep.equal({
                pixels: {
                    x: 100,
                    y: 100,
                },
                emus: {
                    x: 952500,
                    y: 952500,
                },
            });
        });
    });
});
//# sourceMappingURL=media.spec.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const file_1 = require("file");
const packer_1 = require("./packer");
describe("Packer", () => {
    let file;
    beforeEach(() => {
        file = new file_1.File({
            creator: "Dolan Miu",
            revision: "1",
            lastModifiedBy: "Dolan Miu",
        });
        file.addSection({
            children: [
                new file_1.Paragraph({
                    text: "title",
                    heading: file_1.HeadingLevel.TITLE,
                }),
                new file_1.Paragraph({
                    text: "Hello world",
                    heading: file_1.HeadingLevel.HEADING_1,
                }),
                new file_1.Paragraph({
                    text: "heading 2",
                    heading: file_1.HeadingLevel.HEADING_2,
                }),
                new file_1.Paragraph("test text"),
            ],
        });
    });
    describe("#toBuffer()", () => {
        it("should create a standard docx file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(99999999);
                const buffer = yield packer_1.Packer.toBuffer(file);
                chai_1.assert.isDefined(buffer);
                chai_1.assert.isTrue(buffer.byteLength > 0);
            });
        });
        it("should handle exception if it throws any", () => {
            const compiler = sinon_1.stub(packer_1.Packer.compiler, "compile");
            compiler.throwsException();
            return packer_1.Packer.toBuffer(file).catch((error) => {
                chai_1.assert.isDefined(error);
            });
        });
        after(() => {
            packer_1.Packer.compiler.compile.restore();
        });
    });
    describe("#toBase64String()", () => {
        it("should create a standard docx file", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(99999999);
                const str = yield packer_1.Packer.toBase64String(file);
                chai_1.assert.isDefined(str);
                chai_1.assert.isTrue(str.length > 0);
            });
        });
        it("should handle exception if it throws any", () => {
            const compiler = sinon_1.stub(packer_1.Packer.compiler, "compile");
            compiler.throwsException();
            return packer_1.Packer.toBase64String(file).catch((error) => {
                chai_1.assert.isDefined(error);
            });
        });
        after(() => {
            packer_1.Packer.compiler.compile.restore();
        });
    });
});
//# sourceMappingURL=packer.spec.js.map
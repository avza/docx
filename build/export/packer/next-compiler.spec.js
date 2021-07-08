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
const sinon = require("sinon");
const file_1 = require("file");
const next_compiler_1 = require("./next-compiler");
describe("Compiler", () => {
    let compiler;
    let file;
    beforeEach(() => {
        file = new file_1.File();
        compiler = new next_compiler_1.Compiler();
    });
    describe("#compile()", () => {
        it("should pack all the content", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(99999999);
                const zipFile = compiler.compile(file);
                const fileNames = Object.keys(zipFile.files).map((f) => zipFile.files[f].name);
                chai_1.expect(fileNames).is.an.instanceof(Array);
                chai_1.expect(fileNames).has.length(16);
                chai_1.expect(fileNames).to.include("word/document.xml");
                chai_1.expect(fileNames).to.include("word/styles.xml");
                chai_1.expect(fileNames).to.include("docProps/core.xml");
                chai_1.expect(fileNames).to.include("docProps/custom.xml");
                chai_1.expect(fileNames).to.include("docProps/app.xml");
                chai_1.expect(fileNames).to.include("word/numbering.xml");
                chai_1.expect(fileNames).to.include("word/footnotes.xml");
                chai_1.expect(fileNames).to.include("word/_rels/footnotes.xml.rels");
                chai_1.expect(fileNames).to.include("word/settings.xml");
                chai_1.expect(fileNames).to.include("word/_rels/document.xml.rels");
                chai_1.expect(fileNames).to.include("[Content_Types].xml");
                chai_1.expect(fileNames).to.include("_rels/.rels");
            });
        });
        it("should pack all additional headers and footers", function () {
            return __awaiter(this, void 0, void 0, function* () {
                file.addSection({
                    headers: {
                        default: new file_1.Header(),
                    },
                    footers: {
                        default: new file_1.Footer(),
                    },
                    children: [],
                });
                file.addSection({
                    headers: {
                        default: new file_1.Header(),
                    },
                    footers: {
                        default: new file_1.Footer(),
                    },
                    children: [],
                });
                this.timeout(99999999);
                const zipFile = compiler.compile(file);
                const fileNames = Object.keys(zipFile.files).map((f) => zipFile.files[f].name);
                chai_1.expect(fileNames).is.an.instanceof(Array);
                chai_1.expect(fileNames).has.length(24);
                chai_1.expect(fileNames).to.include("word/header1.xml");
                chai_1.expect(fileNames).to.include("word/_rels/header1.xml.rels");
                chai_1.expect(fileNames).to.include("word/header2.xml");
                chai_1.expect(fileNames).to.include("word/_rels/header2.xml.rels");
                chai_1.expect(fileNames).to.include("word/footer1.xml");
                chai_1.expect(fileNames).to.include("word/_rels/footer1.xml.rels");
                chai_1.expect(fileNames).to.include("word/footer2.xml");
                chai_1.expect(fileNames).to.include("word/_rels/footer2.xml.rels");
            });
        });
        it("should call the format method X times equalling X files to be formatted", () => {
            const paragraph = new file_1.Paragraph("");
            const doc = new file_1.File();
            doc.addSection({
                properties: {},
                children: [paragraph],
            });
            const spy = sinon.spy(compiler["formatter"], "format");
            compiler.compile(file);
            chai_1.expect(spy.callCount).to.equal(12);
        });
    });
});
//# sourceMappingURL=next-compiler.spec.js.map
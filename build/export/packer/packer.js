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
exports.Packer = void 0;
const next_compiler_1 = require("./next-compiler");
class Packer {
    static toBuffer(file, prettify) {
        return __awaiter(this, void 0, void 0, function* () {
            const zip = this.compiler.compile(file, prettify);
            const zipData = yield zip.generateAsync({
                type: "nodebuffer",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
            });
            return zipData;
        });
    }
    static toBase64String(file, prettify) {
        return __awaiter(this, void 0, void 0, function* () {
            const zip = this.compiler.compile(file, prettify);
            const zipData = yield zip.generateAsync({
                type: "base64",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
            });
            return zipData;
        });
    }
    static toBlob(file, prettify) {
        return __awaiter(this, void 0, void 0, function* () {
            const zip = this.compiler.compile(file, prettify);
            const zipData = yield zip.generateAsync({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
            });
            return zipData;
        });
    }
}
exports.Packer = Packer;
Packer.compiler = new next_compiler_1.Compiler();
//# sourceMappingURL=packer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentWrapper = void 0;
const document_1 = require("./document");
const relationships_1 = require("./relationships");
class DocumentWrapper {
    constructor(options) {
        this.document = new document_1.Document(options);
        this.relationships = new relationships_1.Relationships();
    }
    get View() {
        return this.document;
    }
    get Relationships() {
        return this.relationships;
    }
}
exports.DocumentWrapper = DocumentWrapper;
//# sourceMappingURL=document-wrapper.js.map
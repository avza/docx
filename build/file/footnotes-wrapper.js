"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootnotesWrapper = void 0;
const footnotes_1 = require("./footnotes/footnotes");
const relationships_1 = require("./relationships");
class FootnotesWrapper {
    constructor() {
        this.footnotess = new footnotes_1.FootNotes();
        this.relationships = new relationships_1.Relationships();
    }
    get View() {
        return this.footnotess;
    }
    get Relationships() {
        return this.relationships;
    }
}
exports.FootnotesWrapper = FootnotesWrapper;
//# sourceMappingURL=footnotes-wrapper.js.map
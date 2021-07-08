"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootnoteRefRun = void 0;
const paragraph_1 = require("file/paragraph");
const footnote_ref_1 = require("./footnote-ref");
class FootnoteRefRun extends paragraph_1.Run {
    constructor() {
        super({
            style: "FootnoteReference",
        });
        this.root.push(new footnote_ref_1.FootnoteRef());
    }
}
exports.FootnoteRefRun = FootnoteRefRun;
//# sourceMappingURL=footnote-ref-run.js.map
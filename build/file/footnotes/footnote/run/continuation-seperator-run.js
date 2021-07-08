"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContinuationSeperatorRun = void 0;
const paragraph_1 = require("file/paragraph");
const continuation_seperator_1 = require("./continuation-seperator");
class ContinuationSeperatorRun extends paragraph_1.Run {
    constructor() {
        super({});
        this.root.push(new continuation_seperator_1.ContinuationSeperator());
    }
}
exports.ContinuationSeperatorRun = ContinuationSeperatorRun;
//# sourceMappingURL=continuation-seperator-run.js.map
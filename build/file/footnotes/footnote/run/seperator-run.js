"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeperatorRun = void 0;
const paragraph_1 = require("file/paragraph");
const seperator_1 = require("./seperator");
class SeperatorRun extends paragraph_1.Run {
    constructor() {
        super({});
        this.root.push(new seperator_1.Seperator());
    }
}
exports.SeperatorRun = SeperatorRun;
//# sourceMappingURL=seperator-run.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextRun = void 0;
const run_1 = require("./run");
const text_1 = require("./run-components/text");
class TextRun extends run_1.Run {
    constructor(options) {
        if (typeof options === "string") {
            super({});
            this.root.push(new text_1.Text(options));
            return;
        }
        super(options);
    }
}
exports.TextRun = TextRun;
//# sourceMappingURL=text-run.js.map
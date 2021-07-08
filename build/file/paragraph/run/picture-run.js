"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureRun = void 0;
const drawing_1 = require("../../drawing");
const run_1 = require("../run");
class PictureRun extends run_1.Run {
    constructor(imageData, drawingOptions) {
        super({});
        const drawing = new drawing_1.Drawing(imageData, drawingOptions);
        this.root.push(drawing);
    }
}
exports.PictureRun = PictureRun;
//# sourceMappingURL=picture-run.js.map
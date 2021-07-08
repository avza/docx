"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
class Formatter {
    format(input, file) {
        const output = input.prepForXml(file);
        if (output) {
            return output;
        }
        else {
            throw Error("XMLComponent did not format correctly");
        }
    }
}
exports.Formatter = Formatter;
//# sourceMappingURL=formatter.js.map
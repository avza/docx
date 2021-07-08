"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
class Utility {
    static jsonify(obj) {
        const stringifiedJson = JSON.stringify(obj);
        return JSON.parse(stringifiedJson);
    }
}
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map
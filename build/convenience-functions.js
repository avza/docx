"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertInchesToTwip = exports.convertMillimetersToTwip = void 0;
const convertMillimetersToTwip = (millimeters) => {
    return Math.floor((millimeters / 25.4) * 72 * 20);
};
exports.convertMillimetersToTwip = convertMillimetersToTwip;
const convertInchesToTwip = (inches) => {
    return Math.floor(inches * 72 * 20);
};
exports.convertInchesToTwip = convertInchesToTwip;
//# sourceMappingURL=convenience-functions.js.map
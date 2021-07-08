"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberingReplacer = void 0;
class NumberingReplacer {
    replace(xmlData, concreteNumberings) {
        let currentXmlData = xmlData;
        for (const concreteNumbering of concreteNumberings) {
            if (!concreteNumbering.reference) {
                continue;
            }
            currentXmlData = currentXmlData.replace(new RegExp(`{${concreteNumbering.reference}}`, "g"), concreteNumbering.id.toString());
        }
        return currentXmlData;
    }
}
exports.NumberingReplacer = NumberingReplacer;
//# sourceMappingURL=numbering-replacer.js.map
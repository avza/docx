"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageReplacer = void 0;
class ImageReplacer {
    replace(xmlData, mediaData, offset) {
        let currentXmlData = xmlData;
        mediaData.forEach((image, i) => {
            currentXmlData = currentXmlData.replace(new RegExp(`{${image.fileName}}`, "g"), (offset + i).toString());
        });
        return currentXmlData;
    }
    getMediaData(xmlData, media) {
        return media.Array.filter((image) => xmlData.search(`{${image.fileName}}`) > 0);
    }
}
exports.ImageReplacer = ImageReplacer;
//# sourceMappingURL=image-replacer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const paragraph_1 = require("../paragraph");
class Media {
    constructor() {
        this.map = new Map();
    }
    static addImage(file, buffer, width, height, drawingOptions) {
        const mediaData = file.Media.addMedia(buffer, width, height);
        return new paragraph_1.PictureRun(mediaData, drawingOptions);
    }
    static generateId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    getMedia(key) {
        const data = this.map.get(key);
        if (data === undefined) {
            throw new Error(`Cannot find image with the key ${key}`);
        }
        return data;
    }
    addMedia(buffer, width = 100, height = 100) {
        const key = `${Media.generateId()}.png`;
        return this.createMedia(key, {
            width: width,
            height: height,
        }, buffer);
    }
    createMedia(key, dimensions, data, filePath) {
        const newData = typeof data === "string" ? this.convertDataURIToBinary(data) : data;
        const imageData = {
            stream: newData,
            path: filePath,
            fileName: key,
            dimensions: {
                pixels: {
                    x: Math.round(dimensions.width),
                    y: Math.round(dimensions.height),
                },
                emus: {
                    x: Math.round(dimensions.width * 9525),
                    y: Math.round(dimensions.height * 9525),
                },
            },
        };
        this.map.set(key, imageData);
        return imageData;
    }
    get Array() {
        const array = new Array();
        this.map.forEach((data) => {
            array.push(data);
        });
        return array;
    }
    convertDataURIToBinary(dataURI) {
        const BASE64_MARKER = ";base64,";
        const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        if (typeof atob === "function") {
            return new Uint8Array(atob(dataURI.substring(base64Index))
                .split("")
                .map((c) => c.charCodeAt(0)));
        }
        else {
            const b = require("buf" + "fer");
            return new b.Buffer(dataURI, "base64");
        }
    }
}
exports.Media = Media;
//# sourceMappingURL=media.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWrapper = void 0;
const header_1 = require("./header/header");
const relationships_1 = require("./relationships");
class HeaderWrapper {
    constructor(media, referenceId, initContent) {
        this.media = media;
        this.header = new header_1.Header(referenceId, initContent);
        this.relationships = new relationships_1.Relationships();
    }
    add(item) {
        this.header.add(item);
        return this;
    }
    addChildElement(childElement) {
        this.header.addChildElement(childElement);
    }
    get View() {
        return this.header;
    }
    get Relationships() {
        return this.relationships;
    }
    get Media() {
        return this.media;
    }
}
exports.HeaderWrapper = HeaderWrapper;
//# sourceMappingURL=header-wrapper.js.map
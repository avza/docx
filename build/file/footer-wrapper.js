"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterWrapper = void 0;
const footer_1 = require("./footer/footer");
const relationships_1 = require("./relationships");
class FooterWrapper {
    constructor(media, referenceId, initContent) {
        this.media = media;
        this.footer = new footer_1.Footer(referenceId, initContent);
        this.relationships = new relationships_1.Relationships();
    }
    add(item) {
        this.footer.add(item);
    }
    addChildElement(childElement) {
        this.footer.addChildElement(childElement);
    }
    get View() {
        return this.footer;
    }
    get Relationships() {
        return this.relationships;
    }
    get Media() {
        return this.media;
    }
}
exports.FooterWrapper = FooterWrapper;
//# sourceMappingURL=footer-wrapper.js.map
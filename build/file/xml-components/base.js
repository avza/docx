"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseXmlComponent = void 0;
class BaseXmlComponent {
    constructor(rootKey) {
        this.deleted = false;
        this.rootKey = rootKey;
    }
    get IsDeleted() {
        return this.deleted;
    }
}
exports.BaseXmlComponent = BaseXmlComponent;
//# sourceMappingURL=base.js.map
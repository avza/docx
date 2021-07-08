"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorAttributes = void 0;
const xml_components_1 = require("file/xml-components");
class AnchorAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            distT: "distT",
            distB: "distB",
            distL: "distL",
            distR: "distR",
            allowOverlap: "allowOverlap",
            behindDoc: "behindDoc",
            layoutInCell: "layoutInCell",
            locked: "locked",
            relativeHeight: "relativeHeight",
            simplePos: "simplePos",
        };
    }
}
exports.AnchorAttributes = AnchorAttributes;
//# sourceMappingURL=anchor-attributes.js.map
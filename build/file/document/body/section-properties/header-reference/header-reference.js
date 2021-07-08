"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderReference = void 0;
const xml_components_1 = require("file/xml-components");
const header_reference_attributes_1 = require("./header-reference-attributes");
class HeaderReference extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:headerReference");
        this.root.push(new header_reference_attributes_1.HeaderReferenceAttributes({
            type: options.headerType || header_reference_attributes_1.HeaderReferenceType.DEFAULT,
            id: `rId${options.headerId}`,
        }));
    }
}
exports.HeaderReference = HeaderReference;
//# sourceMappingURL=header-reference.js.map
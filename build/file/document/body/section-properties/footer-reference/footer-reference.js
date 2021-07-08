"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterReference = void 0;
const xml_components_1 = require("file/xml-components");
const footer_reference_attributes_1 = require("./footer-reference-attributes");
class FooterReference extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:footerReference");
        this.root.push(new footer_reference_attributes_1.FooterReferenceAttributes({
            type: options.footerType || footer_reference_attributes_1.FooterReferenceType.DEFAULT,
            id: `rId${options.footerId}`,
        }));
    }
}
exports.FooterReference = FooterReference;
//# sourceMappingURL=footer-reference.js.map
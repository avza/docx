"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedNumberOfPagesSection = exports.DeletedNumberOfPages = exports.DeletedPage = void 0;
const space_type_1 = require("file/space-type");
const xml_components_1 = require("file/xml-components");
class TextAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { space: "xml:space" };
    }
}
class DeletedPage extends xml_components_1.XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("PAGE");
    }
}
exports.DeletedPage = DeletedPage;
class DeletedNumberOfPages extends xml_components_1.XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("NUMPAGES");
    }
}
exports.DeletedNumberOfPages = DeletedNumberOfPages;
class DeletedNumberOfPagesSection extends xml_components_1.XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("SECTIONPAGES");
    }
}
exports.DeletedNumberOfPagesSection = DeletedNumberOfPagesSection;
//# sourceMappingURL=deleted-page-number.js.map
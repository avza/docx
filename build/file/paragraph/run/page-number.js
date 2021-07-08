"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOfPagesSection = exports.NumberOfPages = exports.Page = void 0;
const space_type_1 = require("file/space-type");
const xml_components_1 = require("file/xml-components");
class TextAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { space: "xml:space" };
    }
}
class Page extends xml_components_1.XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("PAGE");
    }
}
exports.Page = Page;
class NumberOfPages extends xml_components_1.XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("NUMPAGES");
    }
}
exports.NumberOfPages = NumberOfPages;
class NumberOfPagesSection extends xml_components_1.XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push("SECTIONPAGES");
    }
}
exports.NumberOfPagesSection = NumberOfPagesSection;
//# sourceMappingURL=page-number.js.map
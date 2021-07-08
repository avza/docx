"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedText = void 0;
const space_type_1 = require("file/space-type");
const xml_components_1 = require("file/xml-components");
class TextAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { space: "xml:space" };
    }
}
class DeletedText extends xml_components_1.XmlComponent {
    constructor(text) {
        super("w:delText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push(text);
    }
}
exports.DeletedText = DeletedText;
//# sourceMappingURL=deleted-text.js.map
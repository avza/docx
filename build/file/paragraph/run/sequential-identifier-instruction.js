"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialIdentifierInstruction = void 0;
const space_type_1 = require("file/space-type");
const xml_components_1 = require("file/xml-components");
class TextAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { space: "xml:space" };
    }
}
class SequentialIdentifierInstruction extends xml_components_1.XmlComponent {
    constructor(identifier) {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: space_type_1.SpaceType.PRESERVE }));
        this.root.push(`SEQ ${identifier}`);
    }
}
exports.SequentialIdentifierInstruction = SequentialIdentifierInstruction;
//# sourceMappingURL=sequential-identifier-instruction.js.map
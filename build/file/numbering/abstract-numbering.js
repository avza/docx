"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractNumbering = void 0;
const xml_components_1 = require("file/xml-components");
const level_1 = require("./level");
const multi_level_type_1 = require("./multi-level-type");
class AbstractNumberingAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            abstractNumId: "w:abstractNumId",
            restartNumberingAfterBreak: "w15:restartNumberingAfterBreak",
        };
    }
}
class AbstractNumbering extends xml_components_1.XmlComponent {
    constructor(id, levelOptions) {
        super("w:abstractNum");
        this.root.push(new AbstractNumberingAttributes({
            abstractNumId: id,
            restartNumberingAfterBreak: 0,
        }));
        this.root.push(new multi_level_type_1.MultiLevelType("hybridMultilevel"));
        this.id = id;
        for (const option of levelOptions) {
            this.root.push(new level_1.Level(option));
        }
    }
}
exports.AbstractNumbering = AbstractNumbering;
//# sourceMappingURL=abstract-numbering.js.map
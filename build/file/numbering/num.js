"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelOverride = exports.ConcreteNumbering = void 0;
const xml_components_1 = require("file/xml-components");
const level_1 = require("./level");
class AbstractNumId extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:abstractNumId");
        this.root.push(new xml_components_1.Attributes({
            val: value,
        }));
    }
}
class NumAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { numId: "w:numId" };
    }
}
class ConcreteNumbering extends xml_components_1.XmlComponent {
    constructor(numId, abstractNumId, reference) {
        super("w:num");
        this.reference = reference;
        this.root.push(new NumAttributes({
            numId: numId,
        }));
        this.root.push(new AbstractNumId(abstractNumId));
        this.id = numId;
    }
    overrideLevel(num, start) {
        const olvl = new LevelOverride(num, start);
        this.root.push(olvl);
        return olvl;
    }
}
exports.ConcreteNumbering = ConcreteNumbering;
class LevelOverrideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { ilvl: "w:ilvl" };
    }
}
class LevelOverride extends xml_components_1.XmlComponent {
    constructor(levelNum, start) {
        super("w:lvlOverride");
        this.levelNum = levelNum;
        this.root.push(new LevelOverrideAttributes({ ilvl: levelNum }));
        if (start !== undefined) {
            this.root.push(new StartOverride(start));
        }
        this.lvl = new level_1.LevelForOverride({
            level: this.levelNum,
        });
        this.root.push(this.lvl);
    }
    get Level() {
        return this.lvl;
    }
}
exports.LevelOverride = LevelOverride;
class StartOverrideAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class StartOverride extends xml_components_1.XmlComponent {
    constructor(start) {
        super("w:startOverride");
        this.root.push(new StartOverrideAttributes({ val: start }));
    }
}
//# sourceMappingURL=num.js.map
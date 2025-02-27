"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemiHidden = exports.RsId = exports.TableProperties = exports.QuickFormat = exports.UnhideWhenUsed = exports.UiPriority = exports.Link = exports.Next = exports.BasedOn = exports.Name = void 0;
const xml_components_1 = require("file/xml-components");
class ComponentAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val" };
    }
}
class Name extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:name");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}
exports.Name = Name;
class BasedOn extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:basedOn");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}
exports.BasedOn = BasedOn;
class Next extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:next");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}
exports.Next = Next;
class Link extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:link");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}
exports.Link = Link;
class UiPriority extends xml_components_1.XmlComponent {
    constructor(value) {
        super("w:uiPriority");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}
exports.UiPriority = UiPriority;
class UnhideWhenUsed extends xml_components_1.XmlComponent {
    constructor() {
        super("w:unhideWhenUsed");
    }
}
exports.UnhideWhenUsed = UnhideWhenUsed;
class QuickFormat extends xml_components_1.XmlComponent {
    constructor() {
        super("w:qFormat");
    }
}
exports.QuickFormat = QuickFormat;
class TableProperties extends xml_components_1.XmlComponent {
}
exports.TableProperties = TableProperties;
class RsId extends xml_components_1.XmlComponent {
}
exports.RsId = RsId;
class SemiHidden extends xml_components_1.XmlComponent {
    constructor() {
        super("w:semiHidden");
    }
}
exports.SemiHidden = SemiHidden;
//# sourceMappingURL=components.js.map
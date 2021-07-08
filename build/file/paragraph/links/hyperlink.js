"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalHyperlink = exports.InternalHyperlink = exports.ConcreteHyperlink = exports.HyperlinkType = void 0;
const shortid = require("shortid");
const xml_components_1 = require("file/xml-components");
const hyperlink_attributes_1 = require("./hyperlink-attributes");
var HyperlinkType;
(function (HyperlinkType) {
    HyperlinkType["INTERNAL"] = "INTERNAL";
    HyperlinkType["EXTERNAL"] = "EXTERNAL";
})(HyperlinkType = exports.HyperlinkType || (exports.HyperlinkType = {}));
class ConcreteHyperlink extends xml_components_1.XmlComponent {
    constructor(child, relationshipId, anchor) {
        super("w:hyperlink");
        this.linkId = relationshipId;
        const props = {
            history: 1,
            anchor: anchor ? anchor : undefined,
            id: !anchor ? `rId${this.linkId}` : undefined,
        };
        const attributes = new hyperlink_attributes_1.HyperlinkAttributes(props);
        this.root.push(attributes);
        this.root.push(child);
    }
}
exports.ConcreteHyperlink = ConcreteHyperlink;
class InternalHyperlink extends ConcreteHyperlink {
    constructor(options) {
        super(options.child, shortid.generate().toLowerCase(), options.anchor);
    }
}
exports.InternalHyperlink = InternalHyperlink;
class ExternalHyperlink {
    constructor(options) {
        this.options = options;
    }
}
exports.ExternalHyperlink = ExternalHyperlink;
//# sourceMappingURL=hyperlink.js.map
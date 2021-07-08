"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePos = void 0;
const xml_components_1 = require("file/xml-components");
class SimplePosAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            x: "x",
            y: "y",
        };
    }
}
class SimplePos extends xml_components_1.XmlComponent {
    constructor() {
        super("wp:simplePos");
        this.root.push(new SimplePosAttributes({
            x: 0,
            y: 0,
        }));
    }
}
exports.SimplePos = SimplePos;
//# sourceMappingURL=simple-pos.js.map
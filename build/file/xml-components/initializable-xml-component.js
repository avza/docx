"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializableXmlComponent = void 0;
const xml_components_1 = require("file/xml-components");
class InitializableXmlComponent extends xml_components_1.XmlComponent {
    constructor(rootKey, initComponent) {
        super(rootKey);
        if (initComponent) {
            this.root = initComponent.root;
        }
    }
}
exports.InitializableXmlComponent = InitializableXmlComponent;
//# sourceMappingURL=initializable-xml-component.js.map
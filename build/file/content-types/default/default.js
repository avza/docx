"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const xml_components_1 = require("file/xml-components");
const default_attributes_1 = require("./default-attributes");
class Default extends xml_components_1.XmlComponent {
    constructor(contentType, extension) {
        super("Default");
        this.root.push(new default_attributes_1.DefaultAttributes({
            contentType: contentType,
            extension: extension,
        }));
    }
}
exports.Default = Default;
//# sourceMappingURL=default.js.map
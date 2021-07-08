"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageSize = void 0;
const xml_components_1 = require("file/xml-components");
const page_size_attributes_1 = require("./page-size-attributes");
class PageSize extends xml_components_1.XmlComponent {
    constructor(width, height, orientation) {
        super("w:pgSz");
        const flip = orientation === page_size_attributes_1.PageOrientation.LANDSCAPE;
        this.root.push(new page_size_attributes_1.PageSizeAttributes({
            width: flip ? height : width,
            height: flip ? width : height,
            orientation: orientation,
        }));
    }
}
exports.PageSize = PageSize;
//# sourceMappingURL=page-size.js.map
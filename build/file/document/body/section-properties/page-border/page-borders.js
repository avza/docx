"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBorders = exports.PageBorderZOrder = exports.PageBorderOffsetFrom = exports.PageBorderDisplay = void 0;
const xml_components_1 = require("file/xml-components");
var PageBorderDisplay;
(function (PageBorderDisplay) {
    PageBorderDisplay["ALL_PAGES"] = "allPages";
    PageBorderDisplay["FIRST_PAGE"] = "firstPage";
    PageBorderDisplay["NOT_FIRST_PAGE"] = "notFirstPage";
})(PageBorderDisplay = exports.PageBorderDisplay || (exports.PageBorderDisplay = {}));
var PageBorderOffsetFrom;
(function (PageBorderOffsetFrom) {
    PageBorderOffsetFrom["PAGE"] = "page";
    PageBorderOffsetFrom["TEXT"] = "text";
})(PageBorderOffsetFrom = exports.PageBorderOffsetFrom || (exports.PageBorderOffsetFrom = {}));
var PageBorderZOrder;
(function (PageBorderZOrder) {
    PageBorderZOrder["BACK"] = "back";
    PageBorderZOrder["FRONT"] = "front";
})(PageBorderZOrder = exports.PageBorderZOrder || (exports.PageBorderZOrder = {}));
class PageBordeAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            style: "w:val",
            size: "w:size",
            color: "w:color",
            space: "w:space",
        };
    }
}
class PageBorder extends xml_components_1.XmlComponent {
    constructor(key, options) {
        super(key);
        this.root.push(new PageBordeAttributes(options));
    }
}
class PageBordersAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            display: "w:display",
            offsetFrom: "w:offsetFrom",
            zOrder: "w:zOrder",
        };
    }
}
class PageBorders extends xml_components_1.IgnoreIfEmptyXmlComponent {
    constructor(options) {
        super("w:pgBorders");
        if (!options) {
            return;
        }
        let pageBordersAttributes = {};
        if (options.pageBorders) {
            pageBordersAttributes = {
                display: options.pageBorders.display,
                offsetFrom: options.pageBorders.offsetFrom,
                zOrder: options.pageBorders.zOrder,
            };
        }
        this.root.push(new PageBordersAttributes(pageBordersAttributes));
        if (options.pageBorderTop) {
            this.root.push(new PageBorder("w:top", options.pageBorderTop));
        }
        if (options.pageBorderRight) {
            this.root.push(new PageBorder("w:right", options.pageBorderRight));
        }
        if (options.pageBorderBottom) {
            this.root.push(new PageBorder("w:bottom", options.pageBorderBottom));
        }
        if (options.pageBorderLeft) {
            this.root.push(new PageBorder("w:left", options.pageBorderLeft));
        }
    }
}
exports.PageBorders = PageBorders;
//# sourceMappingURL=page-borders.js.map
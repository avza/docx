"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBorders = void 0;
const styles_1 = require("file/styles");
const xml_components_1 = require("file/xml-components");
class TableBorders extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:tblBorders");
        if (options.top) {
            this.root.push(new TableBordersElement("w:top", options.top.style, options.top.size, 0, options.top.color));
        }
        else {
            this.root.push(new TableBordersElement("w:top", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
        if (options.left) {
            this.root.push(new TableBordersElement("w:left", options.left.style, options.left.size, 0, options.left.color));
        }
        else {
            this.root.push(new TableBordersElement("w:left", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
        if (options.bottom) {
            this.root.push(new TableBordersElement("w:bottom", options.bottom.style, options.bottom.size, 0, options.bottom.color));
        }
        else {
            this.root.push(new TableBordersElement("w:bottom", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
        if (options.right) {
            this.root.push(new TableBordersElement("w:right", options.right.style, options.right.size, 0, options.right.color));
        }
        else {
            this.root.push(new TableBordersElement("w:right", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
        if (options.insideHorizontal) {
            this.root.push(new TableBordersElement("w:insideH", options.insideHorizontal.style, options.insideHorizontal.size, 0, options.insideHorizontal.color));
        }
        else {
            this.root.push(new TableBordersElement("w:insideH", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
        if (options.insideVertical) {
            this.root.push(new TableBordersElement("w:insideV", options.insideVertical.style, options.insideVertical.size, 0, options.insideVertical.color));
        }
        else {
            this.root.push(new TableBordersElement("w:insideV", styles_1.BorderStyle.SINGLE, 4, 0, "auto"));
        }
    }
}
exports.TableBorders = TableBorders;
TableBorders.NONE = {
    top: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
    bottom: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
    left: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
    right: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
    insideHorizontal: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
    insideVertical: {
        style: styles_1.BorderStyle.NONE,
        size: 0,
        color: "auto",
    },
};
class TableBordersElement extends xml_components_1.XmlComponent {
    constructor(elementName, value, size, space, color) {
        super(elementName);
        this.root.push(new TableBordersAttributes({
            value,
            size,
            space,
            color,
        }));
    }
}
class TableBordersAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            value: "w:val",
            size: "w:sz",
            space: "w:space",
            color: "w:color",
        };
    }
}
//# sourceMappingURL=table-borders.js.map
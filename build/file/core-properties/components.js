"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modified = exports.Created = exports.DateComponent = exports.Revision = exports.LastModifiedBy = exports.Description = exports.Keywords = exports.Creator = exports.Subject = exports.Title = void 0;
const xml_components_1 = require("file/xml-components");
const document_attributes_1 = require("../document/document-attributes");
class Title extends xml_components_1.XmlComponent {
    constructor(value) {
        super("dc:title");
        this.root.push(value);
    }
}
exports.Title = Title;
class Subject extends xml_components_1.XmlComponent {
    constructor(value) {
        super("dc:subject");
        this.root.push(value);
    }
}
exports.Subject = Subject;
class Creator extends xml_components_1.XmlComponent {
    constructor(value) {
        super("dc:creator");
        this.root.push(value);
    }
}
exports.Creator = Creator;
class Keywords extends xml_components_1.XmlComponent {
    constructor(value) {
        super("cp:keywords");
        this.root.push(value);
    }
}
exports.Keywords = Keywords;
class Description extends xml_components_1.XmlComponent {
    constructor(value) {
        super("dc:description");
        this.root.push(value);
    }
}
exports.Description = Description;
class LastModifiedBy extends xml_components_1.XmlComponent {
    constructor(value) {
        super("cp:lastModifiedBy");
        this.root.push(value);
    }
}
exports.LastModifiedBy = LastModifiedBy;
class Revision extends xml_components_1.XmlComponent {
    constructor(value) {
        super("cp:revision");
        this.root.push(value);
    }
}
exports.Revision = Revision;
class DateComponent extends xml_components_1.XmlComponent {
    getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        return year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "Z";
    }
}
exports.DateComponent = DateComponent;
class Created extends DateComponent {
    constructor() {
        super("dcterms:created");
        this.root.push(new document_attributes_1.DocumentAttributes({
            type: "dcterms:W3CDTF",
        }));
        this.root.push(this.getCurrentDate());
    }
}
exports.Created = Created;
class Modified extends DateComponent {
    constructor() {
        super("dcterms:modified");
        this.root.push(new document_attributes_1.DocumentAttributes({
            type: "dcterms:W3CDTF",
        }));
        this.root.push(this.getCurrentDate());
    }
}
exports.Modified = Modified;
//# sourceMappingURL=components.js.map
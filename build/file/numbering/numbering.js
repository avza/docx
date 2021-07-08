"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbering = void 0;
const convenience_functions_1 = require("convenience-functions");
const paragraph_1 = require("file/paragraph");
const xml_components_1 = require("file/xml-components");
const document_attributes_1 = require("../document/document-attributes");
const abstract_numbering_1 = require("./abstract-numbering");
const level_1 = require("./level");
const num_1 = require("./num");
class Numbering extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:numbering");
        this.abstractNumbering = [];
        this.concreteNumbering = [];
        this.root.push(new document_attributes_1.DocumentAttributes({
            wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
            mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            o: "urn:schemas-microsoft-com:office:office",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
            v: "urn:schemas-microsoft-com:vml",
            wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
            wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            w10: "urn:schemas-microsoft-com:office:word",
            w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            w14: "http://schemas.microsoft.com/office/word/2010/wordml",
            w15: "http://schemas.microsoft.com/office/word/2012/wordml",
            wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
            wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
            wne: "http://schemas.microsoft.com/office/word/2006/wordml",
            wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
            Ignorable: "w14 w15 wp14",
        }));
        this.nextId = 0;
        const abstractNumbering = this.createAbstractNumbering([
            {
                level: 0,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: convenience_functions_1.convertInchesToTwip(0.5), hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 1,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CB",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: convenience_functions_1.convertInchesToTwip(1), hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 2,
                format: level_1.LevelFormat.BULLET,
                text: "\u25A0",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 2160, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 3,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 2880, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 4,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CB",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 3600, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 5,
                format: level_1.LevelFormat.BULLET,
                text: "\u25A0",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 4320, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 6,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 5040, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 7,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 5760, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
            {
                level: 8,
                format: level_1.LevelFormat.BULLET,
                text: "\u25CF",
                alignment: paragraph_1.AlignmentType.LEFT,
                style: {
                    paragraph: {
                        indent: { left: 6480, hanging: convenience_functions_1.convertInchesToTwip(0.25) },
                    },
                },
            },
        ]);
        this.createConcreteNumbering(abstractNumbering);
        for (const con of options.config) {
            const currentAbstractNumbering = this.createAbstractNumbering(con.levels);
            this.createConcreteNumbering(currentAbstractNumbering, con.reference);
        }
    }
    prepForXml() {
        this.abstractNumbering.forEach((x) => this.root.push(x));
        this.concreteNumbering.forEach((x) => this.root.push(x));
        return super.prepForXml();
    }
    createConcreteNumbering(abstractNumbering, reference) {
        const num = new num_1.ConcreteNumbering(this.nextId++, abstractNumbering.id, reference);
        this.concreteNumbering.push(num);
        return num;
    }
    createAbstractNumbering(options) {
        const num = new abstract_numbering_1.AbstractNumbering(this.nextId++, options);
        this.abstractNumbering.push(num);
        return num;
    }
    get ConcreteNumbering() {
        return this.concreteNumbering;
    }
}
exports.Numbering = Numbering;
//# sourceMappingURL=numbering.js.map
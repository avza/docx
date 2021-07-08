"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const JSZip = require("jszip");
const xml = require("xml");
const formatter_1 = require("../formatter");
const image_replacer_1 = require("./image-replacer");
const numbering_replacer_1 = require("./numbering-replacer");
class Compiler {
    constructor() {
        this.formatter = new formatter_1.Formatter();
        this.imageReplacer = new image_replacer_1.ImageReplacer();
        this.numberingReplacer = new numbering_replacer_1.NumberingReplacer();
    }
    compile(file, prettifyXml) {
        const zip = new JSZip();
        const xmlifiedFileMapping = this.xmlifyFile(file, prettifyXml);
        for (const key in xmlifiedFileMapping) {
            if (!xmlifiedFileMapping[key]) {
                continue;
            }
            const obj = xmlifiedFileMapping[key];
            if (Array.isArray(obj)) {
                for (const subFile of obj) {
                    zip.file(subFile.path, subFile.data);
                }
            }
            else {
                zip.file(obj.path, obj.data);
            }
        }
        for (const data of file.Media.Array) {
            const mediaData = data.stream;
            zip.file(`word/media/${data.fileName}`, mediaData);
        }
        return zip;
    }
    xmlifyFile(file, prettify) {
        file.verifyUpdateFields();
        const documentRelationshipCount = file.Document.Relationships.RelationshipCount + 1;
        const documentXmlData = xml(this.formatter.format(file.Document.View, file.Document), prettify);
        const documentMediaDatas = this.imageReplacer.getMediaData(documentXmlData, file.Media);
        return {
            Relationships: {
                data: (() => {
                    documentMediaDatas.forEach((mediaData, i) => {
                        file.Document.Relationships.createRelationship(documentRelationshipCount + i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${mediaData.fileName}`);
                    });
                    return xml(this.formatter.format(file.Document.Relationships, file.Document), prettify);
                })(),
                path: "word/_rels/document.xml.rels",
            },
            Document: {
                data: (() => {
                    const xmlData = this.imageReplacer.replace(documentXmlData, documentMediaDatas, documentRelationshipCount);
                    const referenedXmlData = this.numberingReplacer.replace(xmlData, file.Numbering.ConcreteNumbering);
                    return referenedXmlData;
                })(),
                path: "word/document.xml",
            },
            Styles: {
                data: xml(this.formatter.format(file.Styles, file.Document), prettify),
                path: "word/styles.xml",
            },
            Properties: {
                data: xml(this.formatter.format(file.CoreProperties, file.Document), {
                    declaration: {
                        standalone: "yes",
                        encoding: "UTF-8",
                    },
                }),
                path: "docProps/core.xml",
            },
            Numbering: {
                data: xml(this.formatter.format(file.Numbering, file.Document), prettify),
                path: "word/numbering.xml",
            },
            FileRelationships: {
                data: xml(this.formatter.format(file.FileRelationships, file.Document), prettify),
                path: "_rels/.rels",
            },
            HeaderRelationships: file.Headers.map((headerWrapper, index) => {
                const xmlData = xml(this.formatter.format(headerWrapper.View, headerWrapper), prettify);
                const mediaDatas = this.imageReplacer.getMediaData(xmlData, file.Media);
                mediaDatas.forEach((mediaData, i) => {
                    headerWrapper.Relationships.createRelationship(i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${mediaData.fileName}`);
                });
                return {
                    data: xml(this.formatter.format(headerWrapper.Relationships, headerWrapper), prettify),
                    path: `word/_rels/header${index + 1}.xml.rels`,
                };
            }),
            FooterRelationships: file.Footers.map((footerWrapper, index) => {
                const xmlData = xml(this.formatter.format(footerWrapper.View, footerWrapper), prettify);
                const mediaDatas = this.imageReplacer.getMediaData(xmlData, file.Media);
                mediaDatas.forEach((mediaData, i) => {
                    footerWrapper.Relationships.createRelationship(i, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${mediaData.fileName}`);
                });
                return {
                    data: xml(this.formatter.format(footerWrapper.Relationships, footerWrapper), prettify),
                    path: `word/_rels/footer${index + 1}.xml.rels`,
                };
            }),
            Headers: file.Headers.map((headerWrapper, index) => {
                const tempXmlData = xml(this.formatter.format(headerWrapper.View, headerWrapper), prettify);
                const mediaDatas = this.imageReplacer.getMediaData(tempXmlData, file.Media);
                const xmlData = this.imageReplacer.replace(tempXmlData, mediaDatas, 0);
                return {
                    data: xmlData,
                    path: `word/header${index + 1}.xml`,
                };
            }),
            Footers: file.Footers.map((footerWrapper, index) => {
                const tempXmlData = xml(this.formatter.format(footerWrapper.View, footerWrapper), prettify);
                const mediaDatas = this.imageReplacer.getMediaData(tempXmlData, file.Media);
                const xmlData = this.imageReplacer.replace(tempXmlData, mediaDatas, 0);
                return {
                    data: xmlData,
                    path: `word/footer${index + 1}.xml`,
                };
            }),
            ContentTypes: {
                data: xml(this.formatter.format(file.ContentTypes, file.Document), prettify),
                path: "[Content_Types].xml",
            },
            CustomProperties: {
                data: xml(this.formatter.format(file.CustomProperties, file.Document), prettify),
                path: "docProps/custom.xml",
            },
            AppProperties: {
                data: xml(this.formatter.format(file.AppProperties, file.Document), prettify),
                path: "docProps/app.xml",
            },
            FootNotes: {
                data: xml(this.formatter.format(file.FootNotes.View, file.FootNotes), prettify),
                path: "word/footnotes.xml",
            },
            FootNotesRelationships: {
                data: xml(this.formatter.format(file.FootNotes.Relationships, file.FootNotes), prettify),
                path: "word/_rels/footnotes.xml.rels",
            },
            Settings: {
                data: xml(this.formatter.format(file.Settings, file.Document), prettify),
                path: "word/settings.xml",
            },
        };
    }
}
exports.Compiler = Compiler;
//# sourceMappingURL=next-compiler.js.map
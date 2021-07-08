"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultStylesFactory = void 0;
const document_attributes_1 = require("../document/document-attributes");
const defaults_1 = require("./defaults");
const style_1 = require("./style");
class DefaultStylesFactory {
    newInstance(options = {}) {
        const documentAttributes = new document_attributes_1.DocumentAttributes({
            mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            w14: "http://schemas.microsoft.com/office/word/2010/wordml",
            w15: "http://schemas.microsoft.com/office/word/2012/wordml",
            Ignorable: "w14 w15",
        });
        return {
            initialStyles: documentAttributes,
            importedStyles: [
                new defaults_1.DocumentDefaults(options.document),
                new style_1.TitleStyle(Object.assign({ run: {
                        size: 56,
                    } }, options.title)),
                new style_1.Heading1Style(Object.assign({ run: {
                        color: "2E74B5",
                        size: 32,
                    } }, options.heading1)),
                new style_1.Heading2Style(Object.assign({ run: {
                        color: "2E74B5",
                        size: 26,
                    } }, options.heading2)),
                new style_1.Heading3Style(Object.assign({ run: {
                        color: "1F4D78",
                        size: 24,
                    } }, options.heading3)),
                new style_1.Heading4Style(Object.assign({ run: {
                        color: "2E74B5",
                        italics: true,
                    } }, options.heading4)),
                new style_1.Heading5Style(Object.assign({ run: {
                        color: "2E74B5",
                    } }, options.heading5)),
                new style_1.Heading6Style(Object.assign({ run: {
                        color: "1F4D78",
                    } }, options.heading6)),
                new style_1.StrongStyle(Object.assign({ run: {
                        bold: true,
                    } }, options.strong)),
                new style_1.ListParagraph(options.listParagraph || {}),
                new style_1.HyperlinkStyle(options.hyperlink || {}),
                new style_1.FootnoteReferenceStyle(options.footnoteReference || {}),
                new style_1.FootnoteText(options.footnoteText || {}),
                new style_1.FootnoteTextChar(options.footnoteTextChar || {}),
            ],
        };
    }
}
exports.DefaultStylesFactory = DefaultStylesFactory;
//# sourceMappingURL=factory.js.map
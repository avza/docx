"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperlinkStyle = exports.FootnoteTextChar = exports.FootnoteReferenceStyle = exports.FootnoteText = exports.ListParagraph = exports.StrongStyle = exports.Heading6Style = exports.Heading5Style = exports.Heading4Style = exports.Heading3Style = exports.Heading2Style = exports.Heading1Style = exports.TitleStyle = exports.HeadingStyle = void 0;
const underline_1 = require("file/paragraph/run/underline");
const character_style_1 = require("./character-style");
const paragraph_style_1 = require("./paragraph-style");
class HeadingStyle extends paragraph_style_1.StyleForParagraph {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { basedOn: "Normal", next: "Normal", quickFormat: true }));
    }
}
exports.HeadingStyle = HeadingStyle;
class TitleStyle extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Title", name: "Title" }));
    }
}
exports.TitleStyle = TitleStyle;
class Heading1Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading1", name: "Heading 1" }));
    }
}
exports.Heading1Style = Heading1Style;
class Heading2Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading2", name: "Heading 2" }));
    }
}
exports.Heading2Style = Heading2Style;
class Heading3Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading3", name: "Heading 3" }));
    }
}
exports.Heading3Style = Heading3Style;
class Heading4Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading4", name: "Heading 4" }));
    }
}
exports.Heading4Style = Heading4Style;
class Heading5Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading5", name: "Heading 5" }));
    }
}
exports.Heading5Style = Heading5Style;
class Heading6Style extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Heading6", name: "Heading 6" }));
    }
}
exports.Heading6Style = Heading6Style;
class StrongStyle extends HeadingStyle {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Strong", name: "Strong" }));
    }
}
exports.StrongStyle = StrongStyle;
class ListParagraph extends paragraph_style_1.StyleForParagraph {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "ListParagraph", name: "List Paragraph", basedOn: "Normal", quickFormat: true }));
    }
}
exports.ListParagraph = ListParagraph;
class FootnoteText extends paragraph_style_1.StyleForParagraph {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "FootnoteText", name: "footnote text", link: "FootnoteTextChar", basedOn: "Normal", uiPriority: 99, semiHidden: true, unhideWhenUsed: true, paragraph: {
                spacing: {
                    after: 0,
                    line: 240,
                    lineRule: "auto",
                },
            }, run: {
                size: 20,
            } }));
    }
}
exports.FootnoteText = FootnoteText;
class FootnoteReferenceStyle extends character_style_1.StyleForCharacter {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "FootnoteReference", name: "footnote reference", basedOn: "DefaultParagraphFont", semiHidden: true, run: {
                superScript: true,
            } }));
    }
}
exports.FootnoteReferenceStyle = FootnoteReferenceStyle;
class FootnoteTextChar extends character_style_1.StyleForCharacter {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "FootnoteTextChar", name: "Footnote Text Char", basedOn: "DefaultParagraphFont", link: "FootnoteText", semiHidden: true, run: {
                size: 20,
            } }));
    }
}
exports.FootnoteTextChar = FootnoteTextChar;
class HyperlinkStyle extends character_style_1.StyleForCharacter {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont", run: {
                color: "0563C1",
                underline: {
                    type: underline_1.UnderlineType.SINGLE,
                },
            } }));
    }
}
exports.HyperlinkStyle = HyperlinkStyle;
//# sourceMappingURL=default-styles.js.map
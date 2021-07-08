"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleForParagraph = void 0;
const paragraph_1 = require("file/paragraph");
const properties_1 = require("file/paragraph/run/properties");
const components_1 = require("./components");
const style_1 = require("./style");
class StyleForParagraph extends style_1.Style {
    constructor(options) {
        super({ type: "paragraph", styleId: options.id }, options.name);
        this.paragraphProperties = new paragraph_1.ParagraphProperties(options.paragraph);
        this.runProperties = new properties_1.RunProperties(options.run);
        this.root.push(this.paragraphProperties);
        this.root.push(this.runProperties);
        if (options.basedOn) {
            this.root.push(new components_1.BasedOn(options.basedOn));
        }
        if (options.next) {
            this.root.push(new components_1.Next(options.next));
        }
        if (options.quickFormat) {
            this.root.push(new components_1.QuickFormat());
        }
        if (options.link) {
            this.root.push(new components_1.Link(options.link));
        }
        if (options.semiHidden) {
            this.root.push(new components_1.SemiHidden());
        }
        if (options.uiPriority) {
            this.root.push(new components_1.UiPriority(options.uiPriority));
        }
        if (options.unhideWhenUsed) {
            this.root.push(new components_1.UnhideWhenUsed());
        }
    }
}
exports.StyleForParagraph = StyleForParagraph;
//# sourceMappingURL=paragraph-style.js.map
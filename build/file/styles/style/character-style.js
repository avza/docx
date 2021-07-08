"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleForCharacter = void 0;
const properties_1 = require("file/paragraph/run/properties");
const components_1 = require("./components");
const style_1 = require("./style");
class StyleForCharacter extends style_1.Style {
    constructor(options) {
        super({ type: "character", styleId: options.id }, options.name);
        this.runProperties = new properties_1.RunProperties(options.run);
        this.root.push(this.runProperties);
        this.root.push(new components_1.UiPriority(99));
        this.root.push(new components_1.UnhideWhenUsed());
        if (options.basedOn) {
            this.root.push(new components_1.BasedOn(options.basedOn));
        }
        if (options.link) {
            this.root.push(new components_1.Link(options.link));
        }
        if (options.semiHidden) {
            this.root.push(new components_1.SemiHidden());
        }
    }
}
exports.StyleForCharacter = StyleForCharacter;
//# sourceMappingURL=character-style.js.map
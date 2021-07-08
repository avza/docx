"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalPosition = void 0;
const xml_components_1 = require("file/xml-components");
const align_1 = require("./align");
const floating_position_1 = require("./floating-position");
const position_offset_1 = require("./position-offset");
class VerticalPositionAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            relativeFrom: "relativeFrom",
        };
    }
}
class VerticalPosition extends xml_components_1.XmlComponent {
    constructor(verticalPosition) {
        super("wp:positionV");
        this.root.push(new VerticalPositionAttributes({
            relativeFrom: verticalPosition.relative || floating_position_1.VerticalPositionRelativeFrom.PAGE,
        }));
        if (verticalPosition.align) {
            this.root.push(new align_1.Align(verticalPosition.align));
        }
        else if (verticalPosition.offset !== undefined) {
            this.root.push(new position_offset_1.PositionOffset(verticalPosition.offset));
        }
        else {
            throw new Error("There is no configuration provided for floating position (Align or offset)");
        }
    }
}
exports.VerticalPosition = VerticalPosition;
//# sourceMappingURL=vertical-position.js.map
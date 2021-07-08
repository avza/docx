"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalPosition = void 0;
const xml_components_1 = require("file/xml-components");
const align_1 = require("./align");
const floating_position_1 = require("./floating-position");
const position_offset_1 = require("./position-offset");
class HorizontalPositionAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            relativeFrom: "relativeFrom",
        };
    }
}
class HorizontalPosition extends xml_components_1.XmlComponent {
    constructor(horizontalPosition) {
        super("wp:positionH");
        this.root.push(new HorizontalPositionAttributes({
            relativeFrom: horizontalPosition.relative || floating_position_1.HorizontalPositionRelativeFrom.PAGE,
        }));
        if (horizontalPosition.align) {
            this.root.push(new align_1.Align(horizontalPosition.align));
        }
        else if (horizontalPosition.offset !== undefined) {
            this.root.push(new position_offset_1.PositionOffset(horizontalPosition.offset));
        }
        else {
            throw new Error("There is no configuration provided for floating position (Align or offset)");
        }
    }
}
exports.HorizontalPosition = HorizontalPosition;
//# sourceMappingURL=horizontal-position.js.map
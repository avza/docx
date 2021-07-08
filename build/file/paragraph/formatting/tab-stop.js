"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabStopItem = exports.TabAttributes = exports.TabStopPosition = exports.LeaderType = exports.TabStopType = exports.TabStop = void 0;
const xml_components_1 = require("file/xml-components");
class TabStop extends xml_components_1.XmlComponent {
    constructor(type, position, leader) {
        super("w:tabs");
        this.root.push(new TabStopItem(type, position, leader));
    }
}
exports.TabStop = TabStop;
var TabStopType;
(function (TabStopType) {
    TabStopType["LEFT"] = "left";
    TabStopType["RIGHT"] = "right";
    TabStopType["CENTER"] = "center";
    TabStopType["BAR"] = "bar";
    TabStopType["CLEAR"] = "clear";
    TabStopType["DECIMAL"] = "decimal";
    TabStopType["END"] = "end";
    TabStopType["NUM"] = "num";
    TabStopType["START"] = "start";
})(TabStopType = exports.TabStopType || (exports.TabStopType = {}));
var LeaderType;
(function (LeaderType) {
    LeaderType["DOT"] = "dot";
    LeaderType["HYPHEN"] = "hyphen";
    LeaderType["MIDDLE_DOT"] = "middleDot";
    LeaderType["NONE"] = "none";
    LeaderType["UNDERSCORE"] = "underscore";
})(LeaderType = exports.LeaderType || (exports.LeaderType = {}));
var TabStopPosition;
(function (TabStopPosition) {
    TabStopPosition[TabStopPosition["MAX"] = 9026] = "MAX";
})(TabStopPosition = exports.TabStopPosition || (exports.TabStopPosition = {}));
class TabAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = { val: "w:val", pos: "w:pos", leader: "w:leader" };
    }
}
exports.TabAttributes = TabAttributes;
class TabStopItem extends xml_components_1.XmlComponent {
    constructor(value, position, leader) {
        super("w:tab");
        this.root.push(new TabAttributes({
            val: value,
            pos: position,
            leader,
        }));
    }
}
exports.TabStopItem = TabStopItem;
//# sourceMappingURL=tab-stop.js.map
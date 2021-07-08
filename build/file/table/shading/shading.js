"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadingType = exports.TableShading = void 0;
const xml_components_1 = require("file/xml-components");
class TableShadingAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            fill: "w:fill",
            color: "w:color",
            val: "w:val",
        };
    }
}
class TableShading extends xml_components_1.XmlComponent {
    constructor(attrs) {
        super("w:shd");
        this.root.push(new TableShadingAttributes(attrs));
    }
}
exports.TableShading = TableShading;
var ShadingType;
(function (ShadingType) {
    ShadingType["CLEAR"] = "clear";
    ShadingType["DIAGONAL_CROSS"] = "diagCross";
    ShadingType["DIAGONAL_STRIPE"] = "diagStripe";
    ShadingType["HORIZONTAL_CROSS"] = "horzCross";
    ShadingType["HORIZONTAL_STRIPE"] = "horzStripe";
    ShadingType["NIL"] = "nil";
    ShadingType["PERCENT_5"] = "pct5";
    ShadingType["PERCENT_10"] = "pct10";
    ShadingType["PERCENT_12"] = "pct12";
    ShadingType["PERCENT_15"] = "pct15";
    ShadingType["PERCENT_20"] = "pct20";
    ShadingType["PERCENT_25"] = "pct25";
    ShadingType["PERCENT_30"] = "pct30";
    ShadingType["PERCENT_35"] = "pct35";
    ShadingType["PERCENT_37"] = "pct37";
    ShadingType["PERCENT_40"] = "pct40";
    ShadingType["PERCENT_45"] = "pct45";
    ShadingType["PERCENT_50"] = "pct50";
    ShadingType["PERCENT_55"] = "pct55";
    ShadingType["PERCENT_60"] = "pct60";
    ShadingType["PERCENT_62"] = "pct62";
    ShadingType["PERCENT_65"] = "pct65";
    ShadingType["PERCENT_70"] = "pct70";
    ShadingType["PERCENT_75"] = "pct75";
    ShadingType["PERCENT_80"] = "pct80";
    ShadingType["PERCENT_85"] = "pct85";
    ShadingType["PERCENT_87"] = "pct87";
    ShadingType["PERCENT_90"] = "pct90";
    ShadingType["PERCENT_95"] = "pct95";
    ShadingType["REVERSE_DIAGONAL_STRIPE"] = "reverseDiagStripe";
    ShadingType["SOLID"] = "solid";
    ShadingType["THIN_DIAGONAL_CROSS"] = "thinDiagCross";
    ShadingType["THIN_DIAGONAL_STRIPE"] = "thinDiagStripe";
    ShadingType["THIN_HORIZONTAL_CROSS"] = "thinHorzCross";
    ShadingType["THIN_REVERSE_DIAGONAL_STRIPE"] = "thinReverseDiagStripe";
    ShadingType["THIN_VERTICAL_STRIPE"] = "thinVertStripe";
    ShadingType["VERTICAL_STRIPE"] = "vertStripe";
})(ShadingType = exports.ShadingType || (exports.ShadingType = {}));
//# sourceMappingURL=shading.js.map
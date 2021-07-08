"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relationship = exports.TargetModeType = void 0;
const xml_components_1 = require("file/xml-components");
const relationship_attributes_1 = require("./relationship-attributes");
var TargetModeType;
(function (TargetModeType) {
    TargetModeType["EXTERNAL"] = "External";
})(TargetModeType = exports.TargetModeType || (exports.TargetModeType = {}));
class Relationship extends xml_components_1.XmlComponent {
    constructor(id, type, target, targetMode) {
        super("Relationship");
        this.root.push(new relationship_attributes_1.RelationshipAttributes({
            id,
            type,
            target,
            targetMode,
        }));
    }
}
exports.Relationship = Relationship;
//# sourceMappingURL=relationship.js.map
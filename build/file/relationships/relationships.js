"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relationships = void 0;
const xml_components_1 = require("file/xml-components");
const attributes_1 = require("./attributes");
const relationship_1 = require("./relationship/relationship");
class Relationships extends xml_components_1.XmlComponent {
    constructor() {
        super("Relationships");
        this.root.push(new attributes_1.RelationshipsAttributes({
            xmlns: "http://schemas.openxmlformats.org/package/2006/relationships",
        }));
    }
    addRelationship(relationship) {
        this.root.push(relationship);
    }
    createRelationship(id, type, target, targetMode) {
        const relationship = new relationship_1.Relationship(`rId${id}`, type, target, targetMode);
        this.addRelationship(relationship);
        return relationship;
    }
    get RelationshipCount() {
        return this.root.length - 1;
    }
}
exports.Relationships = Relationships;
//# sourceMappingURL=relationships.js.map
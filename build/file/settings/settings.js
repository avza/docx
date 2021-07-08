"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.SettingsAttributes = void 0;
const xml_components_1 = require("file/xml-components");
const compatibility_1 = require("./compatibility");
const display_background_shape_1 = require("./display-background-shape");
const track_revisions_1 = require("./track-revisions");
const update_fields_1 = require("./update-fields");
class SettingsAttributes extends xml_components_1.XmlAttributeComponent {
    constructor() {
        super(...arguments);
        this.xmlKeys = {
            wpc: "xmlns:wpc",
            mc: "xmlns:mc",
            o: "xmlns:o",
            r: "xmlns:r",
            m: "xmlns:m",
            v: "xmlns:v",
            wp14: "xmlns:wp14",
            wp: "xmlns:wp",
            w10: "xmlns:w10",
            w: "xmlns:w",
            w14: "xmlns:w14",
            w15: "xmlns:w15",
            wpg: "xmlns:wpg",
            wpi: "xmlns:wpi",
            wne: "xmlns:wne",
            wps: "xmlns:wps",
            Ignorable: "mc:Ignorable",
        };
    }
}
exports.SettingsAttributes = SettingsAttributes;
class Settings extends xml_components_1.XmlComponent {
    constructor(options) {
        super("w:settings");
        this.root.push(new SettingsAttributes({
            wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas",
            mc: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            o: "urn:schemas-microsoft-com:office:office",
            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            m: "http://schemas.openxmlformats.org/officeDocument/2006/math",
            v: "urn:schemas-microsoft-com:vml",
            wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing",
            wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
            w10: "urn:schemas-microsoft-com:office:word",
            w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            w14: "http://schemas.microsoft.com/office/word/2010/wordml",
            w15: "http://schemas.microsoft.com/office/word/2012/wordml",
            wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup",
            wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk",
            wne: "http://schemas.microsoft.com/office/word/2006/wordml",
            wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
            Ignorable: "w14 w15 wp14",
        }));
        this.compatibility = new compatibility_1.Compatibility({
            version: options.compatabilityModeVersion || 15,
        });
        this.root.push(this.compatibility);
        this.trackRevisions = new track_revisions_1.TrackRevisions();
        this.root.push(new display_background_shape_1.DisplayBackgroundShape());
    }
    addUpdateFields() {
        if (!this.root.find((child) => child instanceof update_fields_1.UpdateFields)) {
            this.addChildElement(new update_fields_1.UpdateFields());
        }
    }
    addTrackRevisions() {
        if (!this.root.find((child) => child instanceof track_revisions_1.TrackRevisions)) {
            this.addChildElement(this.trackRevisions);
        }
        return this.trackRevisions;
    }
}
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map
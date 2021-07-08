"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const app_properties_1 = require("./app-properties/app-properties");
const content_types_1 = require("./content-types/content-types");
const core_properties_1 = require("./core-properties");
const custom_properties_1 = require("./custom-properties");
const document_wrapper_1 = require("./document-wrapper");
const section_properties_1 = require("./document/body/section-properties");
const footer_wrapper_1 = require("./footer-wrapper");
const footnotes_wrapper_1 = require("./footnotes-wrapper");
const header_1 = require("./header");
const header_wrapper_1 = require("./header-wrapper");
const media_1 = require("./media");
const numbering_1 = require("./numbering");
const relationships_1 = require("./relationships");
const settings_1 = require("./settings");
const styles_1 = require("./styles");
const external_styles_factory_1 = require("./styles/external-styles-factory");
const factory_1 = require("./styles/factory");
class File {
    constructor(options = {
        creator: "Un-named",
        revision: "1",
        lastModifiedBy: "Un-named",
    }, fileProperties = {}, sections = [], customProperties = []) {
        this.currentRelationshipId = 1;
        this.headers = [];
        this.footers = [];
        this.coreProperties = new core_properties_1.CoreProperties(options);
        this.numbering = new numbering_1.Numbering(options.numbering
            ? options.numbering
            : {
                config: [],
            });
        this.fileRelationships = new relationships_1.Relationships();
        this.customProperties = new custom_properties_1.CustomProperties(customProperties);
        this.appProperties = new app_properties_1.AppProperties();
        this.footnotesWrapper = new footnotes_wrapper_1.FootnotesWrapper();
        this.contentTypes = new content_types_1.ContentTypes();
        this.documentWrapper = new document_wrapper_1.DocumentWrapper({ background: options.background || {} });
        this.settings = new settings_1.Settings({
            compatabilityModeVersion: options.compatabilityModeVersion,
        });
        this.media = fileProperties.template && fileProperties.template.media ? fileProperties.template.media : new media_1.Media();
        if (fileProperties.template) {
            this.currentRelationshipId = fileProperties.template.currentRelationshipId + 1;
        }
        if (fileProperties.template && options.externalStyles) {
            throw Error("can not use both template and external styles");
        }
        if (fileProperties.template) {
            const stylesFactory = new external_styles_factory_1.ExternalStylesFactory();
            this.styles = stylesFactory.newInstance(fileProperties.template.styles);
        }
        else if (options.externalStyles) {
            const stylesFactory = new external_styles_factory_1.ExternalStylesFactory();
            this.styles = stylesFactory.newInstance(options.externalStyles);
        }
        else if (options.styles) {
            const stylesFactory = new factory_1.DefaultStylesFactory();
            const defaultStyles = stylesFactory.newInstance(options.styles.default);
            this.styles = new styles_1.Styles(Object.assign(Object.assign({}, defaultStyles), options.styles));
        }
        else {
            const stylesFactory = new factory_1.DefaultStylesFactory();
            this.styles = new styles_1.Styles(stylesFactory.newInstance());
        }
        this.addDefaultRelationships();
        if (fileProperties.template && fileProperties.template.headers) {
            for (const templateHeader of fileProperties.template.headers) {
                this.addHeaderToDocument(templateHeader.header, templateHeader.type);
            }
        }
        if (fileProperties.template && fileProperties.template.footers) {
            for (const templateFooter of fileProperties.template.footers) {
                this.addFooterToDocument(templateFooter.footer, templateFooter.type);
            }
        }
        for (const section of sections) {
            this.documentWrapper.View.Body.addSection(section.properties ? section.properties : {});
            for (const child of section.children) {
                this.documentWrapper.View.add(child);
            }
        }
        if (options.footnotes) {
            for (const paragraph of options.footnotes) {
                this.footnotesWrapper.View.createFootNote(paragraph);
            }
        }
        if (options.features) {
            if (options.features.trackRevisions) {
                this.settings.addTrackRevisions();
            }
        }
    }
    addSection({ headers = { default: new header_1.Header() }, footers = { default: new header_1.Header() }, margins = {}, size = {}, properties, children, }) {
        this.documentWrapper.View.Body.addSection(Object.assign(Object.assign(Object.assign(Object.assign({}, properties), { headers: {
                default: headers.default ? this.createHeader(headers.default) : this.createHeader(new header_1.Header()),
                first: headers.first ? this.createHeader(headers.first) : undefined,
                even: headers.even ? this.createHeader(headers.even) : undefined,
            }, footers: {
                default: footers.default ? this.createFooter(footers.default) : this.createFooter(new header_1.Footer()),
                first: footers.first ? this.createFooter(footers.first) : undefined,
                even: footers.even ? this.createFooter(footers.even) : undefined,
            } }), margins), size));
        for (const child of children) {
            this.documentWrapper.View.add(child);
        }
    }
    verifyUpdateFields() {
        if (this.documentWrapper.View.getTablesOfContents().length) {
            this.settings.addUpdateFields();
        }
    }
    createHeader(header) {
        const wrapper = new header_wrapper_1.HeaderWrapper(this.media, this.currentRelationshipId++);
        for (const child of header.options.children) {
            wrapper.add(child);
        }
        this.addHeaderToDocument(wrapper);
        return wrapper;
    }
    createFooter(footer) {
        const wrapper = new footer_wrapper_1.FooterWrapper(this.media, this.currentRelationshipId++);
        for (const child of footer.options.children) {
            wrapper.add(child);
        }
        this.addFooterToDocument(wrapper);
        return wrapper;
    }
    addHeaderToDocument(header, type = section_properties_1.HeaderReferenceType.DEFAULT) {
        this.headers.push({ header, type });
        this.documentWrapper.Relationships.createRelationship(header.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", `header${this.headers.length}.xml`);
        this.contentTypes.addHeader(this.headers.length);
    }
    addFooterToDocument(footer, type = section_properties_1.FooterReferenceType.DEFAULT) {
        this.footers.push({ footer, type });
        this.documentWrapper.Relationships.createRelationship(footer.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", `footer${this.footers.length}.xml`);
        this.contentTypes.addFooter(this.footers.length);
    }
    addDefaultRelationships() {
        this.fileRelationships.createRelationship(1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", "word/document.xml");
        this.fileRelationships.createRelationship(2, "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", "docProps/core.xml");
        this.fileRelationships.createRelationship(3, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", "docProps/app.xml");
        this.fileRelationships.createRelationship(4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", "docProps/custom.xml");
        this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", "styles.xml");
        this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", "numbering.xml");
        this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", "footnotes.xml");
        this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", "settings.xml");
    }
    get Document() {
        return this.documentWrapper;
    }
    get Styles() {
        return this.styles;
    }
    get CoreProperties() {
        return this.coreProperties;
    }
    get Numbering() {
        return this.numbering;
    }
    get Media() {
        return this.media;
    }
    get FileRelationships() {
        return this.fileRelationships;
    }
    get Headers() {
        return this.headers.map((item) => item.header);
    }
    get Footers() {
        return this.footers.map((item) => item.footer);
    }
    get ContentTypes() {
        return this.contentTypes;
    }
    get CustomProperties() {
        return this.customProperties;
    }
    get AppProperties() {
        return this.appProperties;
    }
    get FootNotes() {
        return this.footnotesWrapper;
    }
    get Settings() {
        return this.settings;
    }
}
exports.File = File;
//# sourceMappingURL=file.js.map
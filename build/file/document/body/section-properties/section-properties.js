"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionProperties = void 0;
const convenience_functions_1 = require("convenience-functions");
const xml_components_1 = require("file/xml-components");
const columns_1 = require("./columns/columns");
const doc_grid_1 = require("./doc-grid/doc-grid");
const footer_reference_1 = require("./footer-reference");
const footer_reference_2 = require("./footer-reference/footer-reference");
const header_reference_1 = require("./header-reference");
const header_reference_2 = require("./header-reference/header-reference");
const line_number_1 = require("./line-number");
const page_border_1 = require("./page-border");
const page_margin_1 = require("./page-margin/page-margin");
const page_number_1 = require("./page-number");
const page_size_1 = require("./page-size/page-size");
const page_size_attributes_1 = require("./page-size/page-size-attributes");
const title_page_1 = require("./title-page/title-page");
const section_type_1 = require("./type/section-type");
const vertical_align_1 = require("./vertical-align");
class SectionProperties extends xml_components_1.XmlComponent {
    constructor(options = { column: {} }) {
        var _a;
        super("w:sectPr");
        const { width = 11906, height = 16838, top = convenience_functions_1.convertInchesToTwip(1), right = convenience_functions_1.convertInchesToTwip(1), bottom = convenience_functions_1.convertInchesToTwip(1), left = convenience_functions_1.convertInchesToTwip(1), header = 708, footer = 708, gutter = 0, mirror = false, column = {}, linePitch = 360, orientation = page_size_attributes_1.PageOrientation.PORTRAIT, headers, footers, pageNumberFormatType, pageNumberStart, lineNumberCountBy, lineNumberStart, lineNumberRestart, lineNumberDistance, pageBorders, pageBorderTop, pageBorderRight, pageBorderBottom, pageBorderLeft, titlePage = false, verticalAlign, type, } = options;
        this.options = options;
        this.root.push(new page_size_1.PageSize(width, height, orientation));
        this.root.push(new page_margin_1.PageMargin(top, right, bottom, left, header, footer, gutter, mirror));
        this.root.push(new columns_1.Columns(column.space ? column.space : 708, column.count ? column.count : 1, (_a = column.separate) !== null && _a !== void 0 ? _a : false));
        this.root.push(new doc_grid_1.DocumentGrid(linePitch));
        this.addHeaders(headers);
        this.addFooters(footers);
        if (pageNumberStart || pageNumberFormatType) {
            this.root.push(new page_number_1.PageNumberType(pageNumberStart, pageNumberFormatType));
        }
        if (lineNumberCountBy || lineNumberStart || lineNumberRestart || lineNumberDistance) {
            this.root.push(new line_number_1.LineNumberType(lineNumberCountBy, lineNumberStart, lineNumberRestart, lineNumberDistance));
        }
        if (pageBorders || pageBorderTop || pageBorderRight || pageBorderBottom || pageBorderLeft) {
            this.root.push(new page_border_1.PageBorders({
                pageBorders: pageBorders,
                pageBorderTop: pageBorderTop,
                pageBorderRight: pageBorderRight,
                pageBorderBottom: pageBorderBottom,
                pageBorderLeft: pageBorderLeft,
            }));
        }
        if (titlePage) {
            this.root.push(new title_page_1.TitlePage());
        }
        if (verticalAlign) {
            this.root.push(new vertical_align_1.SectionVerticalAlign(verticalAlign));
        }
        if (type) {
            this.root.push(new section_type_1.Type(type));
        }
    }
    addHeaders(headers) {
        if (headers) {
            if (headers.default) {
                this.root.push(new header_reference_2.HeaderReference({
                    headerType: header_reference_1.HeaderReferenceType.DEFAULT,
                    headerId: headers.default.View.ReferenceId,
                }));
            }
            if (headers.first) {
                this.root.push(new header_reference_2.HeaderReference({
                    headerType: header_reference_1.HeaderReferenceType.FIRST,
                    headerId: headers.first.View.ReferenceId,
                }));
            }
            if (headers.even) {
                this.root.push(new header_reference_2.HeaderReference({
                    headerType: header_reference_1.HeaderReferenceType.EVEN,
                    headerId: headers.even.View.ReferenceId,
                }));
            }
        }
    }
    addFooters(footers) {
        if (footers) {
            if (footers.default) {
                this.root.push(new footer_reference_2.FooterReference({
                    footerType: footer_reference_1.FooterReferenceType.DEFAULT,
                    footerId: footers.default.View.ReferenceId,
                }));
            }
            if (footers.first) {
                this.root.push(new footer_reference_2.FooterReference({
                    footerType: footer_reference_1.FooterReferenceType.FIRST,
                    footerId: footers.first.View.ReferenceId,
                }));
            }
            if (footers.even) {
                this.root.push(new footer_reference_2.FooterReference({
                    footerType: footer_reference_1.FooterReferenceType.EVEN,
                    footerId: footers.even.View.ReferenceId,
                }));
            }
        }
    }
    get Options() {
        return this.options;
    }
}
exports.SectionProperties = SectionProperties;
//# sourceMappingURL=section-properties.js.map
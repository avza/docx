"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const convenience_functions_1 = require("convenience-functions");
const formatter_1 = require("export/formatter");
const footer_wrapper_1 = require("file/footer-wrapper");
const header_wrapper_1 = require("file/header-wrapper");
const media_1 = require("file/media");
const page_border_1 = require("./page-border");
const page_number_1 = require("./page-number");
const section_properties_1 = require("./section-properties");
const section_type_attributes_1 = require("./type/section-type-attributes");
const vertical_align_1 = require("./vertical-align");
describe("SectionProperties", () => {
    describe("#constructor()", () => {
        it("should create section properties with options", () => {
            const media = new media_1.Media();
            const properties = new section_properties_1.SectionProperties({
                width: 11906,
                height: 16838,
                top: convenience_functions_1.convertInchesToTwip(1),
                right: convenience_functions_1.convertInchesToTwip(1),
                bottom: convenience_functions_1.convertInchesToTwip(1),
                left: convenience_functions_1.convertInchesToTwip(1),
                header: 708,
                footer: 708,
                gutter: 0,
                mirror: false,
                column: {
                    space: 708,
                    count: 1,
                    separate: true,
                },
                linePitch: convenience_functions_1.convertInchesToTwip(0.25),
                headers: {
                    default: new header_wrapper_1.HeaderWrapper(media, 100),
                },
                footers: {
                    even: new footer_wrapper_1.FooterWrapper(media, 200),
                },
                pageNumberStart: 10,
                pageNumberFormatType: page_number_1.PageNumberFormat.CARDINAL_TEXT,
                titlePage: true,
                verticalAlign: vertical_align_1.SectionVerticalAlignValue.TOP,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            chai_1.expect(tree["w:sectPr"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:sectPr"][0]).to.deep.equal({ "w:pgSz": { _attr: { "w:h": 16838, "w:w": 11906, "w:orient": "portrait" } } });
            chai_1.expect(tree["w:sectPr"][1]).to.deep.equal({
                "w:pgMar": {
                    _attr: {
                        "w:bottom": 1440,
                        "w:footer": 708,
                        "w:top": 1440,
                        "w:right": 1440,
                        "w:left": 1440,
                        "w:header": 708,
                        "w:gutter": 0,
                        "w:mirrorMargins": false,
                    },
                },
            });
            chai_1.expect(tree["w:sectPr"][2]).to.deep.equal({ "w:cols": { _attr: { "w:space": 708, "w:sep": true, "w:num": 1 } } });
            chai_1.expect(tree["w:sectPr"][3]).to.deep.equal({ "w:docGrid": { _attr: { "w:linePitch": 360 } } });
            chai_1.expect(tree["w:sectPr"][4]).to.deep.equal({ "w:headerReference": { _attr: { "r:id": "rId100", "w:type": "default" } } });
            chai_1.expect(tree["w:sectPr"][5]).to.deep.equal({ "w:footerReference": { _attr: { "r:id": "rId200", "w:type": "even" } } });
            chai_1.expect(tree["w:sectPr"][6]).to.deep.equal({ "w:pgNumType": { _attr: { "w:fmt": "cardinalText", "w:start": 10 } } });
        });
        it("should create section properties with no options", () => {
            const properties = new section_properties_1.SectionProperties();
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            chai_1.expect(tree["w:sectPr"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:sectPr"][0]).to.deep.equal({ "w:pgSz": { _attr: { "w:h": 16838, "w:w": 11906, "w:orient": "portrait" } } });
            chai_1.expect(tree["w:sectPr"][1]).to.deep.equal({
                "w:pgMar": {
                    _attr: {
                        "w:bottom": 1440,
                        "w:footer": 708,
                        "w:top": 1440,
                        "w:right": 1440,
                        "w:left": 1440,
                        "w:header": 708,
                        "w:gutter": 0,
                        "w:mirrorMargins": false,
                    },
                },
            });
            chai_1.expect(tree["w:sectPr"][2]).to.deep.equal({ "w:cols": { _attr: { "w:space": 708, "w:sep": false, "w:num": 1 } } });
            chai_1.expect(tree["w:sectPr"][3]).to.deep.equal({ "w:docGrid": { _attr: { "w:linePitch": 360 } } });
        });
        it("should create section properties with changed options", () => {
            const properties = new section_properties_1.SectionProperties({
                top: 0,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            chai_1.expect(tree["w:sectPr"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:sectPr"][0]).to.deep.equal({ "w:pgSz": { _attr: { "w:h": 16838, "w:w": 11906, "w:orient": "portrait" } } });
            chai_1.expect(tree["w:sectPr"][1]).to.deep.equal({
                "w:pgMar": {
                    _attr: {
                        "w:bottom": 1440,
                        "w:footer": 708,
                        "w:top": 0,
                        "w:right": 1440,
                        "w:left": 1440,
                        "w:header": 708,
                        "w:gutter": 0,
                        "w:mirrorMargins": false,
                    },
                },
            });
        });
        it("should create section properties with changed options", () => {
            const properties = new section_properties_1.SectionProperties({
                bottom: 0,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            chai_1.expect(tree["w:sectPr"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:sectPr"][0]).to.deep.equal({ "w:pgSz": { _attr: { "w:h": 16838, "w:w": 11906, "w:orient": "portrait" } } });
            chai_1.expect(tree["w:sectPr"][1]).to.deep.equal({
                "w:pgMar": {
                    _attr: {
                        "w:bottom": 0,
                        "w:footer": 708,
                        "w:top": 1440,
                        "w:right": 1440,
                        "w:left": 1440,
                        "w:header": 708,
                        "w:gutter": 0,
                        "w:mirrorMargins": false,
                    },
                },
            });
        });
        it("should create section properties with changed options", () => {
            const properties = new section_properties_1.SectionProperties({
                width: 0,
                height: 0,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            chai_1.expect(tree["w:sectPr"]).to.be.an.instanceof(Array);
            chai_1.expect(tree["w:sectPr"][0]).to.deep.equal({ "w:pgSz": { _attr: { "w:h": 0, "w:w": 0, "w:orient": "portrait" } } });
            chai_1.expect(tree["w:sectPr"][1]).to.deep.equal({
                "w:pgMar": {
                    _attr: {
                        "w:bottom": 1440,
                        "w:footer": 708,
                        "w:top": 1440,
                        "w:right": 1440,
                        "w:left": 1440,
                        "w:header": 708,
                        "w:gutter": 0,
                        "w:mirrorMargins": false,
                    },
                },
            });
        });
        it("should create section properties with page borders", () => {
            const properties = new section_properties_1.SectionProperties({
                pageBorders: {
                    offsetFrom: page_border_1.PageBorderOffsetFrom.PAGE,
                },
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            const pgBorders = tree["w:sectPr"].find((item) => item["w:pgBorders"] !== undefined);
            chai_1.expect(pgBorders).to.deep.equal({
                "w:pgBorders": { _attr: { "w:offsetFrom": "page" } },
            });
        });
        it("should create section properties with page number type, but without start attribute", () => {
            const properties = new section_properties_1.SectionProperties({
                pageNumberFormatType: page_number_1.PageNumberFormat.UPPER_ROMAN,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            const pgNumType = tree["w:sectPr"].find((item) => item["w:pgNumType"] !== undefined);
            chai_1.expect(pgNumType).to.deep.equal({
                "w:pgNumType": { _attr: { "w:fmt": "upperRoman" } },
            });
        });
        it("should create section properties without page number type", () => {
            const properties = new section_properties_1.SectionProperties({});
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            const pgNumType = tree["w:sectPr"].find((item) => item["w:pgNumType"] !== undefined);
            chai_1.expect(pgNumType).to.equal(undefined);
        });
        it("should create section properties with section type", () => {
            const properties = new section_properties_1.SectionProperties({
                type: section_type_attributes_1.SectionType.CONTINUOUS,
            });
            const tree = new formatter_1.Formatter().format(properties);
            chai_1.expect(Object.keys(tree)).to.deep.equal(["w:sectPr"]);
            const type = tree["w:sectPr"].find((item) => item["w:type"] !== undefined);
            chai_1.expect(type).to.deep.equal({
                "w:type": { _attr: { "w:val": "continuous" } },
            });
        });
    });
});
//# sourceMappingURL=section-properties.spec.js.map
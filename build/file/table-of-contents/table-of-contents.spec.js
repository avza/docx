"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const table_of_contents_1 = require("./table-of-contents");
const table_of_contents_properties_1 = require("./table-of-contents-properties");
describe("Table of Contents", () => {
    describe("#constructor", () => {
        it("should construct a TOC without options", () => {
            const toc = new table_of_contents_1.TableOfContents();
            const tree = new formatter_1.Formatter().format(toc);
            chai_1.expect(tree).to.be.deep.equal(DEFAULT_TOC);
        });
        it("should construct a TOC with all the options and alias", () => {
            const styles = new Array();
            styles.push(new table_of_contents_properties_1.StyleLevel("SL", 1));
            styles.push(new table_of_contents_properties_1.StyleLevel("SL", 2));
            const props = {
                captionLabel: "A",
                entriesFromBookmark: "B",
                captionLabelIncludingNumbers: "C",
                sequenceAndPageNumbersSeparator: "D",
                tcFieldIdentifier: "F",
                hyperlink: true,
                tcFieldLevelRange: "L",
                pageNumbersEntryLevelsRange: "N",
                headingStyleRange: "O",
                entryAndPageNumberSeparator: "P",
                seqFieldIdentifierForPrefix: "S",
                stylesWithLevels: styles,
                useAppliedParagraphOutlineLevel: true,
                preserveTabInEntries: true,
                preserveNewLineInEntries: true,
                hideTabAndPageNumbersInWebView: true,
            };
            const toc = new table_of_contents_1.TableOfContents("Summary", props);
            const tree = new formatter_1.Formatter().format(toc);
            chai_1.expect(tree).to.be.deep.equal(COMPLETE_TOC);
        });
    });
});
const DEFAULT_TOC = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": {
                        _attr: {
                            "w:val": "Table of Contents",
                        },
                    },
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "begin",
                                            "w:dirty": true,
                                        },
                                    },
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        "TOC",
                                    ],
                                },
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "separate",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "end",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
const COMPLETE_TOC = {
    "w:sdt": [
        {
            "w:sdtPr": [
                {
                    "w:alias": {
                        _attr: {
                            "w:val": "Summary",
                        },
                    },
                },
            ],
        },
        {
            "w:sdtContent": [
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "begin",
                                            "w:dirty": true,
                                        },
                                    },
                                },
                                {
                                    "w:instrText": [
                                        {
                                            _attr: {
                                                "xml:space": "preserve",
                                            },
                                        },
                                        'TOC \\a "A" \\b "B" \\c "C" \\d "D" \\f "F" \\h \\l "L" \\n "N" \\o "O" \\p "P" \\s "S" \\t "SL,1,SL,2" \\u \\w \\x \\z',
                                    ],
                                },
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "separate",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    "w:p": [
                        {
                            "w:r": [
                                {
                                    "w:fldChar": {
                                        _attr: {
                                            "w:fldCharType": "end",
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
//# sourceMappingURL=table-of-contents.spec.js.map
/* tslint:disable */
// Example on how to use a template document
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, ImportDotx, Packer, Paragraph, IDocumentTemplate } from "../build";
import { TableOfContents, PageBreak, TextRun, Header, Footer } from "../build";

const importDotx = new ImportDotx();
// const filePath = "./demo/dotx/template.dotx";
const filePath = "./__exclude/dotx/2021-04-11-DemoTemplate.dotx";

fs.readFile(filePath, (err, data) => {
    if (err) {
        throw new Error(`Failed to read file ${filePath}.`);
    }

    importDotx.extract(data).then((templateDocument: IDocumentTemplate) => {
        // NOTE: this `Document` class is really the File class from `/src/file/file.ts`
        /**
         * CFH: review the `IPropertiesOptions`
         */

        // Map headers to known keys (default, first, even)
        const templateHeaders = ImportDotx.getHeaders(templateDocument);
        const templateFooters = ImportDotx.getFooters(templateDocument);

        const toc = new TableOfContents("Summary", {
            hyperlink: true,
            headingStyleRange: "1-5",
            // stylesWithLevels: [new StyleLevel("MySpectacularStyle", 1)],
        });
        // doc.addTableOfContents(toc);

        const doc = new Document(
            {
                evenAndOddHeaderAndFooters: ('even' in templateHeaders),
                sections: [
                    {
                        headers: templateHeaders,
                        footers: templateFooters,
                        properties: {
                            titlePage: templateDocument.titlePageIsDefined,
                            // titlePage: false,
                        },
                        children: [
                            // toc,
                            new Paragraph({
                                children: [
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun("Hello World - page 1"),
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun("Hello World - page 2"),
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun("Hello World - page 3"),
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun("Hello World - page 4"),
                                    new PageBreak(),
                                ],
                            }),
                        ],
                    },
                    {
                        // headers: {
                        //     default: new Header(),
                        // },
                        // footers: {
                        //     default: new Footer(),
                        // },
                        // headers: templateHeaders,
                        // footers: templateFooters,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun("(SECTION 2) Hello World"),
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun("Hello page 3"),
                                    new PageBreak(),
                                ],
                            }),
                            new Paragraph("Hello page 4"),
                        ],
                    },
                    {
                        // headers: templateHeaders,
                        // headers: {
                        //      // For an empty Header
                        //     default: new Header(),
                        // },
                        // footers: templateFooters,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun("(SECTION 3) Hello World"),
                                    new PageBreak(),
                                ],
                            }),
                        ],
                    }
                ],
            },
            {
                template: templateDocument,
            },
        );

        doc.Document.View.getTablesOfContents();
        doc.verifyUpdateFields();

        Packer.toBuffer(doc as any).then((buffer) => {
            // fs.writeFileSync("My Document.docx", buffer);
            fs.writeFileSync("./__exclude/output/My Ugly Document3.docx", buffer);
        });
    });
});

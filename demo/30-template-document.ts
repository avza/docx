/* tslint:disable */
// Example on how to use a template document
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, ImportDotx, Packer, Paragraph } from "../build";
import { PageBreak, TextRun } from "../build";

const importDotx = new ImportDotx();
// const filePath = "./demo/dotx/template.dotx";
const filePath = "./__exclude/dotx/TestTemplate.dotx";

fs.readFile(filePath, (err, data) => {
    if (err) {
        throw new Error(`Failed to read file ${filePath}.`);
    }

    importDotx.extract(data).then((templateDocument) => {
        // NOTE: this `Document` class is really the File class from `/src/file/file.ts`
        /**
         * CFH: review the `IPropertiesOptions`
         */

        // Map headers to known keys (default, first, even)
        const templateHeaders = ImportDotx.getHeaders(templateDocument);
        const templateFooters = ImportDotx.getFooters(templateDocument);

        const doc = new Document(
            {
                sections: [
                    {
                        headers: templateHeaders,
                        footers: templateFooters,
                        properties: {
                            titlePage: templateDocument.titlePageIsDefined,
                        },
                        children: [
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

        Packer.toBuffer(doc).then((buffer) => {
            // fs.writeFileSync("My Document.docx", buffer);
            fs.writeFileSync("./__exclude/output/My Ugly Document3.docx", buffer);
        });
    });
});

// Example on how to use a template document
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, ImportDotx, Packer, PageBreak, Paragraph } from "../build";

const importDotx = new ImportDotx();
// const filePath = "./demo/dotx/template.dotx";
const filePath = "./demo/dotx/TestTemplate.dotx";

fs.readFile(filePath, (err, data) => {
    if (err) {
        throw new Error(`Failed to read file ${filePath}.`);
    }

    importDotx.extract(data).then((templateDocument) => {
        // NOTE: this `Document` class is really the File class from `/src/file/file.ts`

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
                        children: [new Paragraph("Hello World")],
                    },
                    {
                        headers: templateHeaders,
                        footers: templateFooters,
                        children: [
                            new Paragraph("Hello page 2"),
                            new PageBreak(),
                            new Paragraph("Hello page 3"),
                            new PageBreak(),
                            new Paragraph("Hello page 4"),
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
            fs.writeFileSync("My Ugly Document.docx", buffer);
        });
    });
});

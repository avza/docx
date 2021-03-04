import { expect } from "chai";

import { HeaderReferenceType } from "../file/document";
import { FooterWrapper } from "../file/footer-wrapper";
import { HeaderWrapper } from "../file/header-wrapper";
import { IDocumentTemplate, ImportDotx } from "./import-dotx";

describe("ImportDotx", () => {
    describe("#constructor", () => {
        it("should create", () => {
            const file = new ImportDotx();

            expect(file).to.deep.equal({});
        });
    });

    describe("#getHeaders", () => {
        const template = {
            headers: [
                {
                    type: HeaderReferenceType.DEFAULT,
                    header: "DUMMY_HEADER_DEFAULT" as unknown as HeaderWrapper,
                },
                {
                    // Second one will win
                    type: HeaderReferenceType.DEFAULT,
                    header: "DUMMY_HEADER_DEFAULT_2" as unknown as HeaderWrapper,
                },
                {
                    type: HeaderReferenceType.FIRST,
                    header: "DUMMY_HEADER_FIRST" as unknown as HeaderWrapper,
                },
                {
                    type: HeaderReferenceType.EVEN,
                    header: "DUMMY_HEADER_EVEN" as unknown as HeaderWrapper,
                },
            ],
        } as unknown as IDocumentTemplate;

        const headers = ImportDotx.getHeaders(template);
        expect(headers).to.deep.equal({
            "default": "DUMMY_HEADER_DEFAULT_2",
            "first": "DUMMY_HEADER_FIRST",
            "even": "DUMMY_HEADER_EVEN",
        });
    });

    describe("#getFooters", () => {
        const template = {
            footers: [
                {
                    type: HeaderReferenceType.DEFAULT,
                    footer: "DUMMY_FOOTER_DEFAULT" as unknown as FooterWrapper,
                },
                {
                    // Second one will win
                    type: HeaderReferenceType.DEFAULT,
                    footer: "DUMMY_FOOTER_DEFAULT_2" as unknown as FooterWrapper,
                },
                {
                    type: HeaderReferenceType.FIRST,
                    footer: "DUMMY_FOOTER_FIRST" as unknown as FooterWrapper,
                },
                {
                    type: HeaderReferenceType.EVEN,
                    footer: "DUMMY_FOOTER_EVEN" as unknown as FooterWrapper,
                },
            ],
        } as unknown as IDocumentTemplate;

        const footers = ImportDotx.getFooters(template);
        expect(footers).to.deep.equal({
            "default": "DUMMY_FOOTER_DEFAULT_2",
            "first": "DUMMY_FOOTER_FIRST",
            "even": "DUMMY_FOOTER_EVEN",
        });
    });

    // describe("#extract", () => {
    //     it("should create", async () => {
    //         const file = new ImportDotx();
    //         const filePath = "./demo/dotx/template.dotx";

    //         const templateDocument = await file.extract(data);

    //         await file.extract(data);

    //         expect(templateDocument).to.be.equal({ currentRelationshipId: 1 });
    //     });
    // });
});

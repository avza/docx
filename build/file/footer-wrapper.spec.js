"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = require("sinon");
const footer_wrapper_1 = require("./footer-wrapper");
const media_1 = require("./media");
const paragraph_1 = require("./paragraph");
const table_1 = require("./table");
describe("FooterWrapper", () => {
    describe("#add", () => {
        it("should call the underlying footer's addParagraph", () => {
            const file = new footer_wrapper_1.FooterWrapper(new media_1.Media(), 1);
            const spy = sinon.spy(file.View, "add");
            file.add(new paragraph_1.Paragraph({}));
            chai_1.expect(spy.called).to.equal(true);
        });
        it("should call the underlying footer's addParagraph", () => {
            const file = new footer_wrapper_1.FooterWrapper(new media_1.Media(), 1);
            const spy = sinon.spy(file.View, "add");
            file.add(new table_1.Table({
                rows: [
                    new table_1.TableRow({
                        children: [
                            new table_1.TableCell({
                                children: [new paragraph_1.Paragraph("hello")],
                            }),
                        ],
                    }),
                ],
            }));
            chai_1.expect(spy.called).to.equal(true);
        });
    });
    describe("#addChildElement", () => {
        it("should call the underlying footer's addChildElement", () => {
            const file = new footer_wrapper_1.FooterWrapper(new media_1.Media(), 1);
            const spy = sinon.spy(file.View, "addChildElement");
            file.addChildElement({});
            chai_1.expect(spy.called).to.equal(true);
        });
    });
});
//# sourceMappingURL=footer-wrapper.spec.js.map
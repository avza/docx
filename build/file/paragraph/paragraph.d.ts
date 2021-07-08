import { FootnoteReferenceRun } from "file/footnotes/footnote/run/reference-run";
import { IXmlableObject, XmlComponent } from "file/xml-components";
import { IViewWrapper } from "../document-wrapper";
import { DeletedTextRun, InsertedTextRun } from "../track-revision";
import { PageBreak } from "./formatting/page-break";
import { Bookmark, ExternalHyperlink, InternalHyperlink } from "./links";
import { Math } from "./math";
import { IParagraphPropertiesOptions } from "./properties";
import { PictureRun, Run, SequentialIdentifier, SymbolRun, TextRun } from "./run";
export declare type ParagraphChild = TextRun | PictureRun | SymbolRun | Bookmark | PageBreak | SequentialIdentifier | FootnoteReferenceRun | InternalHyperlink | ExternalHyperlink | InsertedTextRun | DeletedTextRun | Math;
export interface IParagraphOptions extends IParagraphPropertiesOptions {
    readonly text?: string;
    readonly children?: ParagraphChild[];
}
export declare class Paragraph extends XmlComponent {
    private readonly properties;
    constructor(options: string | PictureRun | IParagraphOptions);
    prepForXml(file: IViewWrapper): IXmlableObject | undefined;
    addRunToFront(run: Run): Paragraph;
}

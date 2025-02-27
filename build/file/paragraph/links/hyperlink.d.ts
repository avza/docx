import { XmlComponent } from "file/xml-components";
import { ParagraphChild } from "../paragraph";
export declare enum HyperlinkType {
    INTERNAL = "INTERNAL",
    EXTERNAL = "EXTERNAL"
}
export declare class ConcreteHyperlink extends XmlComponent {
    readonly linkId: string;
    constructor(child: ParagraphChild, relationshipId: string, anchor?: string);
}
export declare class InternalHyperlink extends ConcreteHyperlink {
    constructor(options: {
        readonly child: ParagraphChild;
        readonly anchor: string;
    });
}
export declare class ExternalHyperlink {
    readonly options: {
        readonly child: ParagraphChild;
        readonly link: string;
    };
    constructor(options: {
        readonly child: ParagraphChild;
        readonly link: string;
    });
}

import { XmlComponent } from "file/xml-components";
import { IDocumentBackgroundOptions } from "../document";
import { INumberingOptions } from "../numbering";
import { Paragraph } from "../paragraph";
import { IStylesOptions } from "../styles";
export interface IPropertiesOptions {
    readonly title?: string;
    readonly subject?: string;
    readonly creator?: string;
    readonly keywords?: string;
    readonly description?: string;
    readonly lastModifiedBy?: string;
    readonly revision?: string;
    readonly externalStyles?: string;
    readonly styles?: IStylesOptions;
    readonly numbering?: INumberingOptions;
    readonly footnotes?: Paragraph[];
    readonly background?: IDocumentBackgroundOptions;
    readonly features?: {
        readonly trackRevisions?: boolean;
    };
    readonly compatabilityModeVersion?: number;
}
export declare class CoreProperties extends XmlComponent {
    constructor(options: IPropertiesOptions);
}

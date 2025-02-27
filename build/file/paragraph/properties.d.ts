import { IgnoreIfEmptyXmlComponent, XmlComponent } from "file/xml-components";
import { ShadingType } from "../table/shading";
import { AlignmentType } from "./formatting/alignment";
import { IBorderOptions } from "./formatting/border";
import { IIndentAttributesProperties } from "./formatting/indent";
import { ISpacingProperties } from "./formatting/spacing";
import { HeadingLevel } from "./formatting/style";
import { LeaderType, TabStopPosition, TabStopType } from "./formatting/tab-stop";
export interface IParagraphStylePropertiesOptions {
    readonly alignment?: AlignmentType;
    readonly thematicBreak?: boolean;
    readonly contextualSpacing?: boolean;
    readonly rightTabStop?: number;
    readonly leftTabStop?: number;
    readonly indent?: IIndentAttributesProperties;
    readonly spacing?: ISpacingProperties;
    readonly keepNext?: boolean;
    readonly keepLines?: boolean;
    readonly outlineLevel?: number;
}
export interface IParagraphPropertiesOptions extends IParagraphStylePropertiesOptions {
    readonly border?: IBorderOptions;
    readonly heading?: HeadingLevel;
    readonly bidirectional?: boolean;
    readonly pageBreakBefore?: boolean;
    readonly tabStops?: {
        readonly position: number | TabStopPosition;
        readonly type: TabStopType;
        readonly leader?: LeaderType;
    }[];
    readonly style?: string;
    readonly bullet?: {
        readonly level: number;
    };
    readonly numbering?: {
        readonly reference: string;
        readonly level: number;
        readonly custom?: boolean;
    };
    readonly shading?: {
        readonly type: ShadingType;
        readonly fill: string;
        readonly color: string;
    };
}
export declare class ParagraphProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options?: IParagraphPropertiesOptions);
    push(item: XmlComponent): void;
}

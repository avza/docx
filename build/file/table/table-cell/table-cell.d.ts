import { IViewWrapper } from "file/document-wrapper";
import { Paragraph } from "file/paragraph";
import { BorderStyle } from "file/styles";
import { IXmlableObject, XmlComponent } from "file/xml-components";
import { ITableShadingAttributesProperties } from "../shading";
import { Table } from "../table";
import { ITableCellMarginOptions } from "./cell-margin/table-cell-margins";
import { TextDirection, VerticalAlign, VerticalMergeType, WidthType } from "./table-cell-components";
export interface ITableCellOptions {
    readonly shading?: ITableShadingAttributesProperties;
    readonly margins?: ITableCellMarginOptions;
    readonly verticalAlign?: VerticalAlign;
    readonly textDirection?: TextDirection;
    readonly verticalMerge?: VerticalMergeType;
    readonly width?: {
        readonly size: number | string;
        readonly type?: WidthType;
    };
    readonly columnSpan?: number;
    readonly rowSpan?: number;
    readonly borders?: {
        readonly top?: {
            readonly style: BorderStyle;
            readonly size: number;
            readonly color: string;
        };
        readonly bottom?: {
            readonly style: BorderStyle;
            readonly size: number;
            readonly color: string;
        };
        readonly left?: {
            readonly style: BorderStyle;
            readonly size: number;
            readonly color: string;
        };
        readonly right?: {
            readonly style: BorderStyle;
            readonly size: number;
            readonly color: string;
        };
    };
    readonly children: (Paragraph | Table)[];
}
export declare class TableCell extends XmlComponent {
    readonly options: ITableCellOptions;
    private readonly properties;
    constructor(options: ITableCellOptions);
    prepForXml(file?: IViewWrapper): IXmlableObject | undefined;
}

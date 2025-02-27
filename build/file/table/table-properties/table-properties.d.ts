import { IgnoreIfEmptyXmlComponent } from "file/xml-components";
import { AlignmentType } from "../../paragraph";
import { ITableShadingAttributesProperties } from "../shading";
import { WidthType } from "../table-cell";
import { ITableBordersOptions } from "./table-borders";
import { ITableCellMarginOptions } from "./table-cell-margin";
import { ITableFloatOptions } from "./table-float-properties";
import { TableLayoutType } from "./table-layout";
export interface ITablePropertiesOptions {
    readonly width?: {
        readonly size: number;
        readonly type?: WidthType;
    };
    readonly layout?: TableLayoutType;
    readonly borders?: ITableBordersOptions;
    readonly float?: ITableFloatOptions;
    readonly shading?: ITableShadingAttributesProperties;
    readonly alignment?: AlignmentType;
    readonly cellMargin?: ITableCellMarginOptions;
    readonly visuallyRightToLeft?: boolean;
}
export declare class TableProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options: ITablePropertiesOptions);
}

import { IgnoreIfEmptyXmlComponent } from "file/xml-components";
import { WidthType } from "../table-cell";
interface IBaseTableCellMarginOptions {
    readonly value: number;
    readonly type?: WidthType;
}
export interface ITableCellMarginOptions {
    readonly top?: IBaseTableCellMarginOptions;
    readonly bottom?: IBaseTableCellMarginOptions;
    readonly left?: IBaseTableCellMarginOptions;
    readonly right?: IBaseTableCellMarginOptions;
}
export declare class TableCellMargin extends IgnoreIfEmptyXmlComponent {
    constructor(options: ITableCellMarginOptions);
}
export {};

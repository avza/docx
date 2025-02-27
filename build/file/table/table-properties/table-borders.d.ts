import { BorderStyle } from "file/styles";
import { XmlComponent } from "file/xml-components";
export interface ITableBordersOptions {
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
    readonly insideHorizontal?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly insideVertical?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
}
export declare class TableBorders extends XmlComponent {
    static readonly NONE: {
        top: {
            style: BorderStyle;
            size: number;
            color: string;
        };
        bottom: {
            style: BorderStyle;
            size: number;
            color: string;
        };
        left: {
            style: BorderStyle;
            size: number;
            color: string;
        };
        right: {
            style: BorderStyle;
            size: number;
            color: string;
        };
        insideHorizontal: {
            style: BorderStyle;
            size: number;
            color: string;
        };
        insideVertical: {
            style: BorderStyle;
            size: number;
            color: string;
        };
    };
    constructor(options: ITableBordersOptions);
}

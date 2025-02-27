import { XmlAttributeComponent } from "file/xml-components";
export declare class ColumnsAttributes extends XmlAttributeComponent<{
    readonly space?: number;
    readonly num?: number;
    readonly separate?: boolean;
}> {
    protected readonly xmlKeys: {
        space: string;
        num: string;
        separate: string;
    };
}

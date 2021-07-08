import { XmlAttributeComponent } from "file/xml-components";
export interface ICustomPropertyAttributes {
    readonly fmtid: string;
    readonly pid: string;
    readonly name: string;
}
export declare class CustomPropertyAttributes extends XmlAttributeComponent<ICustomPropertyAttributes> {
    protected readonly xmlKeys: {
        fmtid: string;
        pid: string;
        name: string;
    };
}

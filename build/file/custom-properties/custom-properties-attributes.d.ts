import { XmlAttributeComponent } from "file/xml-components";
export interface ICustomPropertiesAttributes {
    readonly xmlns: string;
    readonly vt: string;
}
export declare class CustomPropertiesAttributes extends XmlAttributeComponent<ICustomPropertiesAttributes> {
    protected readonly xmlKeys: {
        xmlns: string;
        vt: string;
    };
}

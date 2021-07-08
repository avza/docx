import { IXmlableObject, XmlComponent } from "file/xml-components";
import { ICustomPropertyOptions } from "./custom-property";
export declare class CustomProperties extends XmlComponent {
    private nextId;
    private readonly properties;
    constructor(properties: ICustomPropertyOptions[]);
    prepForXml(): IXmlableObject | undefined;
    addCustomProperty(property: ICustomPropertyOptions): void;
}

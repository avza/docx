import { IViewWrapper } from "../document-wrapper";
import { IXmlableObject } from "./xmlable-object";
export declare abstract class BaseXmlComponent {
    protected readonly rootKey: string;
    protected deleted: boolean;
    constructor(rootKey: string);
    abstract prepForXml(file?: IViewWrapper): IXmlableObject | undefined;
    get IsDeleted(): boolean;
}

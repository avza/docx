import { IViewWrapper } from "../document-wrapper";
import { BaseXmlComponent } from "./base";
import { IXmlableObject } from "./xmlable-object";
export declare const EMPTY_OBJECT: {};
export declare abstract class XmlComponent extends BaseXmlComponent {
    protected root: (BaseXmlComponent | string | any)[];
    constructor(rootKey: string);
    prepForXml(file?: IViewWrapper): IXmlableObject | undefined;
    addChildElement(child: XmlComponent | string): XmlComponent;
    delete(): void;
}
export declare abstract class IgnoreIfEmptyXmlComponent extends XmlComponent {
    prepForXml(): IXmlableObject | undefined;
}

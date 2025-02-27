import { IgnoreIfEmptyXmlComponent, XmlComponent } from "file/xml-components";
import { HeightRule } from "./table-row-height";
export declare class TableRowProperties extends IgnoreIfEmptyXmlComponent {
    constructor();
    setCantSplit(): TableRowProperties;
    setTableHeader(): TableRowProperties;
    setHeight(value: number, rule: HeightRule): TableRowProperties;
}
export declare class CantSplit extends XmlComponent {
    constructor();
}
export declare class TableHeader extends XmlComponent {
    constructor();
}

import { XmlAttributeComponent } from "file/xml-components";
export interface IFooterAttributesProperties {
    readonly wpc?: string;
    readonly mc?: string;
    readonly o?: string;
    readonly r?: string;
    readonly m?: string;
    readonly v?: string;
    readonly wp14?: string;
    readonly wp?: string;
    readonly w10?: string;
    readonly w?: string;
    readonly w14?: string;
    readonly w15?: string;
    readonly wpg?: string;
    readonly wpi?: string;
    readonly wne?: string;
    readonly wps?: string;
    readonly cp?: string;
    readonly dc?: string;
    readonly dcterms?: string;
    readonly dcmitype?: string;
    readonly xsi?: string;
    readonly type?: string;
}
export declare class FooterAttributes extends XmlAttributeComponent<IFooterAttributesProperties> {
    protected readonly xmlKeys: {
        wpc: string;
        mc: string;
        o: string;
        r: string;
        m: string;
        v: string;
        wp14: string;
        wp: string;
        w10: string;
        w: string;
        w14: string;
        w15: string;
        wpg: string;
        wpi: string;
        wne: string;
        wps: string;
        cp: string;
        dc: string;
        dcterms: string;
        dcmitype: string;
        xsi: string;
        type: string;
    };
}

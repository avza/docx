import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
import { TrackRevisions } from "./track-revisions";
export interface ISettingsAttributesProperties {
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
    readonly Ignorable?: string;
}
export declare class SettingsAttributes extends XmlAttributeComponent<ISettingsAttributesProperties> {
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
        Ignorable: string;
    };
}
export interface ISettingsOptions {
    readonly compatabilityModeVersion?: number;
}
export declare class Settings extends XmlComponent {
    private readonly compatibility;
    private readonly trackRevisions;
    constructor(options: ISettingsOptions);
    addUpdateFields(): void;
    addTrackRevisions(): TrackRevisions;
}

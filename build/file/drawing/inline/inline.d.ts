import { IMediaData, IMediaDataDimensions } from "file/media";
import { XmlComponent } from "file/xml-components";
export declare class Inline extends XmlComponent {
    private readonly dimensions;
    private readonly extent;
    private readonly graphic;
    constructor(mediaData: IMediaData, dimensions: IMediaDataDimensions);
    scale(factorX: number, factorY: number): void;
}

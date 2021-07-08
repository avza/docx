/// <reference types="node" />
import { IDrawingOptions } from "../drawing";
import { File } from "../file";
import { PictureRun } from "../paragraph";
import { IMediaData } from "./data";
export declare class Media {
    static addImage(file: File, buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number, drawingOptions?: IDrawingOptions): PictureRun;
    private static generateId;
    private readonly map;
    constructor();
    getMedia(key: string): IMediaData;
    addMedia(buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number): IMediaData;
    private createMedia;
    get Array(): readonly IMediaData[];
    private convertDataURIToBinary;
}

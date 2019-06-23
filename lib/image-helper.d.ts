import { ImageOptions } from "./image-options";
import { INsCapabilities } from "./interfaces/ns-capabilities";
import { IRectangle } from "./interfaces/rectangle";
export declare class ImageHelper {
    private _args;
    private _imageCropRect;
    private _blockOutAreas;
    private _waitOnCreatingInitialSnapshot;
    constructor(_args: INsCapabilities);
    waitOnCreatingInitialSnapshot: number;
    imageCropRect: IRectangle;
    blockOutAreas: IRectangle[];
    imageOutputLimit(): ImageOptions;
    thresholdType(): ImageOptions;
    threshold(thresholdType: any): 10 | 0.01;
    delta(): number;
    static cropImageDefault(_args: INsCapabilities): {
        x: number;
        y: any;
        width: any;
        height: any;
    };
    private static getOffsetPixels;
    private runDiff;
    compareImages(actual: string, expected: string, output: string, valueThreshold?: number, typeThreshold?: any): Promise<boolean>;
    clipRectangleImage(rect: IRectangle, path: string): Promise<{}>;
    readImage(path: string): Promise<any>;
}

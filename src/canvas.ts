import {Color} from "./color";

export class Canvas {
    private readonly imageData: ImageData;
    private readonly data: Uint8ClampedArray;
    private readonly _context: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(canvasId: string, width: number, height: number) {
        this.canvasElement = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        this._context = this.canvasElement.getContext('2d');
        this.imageData = this._context.getImageData(0, 0, width, height);
        this.data = this.imageData.data;
    }

    writePixel(x: number, y: number, color: Color) {
        const offset = this.width * 4 * y + x * 4;
        this.data[offset] = color.r;
        this.data[offset+1] = color.g;
        this.data[offset+2] = color.b;
        this.data[offset+3] = color.a;
    }

    update() {
        this.context.putImageData(this.imageData, 0, 0);
    }

    get width() {
        return this.canvasElement.width;
    }

    get height() {
        return this.canvasElement.height;
    }

    get context() {
        return this._context;
    }

}

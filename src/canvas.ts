import {Color} from "./color";

export class Canvas {
    private readonly imageData: ImageData;
    private readonly _data: Uint8ClampedArray;
    private readonly _context: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(canvasId: string, width: number, height: number) {
        this.canvasElement = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        this._context = this.canvasElement.getContext('2d');
        this.imageData = this._context.getImageData(0, 0, width, height);
        this._data = this.imageData.data;
    }

    writePixel(x: number, y: number, color: Color) {
        const offset = this.width * 4 * y + x * 4;
        this._data[offset] = Math.trunc(color.r * 255);
        this._data[offset + 1] = Math.trunc(color.g * 255);
        this._data[offset + 2] = Math.trunc(color.b * 255);
        this._data[offset + 3] = color.a;
    }

    update() {
        this.context.putImageData(this.imageData, 0, 0);
    }

    get width(): number {
        return this.canvasElement.width;
    }

    get height(): number {
        return this.canvasElement.height;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }

    get data(): Uint8ClampedArray {
        return this._data;
    }

}

import { Color } from "./vector";

export class Canvas {
    private readonly imageData: ImageData;
    private readonly data: Uint8ClampedArray;
    private readonly context: CanvasRenderingContext2D;
    private readonly canvasElement: HTMLCanvasElement;

    constructor(canvasId: string, width: number, height: number) {
        this.canvasElement = document.getElementById(canvasId) as HTMLCanvasElement;
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        this.context = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.imageData = this.context.getImageData(0, 0, width, height);
        this.data = this.imageData.data;
    }

    writePixel(x: number, y: number, color: Color) {
        const offset = this.width * 4 * y + x * 4;
        this.data[offset] = Math.trunc(color.r * 255);
        this.data[offset + 1] = Math.trunc(color.g * 255);
        this.data[offset + 2] = Math.trunc(color.b * 255);
        this.data[offset + 3] = 255;
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
}

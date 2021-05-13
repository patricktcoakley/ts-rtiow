import {Canvas} from "./canvas";
import {Color} from './color';

const ImageWidth = 512;
const ImageHeight = 512;
const Display = new Canvas('canvas', ImageWidth, ImageHeight);

for (let y = ImageHeight - 1; y >= 0; --y) {
    for (let x = 0; x < ImageWidth; ++x) {
        const color = new Color(x / (ImageWidth - 1), y / (ImageHeight - 1), 0.25, 1);
        Display.writePixel(x,y,color);
    }
}

Display.update();

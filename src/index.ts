import {Canvas} from "./canvas";
import {Vector} from "./vector";
import {Ray} from './ray';

const ImageWidth = 200;
const ImageHeight = 100;
const Horizontal = new Vector(4, 0, 0);
const Vertical = new Vector(0, 2, 0);
const Origin = new Vector(0, 0, 0);
const LowerLeft = new Vector(-2.0, -1.0, -1.0);
const Display = new Canvas('canvas', ImageWidth, ImageHeight);

for (let y = ImageHeight - 1; y >= 0; --y) {
    for (let x = 0; x < ImageWidth; ++x) {
        const u = x / (ImageWidth - 1);
        const v = y / (ImageHeight - 1);
        const ray = new Ray(Origin, LowerLeft.add(Horizontal.mulScalar(u).add(Vertical.mulScalar(v))))
        Display.writePixel(x, ImageHeight - y, ray.toColor());
    }
}

Display.update();

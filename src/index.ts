import {Canvas} from "./canvas";
import {Color, Vector} from "./vector";
import {Ray} from './ray';
import {HitRecord, Hittable, HittableList} from "./hittable";
import {Sphere} from "./sphere";

const ImageWidth = 400;
const ImageHeight = 200;
const Horizontal = new Vector(4, 0, 0);
const Vertical = new Vector(0, 2, 0);
const Origin = new Vector(0, 0, 0);
const LowerLeft = new Vector(-2.0, -1.0, -1.0);
const Display = new Canvas('canvas', ImageWidth, ImageHeight);


function rayColor(ray: Ray, world: Hittable): Color {
    let record = new HitRecord();
    if (world.hit(ray, 0, Number.MAX_VALUE, record)) {
        return Vector.mulScalar(
            Vector.add(record.normal, new Vector(1, 1, 1)),
            0.5
        );
    }

    const unitDirection = ray.direction.toUnitVector();
    const t = 0.5 * (unitDirection.y + 1);
    return Vector.add(
        Vector.mulScalar(new Vector(1, 1, 1), 1 - t),
        Vector.mulScalar(new Vector(0.5, 0.7, 1.0), t));
}

const world = new HittableList();
world.add(new Sphere(new Vector(0, 0, -1), 0.5));
world.add(new Sphere(new Vector(0, -100.5, -1), 100));

for (let y = ImageHeight - 1; y >= 0; --y) {
    for (let x = 0; x < ImageWidth; ++x) {
        const u = x / (ImageWidth - 1);
        const v = y / (ImageHeight - 1);
        const ray = new Ray(Origin, LowerLeft.add(Horizontal.mulScalar(u).add(Vertical.mulScalar(v))));
        Display.writePixel(x, ImageHeight - y, rayColor(ray, world));
    }
}

Display.update();




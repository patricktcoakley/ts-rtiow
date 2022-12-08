import { Point, Vector } from "./vector";
import { Ray } from "./ray";

export class HitRecord {
    point: Point;
    normal: Vector;
    t: number;
    frontFace: boolean;

    constructor(point: Point = new Vector(0, 0, 0), normal: Vector = new Vector(0, 0, 0), t = 0, frontFace = false) {
        this.point = point;
        this.normal = normal;
        this.t = t;
        this.frontFace = frontFace;
    }

    setFaceNormal(ray: Ray, outwardNormal: Vector) {
        this.frontFace = Vector.dot(ray.direction, outwardNormal) < 0;
        this.normal = this.frontFace ? outwardNormal : outwardNormal.negate();
    }
}

export interface Hittable {
    hit(ray: Ray, tMin: number, tMax: number, record: HitRecord): boolean;
}

export class HittableList implements Hittable {
    objects: Array<Hittable>;

    constructor() {
        this.objects = new Array<Hittable>();
    }

    add(object: Hittable) {
        this.objects.push(object);
    }

    hit(ray: Ray, tMin: number, tMax: number, record: HitRecord): boolean {
        let hitAnything = false;
        let closest = tMax;

        for (const object of this.objects) {
            if (object.hit(ray, tMin, closest, record)) {
                hitAnything = true;
                closest = record.t;
            }
        }

        return hitAnything;
    }
}

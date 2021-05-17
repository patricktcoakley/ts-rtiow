import {HitRecord, Hittable} from "./hittable";
import {Point, Vector} from "./vector";
import {Ray} from "./ray";

export class Sphere implements Hittable {
    center: Point;
    radius: number;

    constructor(center: Point, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    hit(ray: Ray, tMin: number, tMax: number, record: HitRecord): boolean {
        const oc = Vector.sub(ray.origin, this.center);
        const a = ray.direction.lengthSquared();
        const half_b = Vector.dot(oc, ray.direction);
        const c = oc.lengthSquared() - (this.radius * this.radius);

        const discriminant = half_b * half_b - a * c;
        if (discriminant < 0) {
            return false;
        }

        const sqrtDiscriminant = Math.sqrt(discriminant);

        let root = (-half_b - sqrtDiscriminant) / a;

        if (root < tMin || tMax < root) {
            root = (-half_b + sqrtDiscriminant) / a;
            if (root < tMin || tMax < root) {
                return false;
            }
        }

        record.t = root;
        record.point = ray.at(record.t);

        const outwardNormal = Vector.divScalar(
            Vector.sub(record.point, this.center),
            this.radius
        );

        record.setFaceNormal(ray, outwardNormal);

        return true;
    }
}

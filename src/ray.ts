import {Point, Vector} from "./vector";

export class Ray {
    origin: Point;
    direction: Vector;

    constructor(origin: Point, direction: Vector) {
        this.origin = origin;
        this.direction = direction;
    }

    at(t: number): Vector {
        return Vector.add(this.origin, Vector.mulScalar(this.direction, t));
    }

    toString(): string {
        return `{ origin: ${this.origin}, direction: ${this.direction} }`;
    }
}

import {Point, Vector} from "./vector";
import {Color} from "./color";

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

    toColor(): Color {
        const unitDirection = this.direction.toUnitVector();
        const t = 0.5 * (unitDirection.y + 1.0);
        return Color.add(
            Color.mulScalar(new Color(1.0, 1.0, 1.0), 1.0 - t),
            Color.mulScalar(new Color(0.5, 0.7, 1.0), t)
        )
    }

    toString(): string {
        return `{ origin: ${this.origin}, direction: ${this.direction} }`;
    }
}

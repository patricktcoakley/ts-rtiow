export class Vector {
    private readonly buffer: Array<number>;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.buffer = new Array<number>(x,y,z);
    }

    get x(): number {
        return this.buffer[0];
    }

    set x(value:  number) {
        this.buffer[0] = value;
    }

    get y(): number {
        return this.buffer[1];
    }

    set y(value:  number) {
        this.buffer[1] = value;
    }

    get z(): number {
        return this.buffer[2];
    }

    set z(value:  number) {
        this.buffer[2] = value;
    }

    negate(): Vector {
        return new Vector(-this.x, -this.y, -this.z);
    }

    length(): number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    toString(): string {
        return `(${this.x},${this.y},${this.z})`
    }

    toUnitVector(): Vector {
        return Vector.mulScalar(this, this.length());
    }

    static add(lhs: Vector, rhs: Vector) {
        return new Vector(lhs.x + rhs.x, lhs.y + rhs.y, lhs.z + rhs.z)
    }

    static sub(lhs: Vector, rhs: Vector): Vector {
        return new Vector(lhs.x - rhs.x, lhs.y - rhs.y, lhs.z - rhs.z)
    }

    static mulScalar(v: Vector, k: number): Vector {
        return new Vector(v.x * k, v.y * k, v.z * k);
    }

    static divScalar(v: Vector, k: number): Vector {
        return this.mulScalar(v, 1 / k);
    }

    static dot(lhs: Vector, rhs: Vector): number {
        return (lhs.x * rhs.x) + (lhs.y * rhs.y) + (lhs.z * rhs.z);
    }

    static cross(lhs: Vector, rhs: Vector): Vector {
        return new Vector(
            (lhs.y * rhs.z) - (lhs.z * rhs.y),
            (lhs.z * rhs.x) - (lhs.x * rhs.z),
            (lhs.x * rhs.y) - (lhs.y * rhs.x),
        );
    }
}

export type Point = Vector;
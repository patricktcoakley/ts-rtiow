export class Color {
    private readonly buffer: Uint8ClampedArray;

    constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 255) {
        this.buffer = new Uint8ClampedArray([r * 255, g * 255, b * 255, a * 255]);
    }

    get r(): number {
        return this.buffer[0];
    }

    set r(value: number) {
        this.buffer[0] = value;
    }

    get g(): number {
        return this.buffer[1];
    }

    set g(value: number) {
        this.buffer[1] = value;
    }

    get b(): number {
        return this.buffer[2];
    }

    set b(value: number) {
        this.buffer[2] = value;
    }

    get a(): number {
        return this.buffer[3];
    }

    set a(value: number) {
        this.buffer[3] = value;
    }

    static add(lhs: Color, rhs: Color): Color {
        return new Color(lhs.r + rhs.r,lhs.g + rhs.g,lhs.b + rhs.b);
    }

    static sub(lhs: Color, rhs: Color): Color {
        return new Color(lhs.r - rhs.r,lhs.g - rhs.g,lhs.b - rhs.b);
    }

    static mulScalar(c: Color, k: number) {
        return new Color(c.r * k, c.g * k, c.b * k, 1);
    }

    toString(): string {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }
}


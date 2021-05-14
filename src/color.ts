export class Color {
    private readonly buffer: Array<number>;

    constructor(r: number = 0, g: number = 0, b: number = 0) {
        this.buffer = new Array<number>(r, g, b, 255);
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
        return new Color(lhs.r + rhs.r, lhs.g + rhs.g, lhs.b + rhs.b);
    }

    add(rhs: Color): Color {
        return Color.add(this, rhs);
    }

    static sub(lhs: Color, rhs: Color): Color {
        return new Color(lhs.r - rhs.r, lhs.g - rhs.g, lhs.b - rhs.b);
    }

    sub(rhs: Color): Color {
        return Color.sub(this, rhs);
    }

    static mulScalar(c: Color, k: number): Color {
        return new Color(c.r * k, c.g * k, c.b * k);
    }

    mulScalar(k: number): Color {
        return Color.mulScalar(this, k);
    }

    toString(): string {
        return `rgba(${this.r * 255},${this.g * 255},${this.b * 255},${this.a})`;
    }
}


export function clamp(min: number, max: number, k: number): number {
    if (k < min) {
        return min;
    }

    if (k > max) {
        return max;
    }

    return k;
}

export function degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
}

export function toString(target: Record<string, unknown>): string {
    return Object.getOwnPropertyNames(target).toString();
}
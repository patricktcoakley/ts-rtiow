export function clamp(min: number, max: number, k: number): number {
    if (k < min) {
        return min;
    }

    if (k > max) {
        return max;
    }

    return k;
}

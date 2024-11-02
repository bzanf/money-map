export function parseQueryNumber(value: any, defaultValue?: number): number | undefined {
    const parsed = Number(value);
    return !isNaN(parsed) ? parsed : defaultValue;
}
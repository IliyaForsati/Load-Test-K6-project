export function randomInt(min = 0, max) {
    const num = Math.random();

    const randomInt = Math.floor(num * max) + min;

    return randomInt;
}
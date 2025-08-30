/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random number grater than or equl to min and less that max
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
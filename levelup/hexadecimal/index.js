/*
Le système décimal est à base 10 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) Le système hexadécimal est à base (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)

Ecrivez un programme qui permet de transformer une donnée décimale en hexadécimal.
Ecrivez un autre programme qui permet de transformer une donnée hexadécimale en décimal.
*/

let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

let simple = 15 // 15
let normal = 32 // 20
let complex = 529282 // 81382

/**
 * Should return an hexadecimal but return undefined if using recursivity
 * @param {Number} decimal 
 * @param {String} hex 
 * @returns String
 */
function transformDecimalToHex(decimal, hex = "") {
    let result = Math.floor(decimal / 16)
    let remainder = decimal % 16
    if (result == 0) {
        hex = hexadecimals[remainder] + hex
        return hex
    } else {
        hex = hexadecimals[remainder] + hex
        transformDecimalToHex(result, hex)
    }
}

/**
 * Transform a decimal into an hexadecimal
 * @param {Number} decimal 
 * @returns String
 */
function transformDecimalToHexWithoutRecursivity(decimal) {
    let result = decimal
    let remainder
    let hex = ""
    while (result != 0) {
        remainder = result % 16
        result = Math.floor(result / 16)
        hex = hexadecimals[remainder] + hex
        //console.log(result, remainder, hex)
        if (result == 0) {
            return hex
        }
    }
}

/*
let resultSimple = transformDecimalToHexWithoutRecursivity(simple)
console.log("simple", resultSimple)

let resultNormal = transformDecimalToHexWithoutRecursivity(normal)
console.log("normal", resultNormal)

let resultComplex = transformDecimalToHexWithoutRecursivity(complex)
console.log("complex", resultComplex)
*/

export { transformDecimalToHex, transformDecimalToHexWithoutRecursivity }

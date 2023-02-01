/*
Le système décimal est à base 10 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) Le système hexadécimal est à base (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)

Ecrivez un programme qui permet de transformer une donnée décimale en hexadécimal.
Ecrivez un autre programme qui permet de transformer une donnée hexadécimale en décimal.
*/

let hexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

let simple = 15 // 15
let normal = 32 // 20
let complex = 529282 // 81382

let hex = ""

function transformDecimalToHex(decimal, hex) {
    let result = Math.floor(decimal / 16)
    let remainder = decimal % 16
    if (result == 0) {
        hex = hexadecimals[remainder] + hex
        console.log(hex)
        console.log(typeof (hex))
        return hex
    } else {
        hex = hexadecimals[remainder] + hex
        transformDecimalToHex(result, hex)
    }
}

let resultSimple = transformDecimalToHex(simple, hex)
console.log(resultSimple)

let resultNormal = transformDecimalToHex(normal, hex)
console.log(resultNormal)

let resultComplex = transformDecimalToHex(complex, hex)
console.log(resultComplex)

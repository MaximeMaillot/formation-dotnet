/*
Ecrivez un programme qui retourne le nombre le plus élevé dans un tableau contenant N nombres entiers.
Exemple

En entrée : [10, 25, 6, 8, 9, 101 ,4] En sortie : 101
*/

function findMax(array) {
    let max = Number.MIN_VALUE
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(findMax([10, 25, 6, 8, 9, 101, 4]))

export { findMax }
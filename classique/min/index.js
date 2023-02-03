/*
Ecrivez un programme qui retourne le nombre le moins élevé dans un tableau contenant N nombre entiers.
Exemple

En entrée : [10, 25, 6, 8, 9, 101 ,4] En sortie : 4
*/

function getMin(array) {
    let min = Number.MAX_VALUE
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log(getMin([10, 25, 6, 8, 9, 101, 4]))

export { getMin }
/*
Ecrivez un programme qui retourne la taille du mot le plus petit d'une phrase.
Exemple

En entrée : elle est courte cette phrase En sortie : 3
*/

function getMinWordLength(str) {
    let word = ""
    let minWord = "anticonstitutionnellementanticonstitutionnellementanticonstitutionnellement"
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " " && str[i] != "," && str[i] != ".") {
            word += str[i]
        } else {
            if (minWord.length > word.length) {
                minWord = word
            }
            word = ""
        }
    }
    if (minWord.length > word.length) {
        minWord = word
    }
    return minWord.length
}

console.log(getMinWordLength("elle est courte cette phrase"))

export { getMinWordLength }
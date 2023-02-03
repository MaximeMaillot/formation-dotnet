/**
Ecrivez un programme qui compte le nombre totale des consonnes dans une phrase
Exemple

*En entrée : 'ceci est une phrase'* En sortie : 9
 */

function countConsonants(str) {
    return str.toLowerCase().match(/[b-df-hj-np-tv-xz]/gi).length || [].length;
}

console.log(countConsonants("Ceci est une phrase"))

export { countConsonants }
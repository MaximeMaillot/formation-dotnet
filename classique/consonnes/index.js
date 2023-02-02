/**
Ecrivez un programme qui compte le nombre totale des consonnes dans une phrase
Exemple

*En entrée : 'ceci est une phrase'* En sortie : 9
 */

function countConsonants(str) {
    console.log(str.match("[b-df-hj-np-tv-xz]"))
    return (str.toLowerCase().match("[b-df-hj-np-tv-xz]") || []).length
}

console.log(countConsonants("ceci est une phrase"))
/*
Ecrivez un programme qui vérifie qu'un nombre est un palindrome
Exemples

En entrée: rats En sortie: false

En entrée: Elle En sortie: true

En entrée: Laval En sortie: true
*/

console.log("isPalindrome")

function isPalindrome(str) {
    str = str.toLowerCase()
    let inverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        inverseStr += str[i]
    }
    console.log(str, inverseStr)
    return str == inverseStr
}

console.log(isPalindrome("rats"))
console.log(isPalindrome("Elle"))
console.log(isPalindrome("Laval"))

export { isPalindrome }
/*
Ecrivez un programme qui vérifie qu'un nombre est un palindrome
Exemples

En entrée: rats En sortie: false

En entrée: Elle En sortie: true

En entrée: Laval En sortie: true
*/

console.log("isPalindrome")

function isPalindrome(str) {
    if (typeof str != "string") {
        throw new TypeError
    }
    str = str.toLowerCase()
    let inverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        inverseStr += str[i]
    }
    return str == inverseStr
}

function isPalindromeCheckByHalf(str) {
    if (typeof str != "string") {
        throw new TypeError
    }
    str = str.toLowerCase()
    let length = Math.floor(str.length)
    for (let i = 0; i < length; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("rats"))
console.log(isPalindrome("Elle"))
console.log(isPalindrome("Laval"))

console.log(isPalindromeCheckByHalf("rats"))
console.log(isPalindromeCheckByHalf("Elle"))
console.log(isPalindromeCheckByHalf("Laval"))

//export { isPalindrome }
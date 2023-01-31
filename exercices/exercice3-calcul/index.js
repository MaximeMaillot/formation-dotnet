let nb1 = prompt("Entrez votre premier nombre :")
let nb2 = prompt("Entrez votre deuxième nombre :")
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
console.log(`Addition (${nb1} + ${nb2}) : ` + (nb1 + nb2))
console.log(`Soustraction (${nb1} - ${nb2}) : ` + (nb1 - nb2))
console.log(`Multiplication (${nb1} * ${nb2}) : ` + (nb1 * nb2))
if (nb2 == 0) {
    console.log("Division par 0 impossible")
} else {
    console.log(`Division (${nb1} / ${nb2}) : ` + (nb1 / nb2))
}

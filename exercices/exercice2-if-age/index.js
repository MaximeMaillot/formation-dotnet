
let age = prompt("Entrez votre age :")
age = parseInt(age)

if (age > 18) {
    console.log("Vous êtes majeur")
} else if (age == 18) {
    console.log("Vous êtes majeur et vous avez exactement 18 ans")
} else {
    console.log("Vous êtes mineur")
}
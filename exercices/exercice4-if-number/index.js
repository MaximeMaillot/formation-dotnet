/**
Demandez à l'utilisateur de saisir un nombre compris entre 0 et 100.
Affichez à l'utilisateur l'un des messages suivants :
"Nombre compris entre 0 et 50" ;
"Nombre compris entre 51 et 75" ;
"Nombre supérieur à 75 ou inférieur à 0".
 */

let number = prompt("Choisissez un nombre entre 1 et 100 :")
number = parseInt(number)

if (number >= 0 && number <= 50) {
    console.log("Nombre compris entre 0 et 50")
} else if (number >= 51 && number <= 75) {
    console.log("Nombre compris entre 51 et 75")
} else {
    console.log("Nombre supérieur à 75 ou inférieur à 0")
}
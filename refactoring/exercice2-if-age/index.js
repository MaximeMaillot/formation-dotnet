/**
En fonction de l'âge saisit par l'utilisateur, affichez l'un des 3 messages suivants :
"Vous êtes majeur" ;
"Vous êtes majeur et vous avez exactement 18 ans" ;
"Vous êtes mineur".
 */

import { askUserInput } from "../functions.js"
import User from "../user.js"

let user = new User()

user.setAge(askUserInput("Quelle est votre âge", "int"))

if (age > 18) {
    console.log("Vous êtes majeur")
} else if (age == 18) {
    console.log("Vous êtes majeur et vous avez exactement 18 ans")
} else {
    console.log("Vous êtes mineur")
}
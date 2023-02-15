import { isPalindromeCheckByHalf } from "../../../Algorithmie/classique/palindrome/index.js";
import { appendChildToElement } from "../functions.js"

let title = `<b>Ce mot est-il un palindrome?</b>`;
document.querySelector("#title").innerHTML = title;

let container = document.querySelector(".container");

let palindrome = prompt("Saisissez un mot");

appendChildToElement(container, "div", `Vous avez saisi : <b>${palindrome}</b>`);
appendChildToElement(container, "div", `Le mot inversé est : <b>${[...palindrome].reverse().join("")}</b>`);
if (isPalindromeCheckByHalf(palindrome)) {
  appendChildToElement(container, "div", `Le mot <b>${palindrome}</b> est un palindrome`);
} else {
  appendChildToElement(container, "div", `Le mot <b>${palindrome}</b> n'est pas un palindrome`);
}
import { isPalindromeCheckByHalf } from "../../../Algorithmie/classique/palindrome/index.js";

/**
 *
 * @param {String} id
 * @param {String} text
 * @param {String} className
 */
function appendDivToContainer(id, text, className = "lead") {
  let container = document.querySelector(".container");
  let div = document.createElement("div");
  div.setAttribute("class", className);
  div.setAttribute("id", id);
  div.innerHTML = text;
  container.appendChild(div);
}

function inverseString(str) {
  let strInverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInverse += str[i];
  }
  return strInverse;
}

let title = `<b>Ce mot est-il un palindrome?</b>`;
document.querySelector("#title").innerHTML = title;

let palindrome = prompt("Saisissez un mot");

appendDivToContainer("palindrome", `Vous avez saisi : <b>${palindrome}</b>`);
appendDivToContainer(
  "palindromeInv",
  `Le mot inversé est : <b>${inverseString(palindrome)}</b>`
);
if (isPalindromeCheckByHalf(palindrome)) {
  appendDivToContainer(
    "result",
    `Le mot <b>${palindrome}</b> est un palindrome`
  );
} else {
  appendDivToContainer(
    "result",
    `Le mot <b>${palindrome}</b> n'est pas un palindrome`
  );
}

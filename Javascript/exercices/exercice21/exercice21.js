import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

const max = 10
appendChildToElement(container, "h2", `Compter jusqu'à ${max}.`)
let liste = appendChildToElement(container, "ul")

for (let i = 0; i < max; i++) {
  appendChildToElement(liste, "li", i + 1)
}

appendChildToElement(container, "div", `Super, je sais compter jusqu'à ${max}!`)
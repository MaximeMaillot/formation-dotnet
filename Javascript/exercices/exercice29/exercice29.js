import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let nbr = parseInt(prompt("Entrez un nombre entier"))

appendChildToElement(container, "h2", { text: `Liste d'entiers chaînés` })
appendChildToElement(container, "hr")
appendChildToElement(container, "div", { text: `Vous avez saisi le nombre ${nbr}` })
appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la somme est égale à ${nbr}` })


function findIntegerChain() {
  let liste = appendChildToElement(container, "ul")
  let i = 1
  let middle = Math.round(nbr / 2)
  while (i < middle) {
    let sum = 0;
    let affichage = ""
    let j = i
    while (j < middle + 1) {
      affichage += `${j}+`
      sum += j
      if (sum == nbr) {
        appendChildToElement(liste, "li", { text: `${nbr} = ${affichage.slice(0, -1)}` })
      } else if (sum > nbr) {
        break;
      }
      j++
    }
    i++
  }
  appendChildToElement(container, "hr")
}

let startTime = performance.now()
findIntegerChain()
let endTime = performance.now()
console.log(`Call to findIntegerChain took ${endTime - startTime} milliseconds`)


function findIntegerChainHomeMade() {
  appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la somme est égale à ${nbr} avec la méthode fait maison` })
  let liste2 = appendChildToElement(container, "ul")
  let divisible = 2;
  let middle =  divisible + 1;
  let affichages = []
  while (middle > (divisible/2)) {
    middle = nbr / divisible
    //pair
    if (divisible % 2 == 0) {
      if (middle.toString().split(".")[1] == "5") {
        let affichage = ""
        for (let i = 0; i < divisible; i++) {
          affichage += `${Math.floor(middle) - (divisible / 2 - 1) + i}+`
        }
        affichages.push(`${nbr} = ${affichage.slice(0, -1)}`)
      }
    }
    //impair
    else {
      if (Number.isInteger(middle)) {
        let affichage = ""
        for (let i = 0; i < divisible; i++) {
          affichage += `${middle - Math.floor(divisible / 2) + i}+`
        }
        affichages.push(`${nbr} = ${affichage.slice(0, -1)}`)
      }
    }
    divisible++
  }
  
  affichages.reverse().forEach(affichage => {
    appendChildToElement(liste2, "li", { text: affichage })
  })
}


let startTime2 = performance.now()
findIntegerChainHomeMade()   // <---- measured code goes between startTime and endTime
let endTime2 = performance.now()
console.log(`Call to findIntegerChainHomeMade took ${endTime2 - startTime2} milliseconds`)


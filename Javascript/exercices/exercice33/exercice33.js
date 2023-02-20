import { appendChildToElement } from "../functions.js"

let notes = []

const saisirNote = function () {
  let note = 0;
  let cpt = notes.length + 1;
  do {
    note = parseInt(prompt("Rentrez une note (777 pour s'arrêter))"))
    if (note != 777) {
      notes.push(note)
      appendChildToElement(liste, "li", { text: `En Note ${cpt++}, vous avez saisi ${note}/20` })
    }
  } while (note != 777)
  result.style.visibility = 'hidden'
}

const getBestNote = function () {
  let max = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
      max = notes[i]
    }
  }
  result.innerHTML = `La meilleur note est de ${max}/20`
  result.style.color = "green"
  result.style.visibility = 'visible'
}

const getWorstNote = function () {
  let min = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] < min) {
      min = notes[i]
    }
  }
  result.innerHTML = `La moins bonne note est ${min}/20`
  result.style.color = "red"
  result.style.visibility = 'visible'
}

const getMoy = function () {
  let sum = 0;
  for (let i = 0; i < notes.length; i++) {
    sum += notes[i]
  }
  result.innerHTML = `La moyenne est de ${Math.round((sum / notes.length) * 10) / 10}/20`
  result.style.color = "grey"
  result.style.visibility = 'visible'
}

let container = document.querySelector(".container");

appendChildToElement(container, "h2", { text: `Gestion des notes avec menu` })
let divButton = appendChildToElement(container, "div")
appendChildToElement(container, "h2", { text: `Notes déjà saisies` })
let liste = appendChildToElement(container, "ul")
let result = appendChildToElement(container, "div")

appendChildToElement(divButton, "button", {
  className: ["btn", "btn-primary"],
  text: `Saisir les notes`,
  function: { fn: saisirNote, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-success"],
  text: `Voir la meilleur note`,
  function: { fn: getBestNote, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-danger"],
  text: `Voir la moins bonne notes`,
  function: { fn: getWorstNote, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-secondary"],
  text: `Voir la moyenne des notes`,
  function: { fn: getMoy, event: "onclick" }
})
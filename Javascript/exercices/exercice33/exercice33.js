import { appendChildToElement } from "../functions.js"

let notes = []

function saisirNote(notes, result, liste) {
  let note = 0;
  let cpt = notes.length + 1;
  do {
    note = parseInt(prompt("Rentrez une note (777 pour s'arrêter))"))
    if (note != 777) {
      notes.push(note)
      appendChildToElement(liste, "li", { text: `En Note ${cpt++}, vous avez saisi ${note}/20` })
    }
  } while (note != 777)
  result.innerHTML = ""
}

function getBestNote(notes, result) {
  let max = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
      max = notes[i]
    }
  }
  result.innerHTML = `La meilleur note est de ${max}/20`
  result.style.color = "green"
}

function getWorstNote(notes, result) {

  let min = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] < min) {
      min = notes[i]
    }
  }
  result.innerHTML = `La moins bonne note est ${min}/20`
  result.style.color = "red"
}

const getMoy = function (notes, result) {
  let sum = 0;
  for (let i = 0; i < notes.length; i++) {
    sum += notes[i]
  }
  result.innerHTML = `La moyenne est de ${Math.round((sum / notes.length) * 10) / 10}/20`
  result.style.color = "grey"
}

function removeAllListChild(notes, result, liste) {
  while (liste.lastElementChild) {
    liste.removeChild(liste.lastElementChild);
  }
  result.innerHTML = ""
  notes = []
}

const handleButtonClick = function (action) {
  if (action == "saisie") {
    saisirNote(notes, result, liste)
  } else if (notes.length > 0) {
    switch (action) {
      case "max":
        getBestNote(notes, result)
        break;
      case "min":
        getWorstNote(notes, result)
        break;
      case "moy":
        getMoy(notes, result)
        break;
      case "clear":
        removeAllListChild(notes, result, liste)
        break;
      default:
        break;
    }
  } else {
    result.color = "black"
    result.innerHTML = "Pas de notes entrés par l'utilisateur"
  }
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
  function: { fn: handleButtonClick, parameters: ["saisie"], event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-success"],
  text: `Voir la meilleur note`,
  function: { fn: handleButtonClick, parameters: ["max"], event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-danger"],
  text: `Voir la moins bonne notes`,
  function: { fn: handleButtonClick, parameters: ["min"], event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-secondary"],
  text: `Voir la moyenne des notes`,
  function: { fn: handleButtonClick, parameters: ["moy"], event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-info"],
  text: `Clear`,
  function: { fn: handleButtonClick, parameters: ["clear"], event: "onclick" }
})
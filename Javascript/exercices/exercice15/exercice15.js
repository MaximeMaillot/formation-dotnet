import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let tailles = [
  [
    {
      minPoids: 43, maxPoids: 47, minTaille: 145, maxTaille: 169
    },
    {
      minPoids: 43, maxPoids: 53, minTaille: 145, maxTaille: 166
    },
    {
      minPoids: 43, maxPoids: 59, minTaille: 145, maxTaille: 163
    },
    {
      minPoids: 43, maxPoids: 65, minTaille: 145, maxTaille: 160
    }
  ],
  [
    {
      minPoids: 48, maxPoids: 53, minTaille: 169, maxTaille: 178
    },
    {
      minPoids: 54, maxPoids: 59, minTaille: 166, maxTaille: 175
    },
    {
      minPoids: 60, maxPoids: 65, minTaille: 163, maxTaille: 172
    },
    {
      minPoids: 66, maxPoids: 71, minTaille: 160, maxTaille: 169
    }
  ],
  [
    {
      minPoids: 54, maxPoids: 59, minTaille: 178, maxTaille: 183
    },
    {
      minPoids: 60, maxPoids: 65, minTaille: 175, maxTaille: 183
    },
    {
      minPoids: 66, maxPoids: 71, minTaille: 172, maxTaille: 183
    },
    {
      minPoids: 72, maxPoids: 77, minTaille: 163, maxTaille: 183
    }
  ]
]

function getTaille(length, weight) {
  try {
    if (weight < tailles[0].minPoids || length < tailles[0].minTaille || weight > tailles[tailles.length - 1].maxPoids || length > tailles[tailles.length - 1].maxTaille) {
      return -1
    }
    tailles.forEach((taille, index) => {
      /*
      console.log("beforeIfTaille", index, weight, length, taille)
      console.log(`${weight} >= ${taille[0].minPoids}`, weight >= taille[0].minPoids)
      console.log(`${weight} <= ${taille[taille.length - 1].maxPoids}`, weight <= taille[taille.length - 1].maxPoids)
      console.log(`${length} <= ${taille[0].minTaille}`, length >= taille[0].minTaille)
      console.log(`${length} <= ${taille[taille.length - 1].maxTaille}`, length <= taille[taille.length - 1].maxTaille)
      */
      if (weight >= taille[0].minPoids &&
        weight <= taille[taille.length - 1].maxPoids &&
        length >= taille[0].minTaille &&
        length <= taille[taille.length - 1].maxTaille) {
        taille.forEach(tail => {
          /*
          console.log("beforeIfTail")
          console.log(`${weight} >= ${tail.minPoids}`, weight >= tail.minPoids)
          console.log(`${weight} <= ${tail.maxPoids}`, weight <= tail.maxPoids)
          console.log(`${length} <= ${tail.minTaille}`, length >= tail.minTaille)
          console.log(`${length} <= ${tail.maxTaille}`, length <= tail.maxTaille)
          */
          if (weight >= tail.minPoids && weight <= tail.maxPoids && length >= tail.minTaille && length <= tail.maxTaille) {
            throw (index + 1)
          }
        })
      }
    })
    return -1
  } catch (result) {
    return result
  }
}


let length = prompt("Saisissez votre taille en cm")
length = parseInt(length)
let weight = prompt("Saisissez votre poids en kg")
weight = parseInt(weight)

appendChildToElement(container, "div", `Pour <b>${length}cm</b> et <b>${weight}kg</b> : Prenez la taille ${getTaille(length, weight)}`)

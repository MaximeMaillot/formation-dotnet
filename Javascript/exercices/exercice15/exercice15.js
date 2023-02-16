import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let taille1 = [
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
]

let taille2 = [
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
]

let taille3 = [
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

function getTaille(taille, poids) {
  try {
    if (poids < 43 || taille < 145 || poids > 77 || taille > 183) {
      throw -1
    } if (poids >= taille1[0].minPoids &&
      poids <= taille1[taille1.length - 1].maxPoids &&
      taille >= taille1[0].minTaille &&
      taille <= taille1[taille1.length - 1].maxTaille) {
      taille1.forEach(tail => {
        if (poids >= tail.minPoids && poids <= tail.maxPoids && taille >= tail.minTaille && taille <= tail.maxTaille) {
          throw 1
        }
      })
    } if (poids >= taille2[0].minPoids &&
      poids <= taille2[taille2.length - 1].maxPoids &&
      taille >= taille2[0].minTaille &&
      taille <= taille2[taille2.length - 1].maxTaille) {
      taille2.forEach(tail => {
        if (poids >= tail.minPoids && poids <= tail.maxPoids && taille >= tail.minTaille && taille <= tail.maxTaille) {
          throw 2
        }
      })
    } if (poids >= taille3[0].minPoids &&
      poids <= taille3[taille3.length - 1].maxPoids &&
      taille >= taille3[0].minTaille &&
      taille <= taille3[taille3.length - 1].maxTaille) {
      taille3.forEach(tail => {
        if (poids >= tail.minPoids && poids <= tail.maxPoids && taille >= tail.minTaille && taille <= tail.maxTaille) {
          throw 3
        }
      })
    }
  } catch (result) {
    return result
  }
}


let length = prompt("Saisissez votre taille en cm")
length = parseInt(length)
let weight = prompt("Saisissez votre poids en kg")
weight = parseInt(weight)

appendChildToElement(container, "div", `Pour <b>${length}cm</b> et <b>${weight}kg</b> : Prenez la taille ${getTaille(length, weight)}`)

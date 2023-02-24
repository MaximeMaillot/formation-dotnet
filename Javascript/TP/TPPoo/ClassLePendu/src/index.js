import Pendu from "./Pendu.js"
import { wordList } from "./wordlist.js"

const Img = document.querySelector("#img")
const Masque = document.querySelector("#masque")
const UserInput = document.querySelector("#user-input")
const Message = document.querySelector("#message")
const Validate = document.querySelector("#validate")
const ListProposition = document.querySelector("#list-proposition")
const Replay = document.querySelector("#replay")
let pendu = new Pendu(wordList[Math.floor(Math.random() * wordList.length)])

function init() {
    updateView()
    Validate.addEventListener("click", validateLetter)
    Replay.addEventListener("click", replay)
    enableGame()
}

function updateView() {
    Img.src = `./assets/blanc/pendu-${pendu.nbEssais}.jpg`
    Masque.innerHTML = pendu.masque
    ListProposition.innerHTML = pendu.dejaPropose
}

function disableGame() {
    Validate.disabled = true
    UserInput.removeEventListener("keyup", validateLetter)
}

function enableGame() {
    Validate.disabled = false
    UserInput.addEventListener("keyup", validateLetter)
}


function validateLetter() {
    if (UserInput.value.length == 1) {
        let found = pendu.proposition(UserInput.value)
        UserInput.value = ""
        if (pendu.win) {
            disableGame()
            Message.innerHTML = `Bravo !!! Vous avez gagné !!!`
            Message.style.color = "green"
        } else if (found) {
            Message.innerHTML = `Bravo, vous avez trouvé une lettre!`
            Message.style.color = "green"
        } else if (pendu.nbEssais <= 0) {
            disableGame()
            Message.innerHTML = `Dommage, vous avez perdu! Le mot mystère était <br>${pendu.motATrouver}`
            Message.style.color = "red"
        } else if (!found) {
            Message.innerHTML = `Dommage, cette lettre n'est pas dans le mot mystère!`
            Message.style.color = "red"
        }
        updateView()
    }
}

function replay() {
    pendu = new Pendu(wordList[Math.floor(Math.random() * wordList.length)])
    Message.innerHTML = "&nbsp;"
    UserInput.value = ""
    updateView()
    enableGame()
}

init()
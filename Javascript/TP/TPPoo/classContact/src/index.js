import Contact from "./Contact.js";

const Form = {
    nom: document.querySelector("#nom"),
    prenom: document.querySelector("#prenom"),
    dateNaissance: document.querySelector("#date"),
    telephone: document.querySelector("#tel"),
    email: document.querySelector("#mail")
}

const Contacts = document.querySelector("#contacts")

const Ajouter = document.querySelector("#add")

let contacts = []

function init() {
    console.log("init")
    Ajouter.addEventListener("click", addContact)
}

function updateView() {

}

function addContact() {
    Form.titre = document.querySelector("input[name=titre]:checked")
    const index = contacts.push(new Contact(Form.titre.value, Form.nom.value, Form.prenom.value, Form.dateNaissance.value, Form.telephone.value, Form.email.value)) - 1
    const tr = document.createElement("tr")
    Contacts.appendChild(tr)
    for (const key in contacts[index]) {
        const td = document.createElement("td")
        td.innerText = contacts[index][key]
        tr.appendChild(td)
    }
    const td = document.createElement("td")
    tr.appendChild(td)
    const deleteDiv = document.createElement("i")
    deleteDiv.classList.add(["fa-solid"], ["fa-trash"])
    td.appendChild(deleteDiv)
    deleteDiv.addEventListener("click", () => {
        tr.remove()
    })
}

init()
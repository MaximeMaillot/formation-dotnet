function appendChildToElement(element, childType, text = null, id = null, className = null) {
  let child = document.createElement(childType);
  if (className != null) {
    child.setAttribute("class", className);
  }
  if (id != null) {
    child.setAttribute("id", id);
  }
  if (text != null) {
    child.innerHTML = text;
  }
  element.appendChild(child);
  return child
}

let capital = prompt("capital")
capital = parseFloat(capital)
let taux = prompt("taux")
taux = parseFloat(taux)
let duree = prompt("duree")
duree = parseInt(duree)

let container = document.querySelector(".container");

appendChildToElement(container, "div", `Avec un capital initial de <b>${capital}€</b>, placé à <b>${taux}%</b> pendant </b>${duree} année(s)</b>`)
let list = appendChildToElement(container, "ul")
appendChildToElement(list, "li", `Le montant total des intérêts s'élèvera à <b>${capital * taux / 100 * duree}€</b>`)
appendChildToElement(list, "li", `Le capital final à l'issue sera de <b>${capital + (capital * taux / 100 * duree)}€</b>`)

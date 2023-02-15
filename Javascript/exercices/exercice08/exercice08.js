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

let prixHT = prompt("Donnez le prix Hors Taxe de votre produit")
prixHT = parseFloat(prixHT)
let taux = prompt("Donnez le taux de la T.V.A en %")
taux = parseFloat(taux)


let container = document.querySelector(".container");

appendChildToElement(container, "div", `Le prix H.T de l'objet étant de <b>${prixHT}€</b> et le taux de T.V.A applicable de <b>${taux}%</b>`)
let liste = appendChildToElement(container, "ul")
appendChildToElement(liste, "li", `Le montant de la T.V.A s'élèvera à <b>${prixHT * (taux / 100)}€</b>`)
appendChildToElement(liste, "li", `Le prix TTC de l'objet sera <b>${prixHT + (prixHT * (taux / 100))}€</b>`)


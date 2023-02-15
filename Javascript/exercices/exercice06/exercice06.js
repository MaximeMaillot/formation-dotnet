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

let container = document.querySelector(".container");

let cote = prompt("Donnez la valeur du côté du carré");
cote = parseInt(cote)
appendChildToElement(container, "h2", `<b>Calcul de l'aire et du périmètre d'un carré</b>`)

appendChildToElement(container, "div", `Les longueurs des côtés du carré étant de ${cote}cm,`, null, "lead");

let listCarre = appendChildToElement(container, "ul")
appendChildToElement(listCarre, "li", `Le périmètre de ce carré est de ${cote * 4}cm`)
appendChildToElement(listCarre, "li", `L'aire de ce carré est de ${cote * cote}cm²`)

appendChildToElement(container, "hr")

let longueur = prompt("Donnez la valeur de la longueur du rectangle");
longueur = parseInt(longueur)
let largeur = prompt("Donnez la valeur de la largeur du rectangle");
largeur = parseInt(largeur)
appendChildToElement(container, "h2", `<b>Calcul de l'aire et du périmètre d'un réctangle</b>`)
appendChildToElement(container, "div", `Les longueurs des côtés du réctangle étant de ${longueur}cm pour la longueur et ${largeur}cm pour la largeur`)

let listRectangle = appendChildToElement(container, "ul")
appendChildToElement(listRectangle, "li", `Le périmètre de ce réctangle est de ${(largeur * 2) + (longueur * 2)}cm`)
appendChildToElement(listRectangle, "li", `L'aire de ce carré est de ${longueur * largeur}cm²`)
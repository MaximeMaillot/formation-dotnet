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

function calculateHypothenuse(cote1, cote2) {
  return Math.sqrt(cote1 * cote1 + cote2 * cote2)
}

let container = document.querySelector(".container");

let cote1 = prompt("Donnez la valeur du 1er côté")
cote1 = parseFloat(cote1)
let cote2 = prompt("Donnez la valeur du 2ème côté")
cote2 = parseFloat(cote2)
appendChildToElement(container, "div", `Les longueurs des côtés adjacent à l'angle droit étant de ${cote1}cm et de ${cote2}cm,`, null, "lead");
let liste = appendChildToElement(container, "ul")
appendChildToElement(liste, "li", `la longueur de l'hypothénuse est de ${Math.round(calculateHypothenuse(cote1, cote2) * 100) / 100}cm`)


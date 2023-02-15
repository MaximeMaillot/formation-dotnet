/**
 *
 * @param {String} id
 * @param {String} text
 * @param {String} className
 */
function appendDivToContainer(id, text, className = "lead") {
  let container = document.querySelector(".container");
  let div = document.createElement("div");
  div.setAttribute("class", className);
  div.setAttribute("id", id);
  div.innerHTML = text;
  container.appendChild(div);
}

let inputDiametre = 10;

let title = `<b>Utilisation des functions() de l'objet Math</b>`;
document.querySelector("#title").innerHTML = title;
document.querySelector("#pi").innerHTML = `La valeur de π est : ${Math.PI}`;

appendDivToContainer("diametre", `Diamètre : ${inputDiametre}`);

let perimetre = inputDiametre * Math.PI;
appendDivToContainer("perimetre", `Perimètre : ${perimetre}cm`);

let aire = Math.pow(inputDiametre / 2, 2) * Math.PI;
appendDivToContainer("aire", `Aire : ${aire}cm²`);
appendDivToContainer(
  "perimetreArrondi",
  `Perimètre (arrondi) : ${Math.round(perimetre)}cm`
);
appendDivToContainer("aireArrondi", `Aire (arrondi) : ${Math.round(aire)}cm²`);

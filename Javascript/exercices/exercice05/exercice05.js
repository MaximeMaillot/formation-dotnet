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

/**
 *
 * @param {String} str
 * @returns
 */
function capitalizeStr(str) {
  let strArray = str.split(" ");
  strArray.forEach((word, index) => {
    strArray[index] = capitalizeFirstLetter(word);
  });
  return strArray.join(" ");
}

/**
 *
 * @param {String} str
 * @returns
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let str = prompt("Saisissez une phrase");

appendDivToContainer("user-input", `Vous avez saisi : <b>${str}</b>`);
appendDivToContainer(
  "user-input-lower-case",
  `La chaîne en minuscule : <b>${str.toLowerCase()}</b>`
);
appendDivToContainer("user-input-array", `Mise en tableau : ${str.split("")}`);

appendDivToContainer(
  "user-input-shifted",
  `La chaîne après traitement : ${capitalizeStr(str)}`
);

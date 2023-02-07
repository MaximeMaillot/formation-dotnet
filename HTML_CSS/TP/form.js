import { calculateAgios } from "./../../Algorithmie/TP/TP2/agios.js";

function submitForm() {
  let overdraftField = document.getElementById("overdraft");
  let dayField = document.getElementById("day");
  let agiosField = document.getElementById("agios");

  console.log(
    overdraftField.innerHTML,
    dayField.innerHTML,
    agiosField.innerHTML
  );

  let agios = calculateAgios(overdraft, day);
}

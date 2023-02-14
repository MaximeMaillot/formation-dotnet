let title = `<b>Addition de deux variables numériques</b>`;
document.querySelector("#title").innerHTML = title;

let params = new URLSearchParams(location.search);
let nb1 = params.getAll("inputNumber1");
let nb2 = params.getAll("inputNumber2");
let result = parseInt(nb1) + parseInt(nb2);

document.querySelector("#number1").innerHTML = `Vous avez saisi <b>${nb1}</b>`;
document.querySelector("#number2").innerHTML = `Vous avez saisi <b>${nb2}</b>`;
document.querySelector(
  "#result"
).innerHTML = `La somme de <b>${nb1} + ${nb2} = ${result}</b>`;

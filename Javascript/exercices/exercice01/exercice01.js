let title = "Addition de deux variables de type chaînes (Concaténation)";
document.querySelector(".display-4").innerHTML = title;

let params = new URLSearchParams(location.search);
let fn = params.getAll("firstname");
let ln = params.getAll("lastname");

if (fn != undefined && ln != undefined) {
  let fulln = fn + " " + ln;
  let fullnHTML = document.querySelector("#result");
  fullnHTML.innerHTML = fulln;
}

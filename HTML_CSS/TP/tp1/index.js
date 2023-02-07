/*
console.log("Bienvenue chez GTM Bank");
 
let isOverdraft = prompt("Voulez-vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)");
let overdraft = "";
if (isOverdraft == "y" || isOverdraft =="Y"){
    do {overdraft = prompt("Saisissez le montant du découvert entre 100 € et 2000 €");

    } while (overdraft <100 || overdraft>2000)
};
let sold = prompt("Saisissez le dépôt (le montant d'ouverture de compte minimum est de 500 €)");
sold = parseInt(sold);
while (sold <500){
    sold = prompt("Saisissez le dépôt (le montant d'ouverture de compte minimum est de 500 €)")
}
console.log(`Solde (€): ${sold}`)
if (isOverdraft == "y" || isOverdraft =="Y"){
    console.log(`Découvert (€): ${overdraft}`)
}else {
    console.log("Découvert (€): 0")
}
*/
/* DECLARATIONS*/
function askUser(msg, type) {
  let userInput = prompt(msg);
  if (type == "int") {
    userInput = parseInt(userInput);
  }
  return userInput;
}

function getOverdraft(userInput) {
  let overdraft = 0;
  if (userInput == "y" || userInput == "Y") {
    do {
      overdraft = askUser(
        "Saisissez le montant du découvert entre 100 € et 2000 €",
        "int"
      );
    } while (overdraft < 100 || overdraft > 2000);
  }
  return overdraft;
}

function getSold() {
  let sold = 0;
  do {
    sold = askUser(
      "Saisissez le dépôt (le montant d'ouverture de compte minimum est de 500 €)",
      "int"
    );
  } while (sold < 500);
  return sold;
}
/*EXECUTION*/
console.log("Bienvenue chez GTM Bank");
let userInputOverdraft = askUser(
  "Voulez-vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)",
  "string"
);
let userOverdraft = getOverdraft(userInputOverdraft);
let userSold = getSold();
console.log(`Solde (€): ${userSold}`);

console.log(`Découvert (€): ${userOverdraft}`);

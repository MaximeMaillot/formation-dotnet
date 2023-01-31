console.log("Bienvenue chez GMT Bank")
let isOverdraft = prompt("Voulez-vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)")
let overdraft = 0
if (isOverdraft == "y" || isOverdraft == "Y") {
    overdraft = prompt("Saisissez le montant du découvert entre 100 et 2000€")
    overdraft = parseInt(overdraft)
    while (overdraft < 100 || overdraft > 2000) {
        overdraft = prompt("Saisissez le montant du découvert entre 100 et 2000€")
        overdraft = parseInt(overdraft)
    }
}
let sold = prompt("Saisissez le montant du solde (minimum 500€)")
sold = parseInt(sold)
while (sold < 500) {
    sold = prompt("Saisissez le montant du solde (minimum 500€)")
    sold = parseInt(overdraft)
}
console.log("Solde : " + sold)
console.log("Découvert : " + overdraft)
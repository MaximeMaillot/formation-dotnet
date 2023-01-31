console.log("Bienvenue chez GMT Bank")
let overdraft = prompt("Saisissez le montant de votre découvert :")
overdraft = parseInt(overdraft) // 500€
let sold = prompt("Saisissez le montant de votre solde : ")
sold = parseInt(sold) // -400€
while (sold + overdraft < 0) { // 100 > 0
    sold = prompt("Saisissez le montant de votre solde : ")
    sold = parseInt(sold)
}

let authorizedWithdraw = sold + overdraft

let withdraw = prompt("Saisissez le montant de votre retrait :")
withdraw = parseInt(withdraw)
if (withdraw == 0) {
    console.log("quitter")
}
if (withdraw > authorizedWithdraw) {
    console.log("solde insuffisant")
} else {
    sold = sold - withdraw
}

console.log("solde " + sold)
console.log("découvert : " + overdraft)
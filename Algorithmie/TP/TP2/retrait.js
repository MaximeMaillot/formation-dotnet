/**
Mission développeur 1 : ouverture du compte
Écrivez un algorithme qui demande au client lors de la création d'un nouveau compte bancaire chez GTM Bank :

La possibilité d'avoir recours au découvert (oui ou non) ;
Si oui, le montant du découvert autorisé entre 100 et 2000 €, le client détermine ce montant en fonction de ses besoins
Le montant à transférer pour l'ouverture du compte, la somme initiale doit être au minimum de 500 € ;
Forcez le client à respecter les conditions (montant du départ et la fourchette du découvert).
Pour résumé :

Demandez au client s'il souhaite avoir droit au découvert ;
Si oui, demandez au client le montant du découvert (valeur comprise entre 100 et 2000 €).
Demandez au client le montant à transférer sur le compte (>= 500€) pour l'ouverture du compte ;
En sortie, votre algorithme affiche la somme initiale et le montant du découvert (zéro s'il n'a pas opté pour le découvert).
 */

let operations = [];

function getWithdrawLimit(sold, overdraft) {
  return sold + overdraft;
}

function withdrawAmount(amount) {
  let authorizedWithdraw = getWithdrawLimit(sold, overdraft);
  if (getWithdrawLimit <= amount) {
    operations.push({
      type: "withdrawAmount",
      amount: amount,
      oldSold: sold,
      newSold: sold - amount,
      accepted: true,
    });
    sold -= amount;
  } else {
    operations.push({
      type: "withdrawAmount",
      amount: amount,
      oldSold: sold,
      newSold: sold,
      accepted: false,
    });
    console.log("solde insuffisant");
  }
}

function retrait() {
  console.log("Bienvenue chez GMT Bank");
  let overdraft = prompt("Saisissez le montant de votre découvert :");
  overdraft = parseInt(overdraft);
  let sold = prompt("Saisissez le montant de votre solde : ");
  sold = parseInt(sold);
  while (sold + overdraft < 0) {
    sold = prompt("Saisissez le montant de votre solde : ");
    sold = parseInt(sold);
  }

  let withdraw = prompt("Saisissez le montant de votre retrait :");
  withdraw = parseInt(withdraw);
  if (withdraw == 0) {
    console.log("quitter");
  } else {
    withdrawAmount(withdraw);
  }

  console.log("solde " + sold);
  console.log("découvert : " + overdraft);
}

export { retrait };

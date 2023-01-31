let number = 11
do {
    number = prompt("Saisissez un nombre entre 0 et 10 :")
    number = parseInt(number)
} while (number < 0 || number > 10)

console.log(number)
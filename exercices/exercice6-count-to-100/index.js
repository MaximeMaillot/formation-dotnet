let max = 100
let number = max + 1
do {
    number = prompt("Entrez un nombre inférieur à 100 :")
    number = parseInt(number)
}
while (number > max)

let result = ""
for (let i = number; i < max; i++) {
    result += i + " "
}
result += max

console.log(result)
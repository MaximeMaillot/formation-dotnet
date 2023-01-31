let arrayNotes = []

let userInput = prompt("Entrez la note : ")
userInput = parseInt(userInput)
while (userInput != -1) {
    arrayNotes.push(userInput)
    userInput = prompt("Entrez la note : ")
    userInput = parseInt(userInput)
}
let sumNotes = arrayNotes.reduce((sum, currentValue) => sum + currentValue, 0)

console.log(`Nombre de notes : ${arrayNotes.length}, Moyenne de la classe : ${sumNotes / arrayNotes.length}`)